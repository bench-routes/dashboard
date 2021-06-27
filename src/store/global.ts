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
<<<<<<< HEAD
};
=======
  selectedRouteName: "",
  selectedRoutePath: "",
});
>>>>>>> Make RouteSelector functional

const useGlobalStore = (
  initialState = initGlobalStore
): GlobalHookInterface => {
  const [globalState, setGlobalState] = useState<GlobalStateInterface>(
    initialState
  );

  const changeSelectedMachine = (selectedMachine: string) =>
    setGlobalState({
      ...globalState,
      selectedMachine,
      selectedRouteName: "",
      selectedRoutePath: "",
    });
  const changeRoute = (selectedRouteName: string, selectedRoutePath: string) =>
    setGlobalState({
      ...globalState,
      selectedRouteName,
      selectedRoutePath,
    });

  return {
    globalState,
    changeSelectedMachine,
    changeRoute,
  };
};

export const GlobalStore = createContainer(useGlobalStore);
