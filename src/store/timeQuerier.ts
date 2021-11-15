import create, { SetState, GetState } from "zustand";
import { persist, devtools, StoreApiWithPersist } from "zustand/middleware";
import constants from "./../utils/constants";

type TimeQuerierStore = {
  selectedStartTimestamp: string;
  selectedEndTimestamp: string;
  selectedStepValue: number;
  changeTimeQuerier: (
    selectedStartTimestamp: string,
    selectedEndTimestamp: string,
    selectedStepValue: number
  ) => void;
};

export const useTimeQuerierStore = create<TimeQuerierStore>(
  devtools(
    persist<
      TimeQuerierStore,
      SetState<TimeQuerierStore>,
      GetState<TimeQuerierStore>,
      StoreApiWithPersist<TimeQuerierStore>
    >(
      // set -> setter for the state,
      // get -> gets a value from the state
      (set) => ({
        selectedStartTimestamp: constants.defaultStartTimestamp,
        selectedEndTimestamp: constants.defaultEndTimestamp,
        selectedStepValue: constants.defaultStepValue,
        changeTimeQuerier: (
          selectedStartTimestamp: string,
          selectedEndTimestamp: string,
          selectedStepValue: number
        ) => {
          set((state) => ({
            ...state,
            selectedStartTimestamp,
            selectedEndTimestamp,
            selectedStepValue,
          }));
        },
      }),
      { name: "time-querier" }
    )
  )
);
