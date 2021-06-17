import React, { useState } from "react";
import {
  Text,
  VStack,
  HStack,
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
import { defaultStepValue, minStepValue } from "../../utils/constants";
import { TimeQuerierStore } from "../../store/timeQuerier";

const TimeQuerier: React.SFC = () => {
  const styles = useStyleConfig("DateTime", {});
  const timeQuerierStore = TimeQuerierStore.useContainer();
  const [startTime, setStartTime] = useState(
    moment(timeQuerierStore.selectedStartTimestamp)
  );
  const [endTime, setEndTime] = useState(
    moment(timeQuerierStore.selectedEndTimestamp)
  );
  const [stepTime, setStepTIme] = useState(defaultStepValue);
  const [error, setError] = useState<undefined | string>(undefined);

  const handleStartChange = (date: moment.Moment | string) => {
    console.log(date);
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
      setStepTIme(valueAsNumber);
  };
  const valid = (current: moment.Moment) => {
    return current.isBefore(moment());
  };
  const handleFetch = () => {
    if (
      endTime.isBefore(startTime) ||
      endTime.isAfter(moment()) ||
      stepTime < minStepValue
    )
      setError("Kindy check you input");
    else {
      timeQuerierStore.changeTimeQuerier(
        startTime.toISOString(),
        endTime.toISOString(),
        stepTime
      );
    }
  };

  return (
    <VStack mt={4}>
      <HStack pb="1" w="100%" justifyContent="space-between">
        <Text>Start Time</Text>

        <Box sx={styles}>
          <Datetime
            value={startTime}
            inputProps={{ className: "custom-datepicker" }}
            onChange={handleStartChange}
            isValidDate={valid}
          />
        </Box>
      </HStack>
      <HStack pb="1" w="100%" justifyContent="space-between">
        <Text>End Time</Text>
        <Box sx={styles}>
          <Datetime
            value={endTime}
            inputProps={{ className: "custom-datepicker" }}
            onChange={handleEndChange}
            isValidDate={valid}
            data-testid="end-time"
          />
        </Box>
      </HStack>
      <HStack pb="1" w="100%" justifyContent="space-between">
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
      </HStack>
      <HStack pt="2" pb="1" w="100%">
        <Button
          onClick={handleFetch}
          data-testid="fetch-button"
          variant="fetch"
          w="60%"
          size="md"
        >
          FETCH
        </Button>
      </HStack>
      {error !== undefined ? (
        <Alert data-testid="error-message" fontSize="xs" status="error">
          <AlertIcon />
          {error}
        </Alert>
      ) : null}
    </VStack>
  );
};

export default TimeQuerier;
