import React, { useEffect } from "react";
import {
  Select,
  Alert,
  AlertIcon,
  VStack,
  CircularProgress,
} from "@chakra-ui/react";
import useFetch from "../../utils/useFetch";
import { getActiveMachines } from "../../services/getActiveMachines";
import { useGlobalStore } from "../../store/global";
import { apiResponse, machineResponse } from "../../utils/types";

const MachineSelector: React.FC = () => {
  const { selectedMachine, changeSelectedMachine } = useGlobalStore();
  const { data, error, isFetching, isLoading, isError, isFetched } = useFetch<
    apiResponse<machineResponse>
  >("machines", getActiveMachines());

  const machines = data ? data.data.data.machines : [];

  useEffect(() => {
    if (machines.length) changeSelectedMachine(machines[0]);
  }, [data]);

  if (isError) {
    return (
      <Alert data-testid="error-message" fontSize="xs" status="error">
        <AlertIcon />
        {error?.response?.data}
      </Alert>
    );
  }

  if (isFetching || isLoading) {
    return (
      <VStack w="95%" h="100%" margin="auto" justifyContent="center">
        <CircularProgress size="5vh" isIndeterminate />
      </VStack>
    );
  }

  return (
    <VStack w="100%">
      <Select
        mt={3}
        isDisabled={!isFetched || isError}
        value={selectedMachine ? selectedMachine : "Fetching Machines"}
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
    </VStack>
  );
};

export default MachineSelector;
