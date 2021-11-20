import React, { useState, useEffect } from "react";
import { VStack } from "@chakra-ui/react";
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

  return (
    <VStack data-testid="route-selector" mt={4} w="100%" h="100%">
      <Search
        routes={routes}
        isDisabled={error !== undefined || status != "fetched"}
        changeFilteredRoutes={handleFilteredRoutesChange}
      />
      <RouteList error={error} routes={filteredRoutes} />
    </VStack>
  );
};

export default RouteSelector;
