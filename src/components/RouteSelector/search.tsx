import React from "react";
import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { service_states } from "./index";

interface searchProps {
  routes: service_states[];
  isDisabled: boolean;
  changeFilteredRoutes: (routes: service_states[]) => void;
}

const Search: React.FC<searchProps> = ({
  routes,
  isDisabled,
  changeFilteredRoutes,
}: searchProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const filtered_routes = routes.filter((route) =>
      route.name.toLowerCase().includes(input.toLowerCase())
    );
    changeFilteredRoutes(filtered_routes);
  };
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input
        onChange={handleSearchChange}
        isDisabled={isDisabled}
        placeholder="Enter Route Name Here"
      />
    </InputGroup>
  );
};

export default Search;
