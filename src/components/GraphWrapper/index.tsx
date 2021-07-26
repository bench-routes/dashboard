import React from "react";
import { Text } from "@chakra-ui/react";
import { GlobalStore } from "../../store/global";

const GraphWrapper: React.FC = () => {
  const {
    globalState: { selectedRouteName },
  } = GlobalStore.useContainer();
  return <Text>{selectedRouteName}</Text>;
};

export default GraphWrapper;
