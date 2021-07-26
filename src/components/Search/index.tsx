import React, { useEffect, useState } from "react";
import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { GlobalStore } from "../../store/global";
import { routeResponse } from "../RouteSelector";

interface searchProps {
  routes: routeResponse[];
  isDisabled: boolean;
  changeFilteredRoutes: (routes: routeResponse[]) => void;
}

const Search: React.FC<searchProps> = ({
  routes,
  isDisabled,
  changeFilteredRoutes,
}: searchProps) => {
  const [value, setValue] = useState("");
  const { globalState } = GlobalStore.useContainer();

  useEffect(() => {
    setValue("");
  }, [globalState.selectedMachine]);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const filtered_routes = routes.filter((route) =>
      route.name.toLowerCase().includes(input.toLowerCase())
    );
    setValue(input);
    changeFilteredRoutes(filtered_routes);
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input
        onChange={handleSearchChange}
        value={value}
        isDisabled={isDisabled}
        placeholder="Enter Route Name Here"
        data-testid="route-search"
      />
    </InputGroup>
  );
};

export default Search;
