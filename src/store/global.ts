import { useState } from "react";
import { createContainer } from "unstated-next";
import constants from "../utils/constants";

const initGlobalStore = () => ({
  selectedMachine: constants.defaultSelectedMachine,
});

const useGlobalStore = (initialState = initGlobalStore) => {
  const [globalState, setGlobalState] = useState(initialState);

  const changeSelectedMachine = (machine: string) =>
    setGlobalState({ ...globalState, selectedMachine: machine });

  return {
    globalState,
    changeSelectedMachine,
  };
};

export const GlobalStore = createContainer(useGlobalStore);
