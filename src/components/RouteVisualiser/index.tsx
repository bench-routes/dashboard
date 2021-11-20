import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  VStack,
} from "@chakra-ui/react";
import { useGlobalStore } from "../../store/global";
import GraphWrapper from "../GraphWrapper";

const RouteVisualiser: React.FC = () => {
  const { selectedRoutePath } = useGlobalStore();

  // returns an alert when no route is selected
  if (!selectedRoutePath) {
    return (
      <VStack w="95%" h="100%" margin="auto" justifyContent="center">
        <Alert
          status="info"
          data-testid="graph-info"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="50%"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            No Entity Selected
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Kindly select some entity to see its graph.
          </AlertDescription>
        </Alert>
      </VStack>
    );
  }

  return (
    <div data-testid="graphwrapper">
      <GraphWrapper selectedRoutePath={selectedRoutePath} />
    </div>
  );
};

export default RouteVisualiser;
