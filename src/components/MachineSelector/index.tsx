import React from "react";
import { Select, Alert, AlertIcon, VStack } from "@chakra-ui/react";
import useFetch from "../../utils/useFetch";
import { getActiveMachines } from "../../services/getActiveMachines";
import { GlobalStore } from "../../store/global";

interface service_states {
  machines: string[];
}

const MachineSelector: React.SFC = () => {
  const { globalState, changeSelectedMachine } = GlobalStore.useContainer();
  const { data, error, status } = useFetch<service_states>(getActiveMachines());
  const machines = data ? data.machines : [];

  return (
    <VStack w="100%">
      <Select
        mt={3}
        isDisabled={status != "fetched" || error !== undefined}
        value={globalState.selectedMachine}
        data-testid="machine-selector"
        onChange={(e) => {
          changeSelectedMachine(e.target.value);
        }}
      >
        {machines.map((machine) => {
          return (
            <option value={machine} key={machine}>
              {machine}
            </option>
          );
        })}
      </Select>
      {error && (
        <Alert data-testid="error-message" fontSize="xs" status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
    </VStack>
  );
};

export default MachineSelector;
