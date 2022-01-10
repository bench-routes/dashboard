import PropTypes from "prop-types";
import React from "react";
import { FixedSizeList as List } from "react-window";
import { useStyleConfig, Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import AutoSizer from "react-virtualized-auto-sizer";
import { routeListProps } from "../../utils/types";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { useGlobalStore } from "../../store/global";
import { truncate } from "../../utils/stringManipulation";

interface rowParameters {
  index: number;
  style: React.CSSProperties | undefined;
}

const RouteList: React.FC<routeListProps> = ({ routes }: routeListProps) => {
  const styles = useStyleConfig("ReactWindow", {});
  const { selectedRoutePath, changeRoute } = useGlobalStore();
  const Row = ({ index, style }: rowParameters) => {
    if (routes.length == 0) return null;
    const { entity_name, chain_name, status } = routes[index];
    const rowStyles = useStyleConfig("Row", {
      variant: selectedRoutePath == chain_name ? "active" : "",
    });

    return (
      <Flex
        sx={rowStyles}
        data-testid="entity"
        onClick={() => changeRoute(entity_name, chain_name)}
        style={style}
      >
        <Tooltip label={entity_name} placement="bottom-start" openDelay={10}>
          <Text flex="1"> {truncate(entity_name, 30)}</Text>
        </Tooltip>
        {status == "true" && <ArrowUpIcon boxSize={5} />}
        {status == "false" && <ArrowDownIcon boxSize={5} />}
      </Flex>
    );
  };

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

// For some reason prop-types was throwing error without this
RouteList.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default RouteList;
