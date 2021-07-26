import React from "react";
import { FixedSizeList as List } from "react-window";
import {
  useStyleConfig,
  Box,
  Flex,
  Text,
  Tooltip,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import AutoSizer from "react-virtualized-auto-sizer";

import { routeResponse } from "../RouteSelector/index";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { GlobalStore } from "../../store/global";
import { truncate } from "../../utils/stringManipulation";

interface routeListProps {
  routes: routeResponse[];
  error: string | undefined;
}

interface rowParameters {
  index: number;
  style: React.CSSProperties | undefined;
}

const RouteList: React.FC<routeListProps> = ({
  routes,
  error,
}: routeListProps) => {
  const styles = useStyleConfig("ReactWindow", {});
  const {
    globalState: { selectedRoutePath },
    changeRoute,
  } = GlobalStore.useContainer();
  const Row = ({ index, style }: rowParameters) => {
    const { name, route, status } = routes[index];
    const rowStyles = useStyleConfig("Row", {
      variant: selectedRoutePath == route ? "active" : "",
    });

    return (
      <Flex
        sx={rowStyles}
        onClick={() => changeRoute(name, route)}
        style={style}
      >
        <Tooltip label={name} placement="bottom-start" openDelay={10}>
          <Text flex="1"> {truncate(name, 30)}</Text>
        </Tooltip>
        {status ? <ArrowUpIcon boxSize={5} /> : <ArrowDownIcon boxSize={5} />}
      </Flex>
    );
  };

  if (error)
    return (
      <Alert data-testid="error-message" fontSize="xs" status="error">
        <AlertIcon />
        {error}
      </Alert>
    );
  return (
    <Box sx={styles} data-testid="route-list">
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="custom-window"
            height={height}
            itemCount={routes.length}
            itemSize={42}
            width={width}
            data-testid="scroll-list"
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </Box>
  );
};

export default RouteList;
