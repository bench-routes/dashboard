import { useState } from "react";
import { createContainer } from "unstated-next";
import {
  defaultStartTimestamp,
  defaultEndTimestamp,
  defaultStepValue,
} from "./../utils/constants";

const useTimeQuerier = () => {
  const [selectedStartTimestamp, setStartTimestamp] = useState(
    defaultStartTimestamp
  );
  const [selectedEndTimestamp, setEndTimeStamp] = useState(defaultEndTimestamp);
  const [selectedStepValue, setStepValue] = useState(defaultStepValue);
  const changeTimeQuerier = (
    startTimestamp: string,
    endTimestamp: string,
    stepValue: number
  ) => {
    setStartTimestamp(startTimestamp);
    setEndTimeStamp(endTimestamp);
    setStepValue(stepValue);
  };

  return {
    selectedStartTimestamp,
    selectedEndTimestamp,
    selectedStepValue,
    changeTimeQuerier,
  };
};

export const TimeQuerierStore = createContainer(useTimeQuerier);
