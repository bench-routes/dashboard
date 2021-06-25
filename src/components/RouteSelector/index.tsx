import React, { useState, useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import { GlobalStore } from "../../store/global";
import useFetch from "../../utils/useFetch";
import { getRoutes } from "../../services/getRoutes";
import Search from "./search";
import RouteList from "./routeList";

export interface service_states {
  name: string;
  path: {
    fping: string;
    jitter: string;
    monitor: string;
    ping: string;
    matrixName: string;
  };
  status?: string;
}

const RouteSelector: React.SFC = () => {
  const { globalState } = GlobalStore.useContainer();
  const { data, error, status } = useFetch<service_states[]>(
    getRoutes(globalState.selectedMachine)
  );

  const routes = data ? data : [];
  const [filteredRoutes, changeFilteredRoutes] = useState<service_states[]>([]);

  useEffect(() => {
    handleFilteredRoutesChange(routes);
  }, [data]);
  const handleFilteredRoutesChange = (routes: service_states[]) => {
    changeFilteredRoutes([...routes]);
  };

  return (
    <VStack mt={4} w="100%" h="100%">
      <Search
        routes={routes}
        changeFilteredRoutes={handleFilteredRoutesChange}
      />
      <RouteList routes={filteredRoutes} />
    </VStack>
  );
};

export default RouteSelector;
