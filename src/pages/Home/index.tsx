import React from "react";
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import RouteVisualiser from "../../components/RouteVisualiser";

const Home: React.FC = () => {
  const value = useColorModeValue("lightSecondary", "darkSecondary");

  return (
    <Flex h="100vh" alignContent="center" alignItems="center">
      <Box bg={value} height="100%">
        <Sidebar />
      </Box>
      <Box width="80%" height="100%">
        <RouteVisualiser />
      </Box>
    </Flex>
  );
};

export default Home;
