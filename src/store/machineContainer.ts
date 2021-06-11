import { useState } from "react";
import { createContainer } from "unstated-next";

function useMachine() {
  const [selectedMachine, setSelectedMachine] = useState("localhost");
  const changeSelectedMachine = (machine: string) =>
    setSelectedMachine(machine);
  return { selectedMachine, changeSelectedMachine };
}

export const SelectedMachine = createContainer(useMachine);
