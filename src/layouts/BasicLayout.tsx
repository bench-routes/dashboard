// default imports.
import React, { Fragment, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

// component imports.
import SiderMenu from "../components/SiderMenu";
import PageHeader from "../components/PageHeader";

interface PageProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<PageProps> = (props: PageProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Fragment>
      <Grid
        h="100vh"
        templateRows="repeat(24, 1fr)"
        templateColumns="repeat(24, 1fr)"
      >
        {sidebarOpen && (
          <GridItem rowSpan={24} colSpan={1} borderRight="1px solid #d1d1d1">
            <SiderMenu />
          </GridItem>
        )}
        <GridItem rowSpan={2} colSpan={sidebarOpen ? 23 : 24}>
          <PageHeader toggleSidebar={toggleSidebarOpen} />
        </GridItem>
        <GridItem
          rowSpan={22}
          colSpan={sidebarOpen ? 23 : 24}
          borderTop="1px solid #d1d1d1"
        >
          {props.children}
        </GridItem>
      </Grid>
    </Fragment>
  );
};

export default BasicLayout;
