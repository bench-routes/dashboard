import React, { useState, useEffect } from "react";
import { Alert, AlertIcon, CircularProgress, VStack } from "@chakra-ui/react";
import { useGlobalStore } from "../../store/global";
import useFetch from "../../utils/useFetch";
import { getRoutes } from "../../services/getRoutes";
import Search from "../Search";
import RouteList from "../RouteList";
import { apiResponse, routeResponse } from "../../utils/types";

const RouteSelector: React.FC = () => {
  const { selectedMachine } = useGlobalStore();
  const { data, error, status } = useFetch<apiResponse<routeResponse[]>>(
    getRoutes(selectedMachine ? selectedMachine : "")
  );
  const routes = data ? data.data : [];
  const [filteredRoutes, changeFilteredRoutes] = useState<routeResponse[]>([]);

  useEffect(() => {
    handleFilteredRoutesChange(routes);
  }, [data]);
  const handleFilteredRoutesChange = (routes: routeResponse[]) => {
    changeFilteredRoutes([...routes]);
  };
  if (error) {
    return (
      <VStack data-testid="route-selector" mt={4} w="100%" h="100%">
        <Search
          routes={routes}
          isDisabled={error !== undefined || status != "fetched"}
          changeFilteredRoutes={handleFilteredRoutesChange}
        />
        <Alert data-testid="error-message" fontSize="xs" status="error">
          <AlertIcon />
          {error}
        </Alert>
      </VStack>
    );
  }

  if (status === "fetching" || status === "init")
    return (
      <VStack w="95%" h="100%" margin="auto" justifyContent="center">
        <CircularProgress size="5vh" isIndeterminate />
      </VStack>
    );

  return (
    <VStack data-testid="route-selector" mt={4} w="100%" h="100%">
      <Search
        routes={routes}
        changeFilteredRoutes={handleFilteredRoutesChange}
        isDisabled={false}
      />
      <RouteList routes={filteredRoutes} />
    </VStack>
  );
};

export default RouteSelector;
