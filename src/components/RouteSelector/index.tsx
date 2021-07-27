import React, { useState, useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import { GlobalStore } from "../../store/global";
import useFetch from "../../utils/useFetch";
import { getRoutes } from "../../services/getRoutes";
import Search from "../Search";
import RouteList from "../RouteList";
import { ApiResponse } from "../../utils/types";
export interface routeResponse {
  chain_name: string;
  entity_name: string;
  status: string;
}

const RouteSelector: React.FC = () => {
  const { globalState } = GlobalStore.useContainer();
  const { data, error, status } = useFetch<ApiResponse<routeResponse[]>>(
    getRoutes(globalState.selectedMachine ? globalState.selectedMachine : "")
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
