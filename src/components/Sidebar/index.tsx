import React from "react";

import logo from "../../assets/logo.png";
import {
  VStack,
  Image,
  HStack,
  Heading,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import MachineSelector from "../MachineSelector";
// export interface SidebarProps {}

const Sidebar: React.FC = () => {
  const headingColor = useColorModeValue("#333333", "#ffffff");
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      py={4}
      px={5}
      w="100%"
    >
      <HStack w="100%" mb={1}>
        <Image boxSize="42px" src={logo} alt="Logo" />
        <Heading fontWeight="semibold" color={headingColor} size="md">
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
