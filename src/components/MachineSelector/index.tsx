import React from "react";
import {
  Select,
  useColorModeValue,
  Alert,
  AlertIcon,
  VStack,
} from "@chakra-ui/react";
import { useFetch } from "../../utils/useFetch";
import { getActiveMachines } from "../../services/getActiveMachines";
import { SelectedMachine } from "../../store/machineContainer";

interface service_states {
  machines: string[];
}

const MachineSelector: React.SFC = () => {
  const bgColor = useColorModeValue("lightPrimary", "darkPrimary");
  const textColor = useColorModeValue("#000000", "#ffffff");
  const selectedMachine = SelectedMachine.useContainer();
  const { response, error, isLoaded } = useFetch<service_states>(
    getActiveMachines()
  );
  const machines = response.data ? response.data.machines : null;
  return (
    <VStack w="100%">
      <Select
        bg={bgColor}
        mt={3}
        color={textColor}
        placeholder="Select the machine"
        isDisabled={!isLoaded || error !== undefined}
        value={selectedMachine.selectedMachine}
        data-testid="machine-selector"
        onChange={(e) => {
          selectedMachine.changeSelectedMachine(e.target.value);
        }}
      >
        {machines
          ? machines.map((machine) => {
              return (
                <option value={machine} key={machine}>
                  {machine}
                </option>
              );
            })
          : null}
      </Select>
      {error !== undefined ? (
        <Alert data-testid="error-message" fontSize="xs" status="error">
          <AlertIcon />
          Error in fetching machines
        </Alert>
      ) : null}
    </VStack>
  );
};

export default MachineSelector;
