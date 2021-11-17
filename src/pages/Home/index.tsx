import React from "react";
import { Grid, Flex, GridItem, useColorModeValue } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import RouteVisualiser from "../../components/RouteVisualiser";

const Home: React.FC = () => {
  const value = useColorModeValue("lightSecondary", "darkSecondary");

  return (
    <Flex
      h="100vh"
      flexWrap="wrap"
      justifyContent={{ lg: "flex-start", base: "center" }}
      alignItems="center"
    >
      <GridItem bg={value} colSpan={5}>
        <Sidebar />
      </GridItem>
      <GridItem colSpan={19} flex="1">
        <RouteVisualiser />
      </GridItem>
    </Flex>
  );
};

export default Home;
