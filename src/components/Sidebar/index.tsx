import React from "react";

import logo from "../../assets/logo.png";
import { VStack, Image, HStack, Heading, StackDivider } from "@chakra-ui/react";
import MachineSelector from "../MachineSelector";

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
      <HStack w="100%" mb={1}>
        <MachineSelector />
      </HStack>
    </VStack>
  );
};

export default Sidebar;
