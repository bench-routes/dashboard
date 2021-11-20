import create, { SetState, GetState } from "zustand";
import { persist, devtools, StoreApiWithPersist } from "zustand/middleware";

type GlobalStore = {
  selectedRouteName: string | null;
  selectedMachine: string | null;
  selectedRoutePath: string | null;
  changeRoute: (selectedRouteName: string, selectedRoutePath: string) => void;
  changeSelectedMachine: (machine: string | null) => void;
};

export const useGlobalStore = create<GlobalStore>(
  devtools(
    persist<
      GlobalStore,
      SetState<GlobalStore>,
      GetState<GlobalStore>,
      StoreApiWithPersist<GlobalStore>
    >(
      // set -> setter for the state,
      // get -> gets a value from the state
      (set) => ({
        selectedRouteName: null,
        selectedMachine: null,
        selectedRoutePath: null,
        changeRoute: (selectedRouteName: string, selectedRoutePath: string) => {
          set((state) => ({
            ...state,
            selectedRouteName,
            selectedRoutePath,
          }));
        },
        changeSelectedMachine: (selectedMachine: string | null) => {
          set((state) => ({
            ...state,
            selectedMachine,
            selectedRouteName: "",
            selectedRoutePath: "",
          }));
        },
      }),
      { name: "global" }
    )
  )
);
