import React, { useEffect } from "react";
import {
  Select,
  Alert,
  AlertIcon,
  VStack,
  CircularProgress,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import useFetch from "../../utils/useFetch";
import { getActiveMachines } from "../../services/getActiveMachines";
import { useGlobalStore } from "../../store/global";
import { apiResponse, machineResponse } from "../../utils/types";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MachineSelector: React.FC = () => {
  const { selectedMachine, changeSelectedMachine } = useGlobalStore();
  const { data, error, status } = useFetch<apiResponse<machineResponse>>(
    getActiveMachines()
  );
  const machines = data ? data.data.machines : [];

  useEffect(() => {
    if (machines.length) changeSelectedMachine(machines[0]);
  }, [data]);

  if (error) {
    return (
      <Alert data-testid="error-message" fontSize="xs" status="error">
        <AlertIcon />
        {error}
      </Alert>
    );
  }

  if (status === "fetching" || status === "init") {
    return (
      <VStack w="95%" h="100%" margin="auto" justifyContent="center">
        <CircularProgress size="5vh" isIndeterminate />
      </VStack>
    );
  }
  return (
    <VStack w="100%">
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Machines
        </MenuButton>
        <MenuList
          mt={3}
          isDisabled={status != "fetched" || error !== undefined}
          value={selectedMachine ? selectedMachine : "Fetching Machines"}
          data-testid="machine-selector"
          onChange={(e) => {
            changeSelectedMachine((e.target as HTMLInputElement).value);
          }}
        >
          {machines.map((machine) => {
            return (
              <MenuItem value={machine} key={machine}>
                {machine}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </VStack>
  );
};

export default MachineSelector;
