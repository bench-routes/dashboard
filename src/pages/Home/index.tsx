import React from "react";
import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import RouteVisualiser from "../../components/RouteVisualiser";

const Home: React.FC = () => {
  const value = useColorModeValue("lightSecondary", "darkSecondary");

  return (
    <Grid h="100vh" templateColumns="repeat(24, 1fr)">
      <GridItem bg={value} colSpan={5}>
        <Sidebar />
      </GridItem>
      <GridItem colSpan={19}>
        <RouteVisualiser />
      </GridItem>
    </Grid>
  );
};

export default Home;
