import React, { useState } from "react";
import {
  Text,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useStyleConfig,
  Box,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import constants from "../../utils/constants";
import { useTimeQuerierStore } from "../../store/timeQuerier";
import dayjs from "dayjs";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const TimeQuerier: React.FC = () => {
  const styles = useStyleConfig("DateTime", {});
  const {
    selectedStartTimestamp,
    selectedEndTimestamp,
    changeTimeQuerier,
  } = useTimeQuerierStore();
  const { defaultStepValue, minStepValue, dateFormat, timeFormat } = constants;
  const [startTime, setStartTime] = useState(dayjs(selectedStartTimestamp));
  const [endTime, setEndTime] = useState(dayjs(selectedEndTimestamp));
  const [stepTime, setStepTime] = useState(defaultStepValue);
  const [error, setError] = useState<undefined | string>(undefined);

  const handleStartChange = (date: dayjs.Dayjs | string) => {
    if (typeof date !== "string") {
      setStartTime(date);
      setError(undefined);
    }
  };
  const handleEndChange = (date: dayjs.Dayjs | string) => {
    if (typeof date !== "string") {
      setEndTime(date);
      setError(undefined);
    }
  };
  const handleStepChange = (valueAsString: string, valueAsNumber: number) => {
    if (valueAsString !== "" && valueAsNumber >= minStepValue)
      setStepTime(valueAsNumber);
  };
  const valid = (current: dayjs.Dayjs) => {
    return current.isBefore(dayjs());
  };
  const handleFetchTimeSeriesData = () => {
    if (
      endTime.isBefore(startTime) ||
      endTime.isAfter(dayjs()) ||
      stepTime < minStepValue
    )
      setError("Kindy check your input");
    else {
      changeTimeQuerier(
        startTime.toISOString(),
        endTime.toISOString(),
        stepTime
      );
    }
  };

  return (
    <VStack mt={4} w="100%">
      <Box
        d="flex"
        pb="1"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>Start Time</Text>
        <Box sx={styles}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              value={startTime}
              isValidDate={valid}
              onChange={handleStartChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Box>
      </Box>
      <Box
        d="flex"
        pb="1"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>End Time</Text>
        <Box sx={styles}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              value={endTime}
              isValidDate={valid}
              onChange={handleEndChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Box>
      </Box>
      <Box
        d="flex"
        pb="1"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>Step Time (s)</Text>
        <NumberInput
          w="60%"
          size="sm"
          value={stepTime}
          onChange={handleStepChange}
          min={minStepValue}
          data-testid="step-value"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Box>
      <Box d="flex" pt="2" pb="1" w="100%">
        <Button
          onClick={handleFetchTimeSeriesData}
          data-testid="fetch-button"
          variant="fetch"
          w="60%"
          size="md"
        >
          FETCH
        </Button>
      </Box>
      {error && (
        <Alert data-testid="error-message" fontSize="xs" status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
    </VStack>
  );
};

export default TimeQuerier;
