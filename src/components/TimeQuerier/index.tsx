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
import moment from "moment";
import Datetime from "react-datetime";
import constants from "../../utils/constants";
import { useTimeQuerierStore } from "../../store/timeQuerier";

const TimeQuerier: React.FC = () => {
  const styles = useStyleConfig("DateTime", {});
  const { selectedStartTimestamp, selectedEndTimestamp, changeTimeQuerier } =
    useTimeQuerierStore();
  const { defaultStepValue, minStepValue, dateFormat, timeFormat } = constants;
  const [startTime, setStartTime] = useState(moment(selectedStartTimestamp));
  const [endTime, setEndTime] = useState(moment(selectedEndTimestamp));
  const [stepTime, setStepTime] = useState(defaultStepValue);
  const [error, setError] = useState<undefined | string>(undefined);

  const handleStartChange = (date: moment.Moment | string) => {
    if (typeof date !== "string") {
      setStartTime(date);
      setError(undefined);
    }
  };
  const handleEndChange = (date: moment.Moment | string) => {
    if (typeof date !== "string") {
      setEndTime(date);
      setError(undefined);
    }
  };
  const handleStepChange = (valueAsString: string, valueAsNumber: number) => {
    if (valueAsString !== "" && valueAsNumber >= minStepValue)
      setStepTime(valueAsNumber);
  };
  const validStartTime = (current: moment.Moment) => {
    return current.isAfter(moment());
  };
  const validEndTime = (current: moment.Moment) => {
    return current.isAfter(startTime);
  };
  const handleFetchTimeSeriesData = () => {
    if (
      endTime.isBefore(startTime) ||
      endTime.isAfter(moment()) ||
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
          <Datetime
            value={startTime}
            dateFormat={dateFormat}
            timeFormat={timeFormat}
            inputProps={{ className: "custom-datepicker start-time" }}
            onChange={handleStartChange}
            isValidDate={validStartTime}
          />
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
          <Datetime
            value={endTime}
            dateFormat={dateFormat}
            timeFormat={timeFormat}
            inputProps={{ className: "custom-datepicker end-time" }}
            onChange={handleEndChange}
            isValidDate={validEndTime}
          />
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
