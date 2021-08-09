import React, { useEffect, useState } from "react";
import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { GlobalStore } from "../../store/global";
import { searchProps } from "../../utils/types";

const Search: React.FC<searchProps> = ({
  routes,
  isDisabled,
  changeFilteredRoutes,
}: searchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { globalState } = GlobalStore.useContainer();

  useEffect(() => {
    setSearchQuery("");
  }, [globalState.selectedMachine]);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const filtered_routes = routes.filter((route) =>
      route.entity_name.toLowerCase().includes(input.toLowerCase())
    );
    setSearchQuery(input);
    changeFilteredRoutes(filtered_routes);
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input
        onChange={handleSearchChange}
        value={searchQuery}
        isDisabled={isDisabled}
        placeholder="Enter Route Name Here"
        data-testid="route-search"
      />
    </InputGroup>
  );
};

export default Search;
