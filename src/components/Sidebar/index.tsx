import React from "react";

import logo from "../../assets/logo.png";
import {
  VStack,
  Image,
  HStack,
  Box,
  Heading,
  StackDivider,
} from "@chakra-ui/react";
import MachineSelector from "../MachineSelector";
import TimeQuerier from "../TimeQuerier";

const Sidebar: React.FC = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      py={4}
      px={5}
      w="100%"
    >
      <HStack w="100%" mb={1}>
        <Image boxSize="42px" src={logo} alt="Logo" />
        <Heading fontWeight="semibold" size="md">
          Bench Routes
        </Heading>
      </HStack>
      <Box d="flex" w="100%" mb={1}>
        <MachineSelector />
      </Box>
      <Box d="flex" w="100%" mb={1}>
        <TimeQuerier />
      </Box>
    </VStack>
  );
};

export default Sidebar;
