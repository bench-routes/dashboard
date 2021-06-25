import React from "react";
import { FixedSizeList as List } from "react-window";
import { useStyleConfig, Box } from "@chakra-ui/react";
import AutoSizer from "react-virtualized-auto-sizer";

import { service_states } from "./index";

interface routeListProps {
  routes: service_states[];
}

interface rowParameters {
  index: number;
  style: React.CSSProperties | undefined;
}

const RouteList: React.FC<routeListProps> = ({ routes }: routeListProps) => {
  const styles = useStyleConfig("ReactWindow", {});
  const Row = ({ index, style }: rowParameters) => {
    const {
      name,
      path: { matrixName },
    } = routes[index];
    return (
      <div
        className="custom-routes"
        onClick={() => console.log(matrixName)}
        style={style}
      >
        {name}
      </div>
    );
  };

  return (
    <Box sx={styles}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="custom-window"
            height={height}
            itemCount={routes.length}
            itemSize={42}
            width={width}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </Box>
  );
};

export default RouteList;
