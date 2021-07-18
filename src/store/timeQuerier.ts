import { useState } from "react";
import { createContainer } from "unstated-next";
import constants from "./../utils/constants";

interface TimeQuerierStateInterface {
  selectedStartTimestamp: string;
  selectedEndTimestamp: string;
  selectedStepValue: number;
}
interface TimeQuerierHookInterface {
  timeQuerierState: TimeQuerierStateInterface;
  changeTimeQuerier: (
    selectedStartTimestamp: string,
    selectedEndTimestamp: string,
    selectedStepValue: number
  ) => void;
}

const initTimeQuerierStore: TimeQuerierStateInterface = {
  selectedStartTimestamp: constants.defaultStartTimestamp,
  selectedEndTimestamp: constants.defaultEndTimestamp,
  selectedStepValue: constants.defaultStepValue,
};

const useTimeQuerier = (
  initialState = initTimeQuerierStore
): TimeQuerierHookInterface => {
  const [timeQuerierState, setTimeState] = useState(initialState);
  const changeTimeQuerier = (
    selectedStartTimestamp: string,
    selectedEndTimestamp: string,
    selectedStepValue: number
  ) => {
    setTimeState({
      selectedStartTimestamp,
      selectedEndTimestamp,
      selectedStepValue,
    });
  };

  return {
    timeQuerierState,
    changeTimeQuerier,
  };
};

export const TimeQuerierStore = createContainer(useTimeQuerier);
