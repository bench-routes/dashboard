import React from "react";
import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import RouteVisualiser from "../../components/RouteVisualiser";

const Home: React.FC = () => {
  const value = useColorModeValue("lightSecondary", "darkSecondary");

  return (
    <Grid
      h="100vh"
      flexWrap="wrap"
      justifyContent={{ lg: "flex-start", base: "center" }}
      alignItems="center"
    >
      <GridItem bg={value} colSpan={5} height="100%">
        <Sidebar />
      </GridItem>
      <GridItem colSpan={19}>
        <RouteVisualiser />
      </GridItem>
    </Grid>
  );
};

export default Home;
