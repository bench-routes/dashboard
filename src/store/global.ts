import { useState } from "react";
import { createContainer } from "unstated-next";
import constants from "../utils/constants";

interface GlobalStateInterface {
  selectedMachine: string;
}
interface GlobalHookInterface {
  globalState: GlobalStateInterface;
  changeSelectedMachine: (machine: string) => void;
}

const initGlobalStore: GlobalStateInterface = {
  selectedMachine: constants.defaultSelectedMachine,
};

const useGlobalStore = (
  initialState = initGlobalStore
): GlobalHookInterface => {
  const [globalState, setGlobalState] = useState<GlobalStateInterface>(
    initialState
  );

  const changeSelectedMachine = (machine: string) =>
    setGlobalState({ ...globalState, selectedMachine: machine });

  return {
    globalState,
    changeSelectedMachine,
  };
};

export const GlobalStore = createContainer(useGlobalStore);
