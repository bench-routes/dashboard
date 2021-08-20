import React from "react";
import {
  VStack,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CircularProgress,
} from "@chakra-ui/react";
import { GlobalStore } from "../../store/global";
import { TimeQuerierStore } from "../../store/timeQuerier";
import { queryEntities } from "../../services/queryEntity";
import useFetch from "../../utils/useFetch";
import ReusableGraph from "../ReusableGraph";
import { ApiResponse } from "../../utils/types";

export interface queryResponse {
  unit: string;
  data: {
    timestamp: number;
    value: number;
  }[];
}

const GraphWrapper: React.FC = () => {
  const {
    globalState: { selectedRoutePath },
  } = GlobalStore.useContainer();
  const {
    timeQuerierState: {
      selectedStartTimestamp,
      selectedEndTimestamp,
      selectedStepValue,
    },
  } = TimeQuerierStore.useContainer();
  const { data, error, status } = useFetch<ApiResponse<queryResponse>>(
    queryEntities(
      selectedRoutePath,
      selectedStartTimestamp,
      selectedEndTimestamp,
      selectedStepValue
    )
  );
  const graphData = data ? data.data : null;

  if (status === "fetching" || status === "init")
    return (
      <VStack w="95%" h="100%" margin="auto" justifyContent="center">
        <CircularProgress size="10vh" isIndeterminate />
      </VStack>
    );

  if (error && selectedRoutePath === "") {
    return (
      <VStack w="95%" h="100%" margin="auto" justifyContent="center">
        <Alert
          status="info"
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

  if (error) {
    return (
      <VStack w="95%" h="100%" margin="auto" justifyContent="center">
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="50%"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            {error}
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Some unexpected error occurred while processing the graph.
          </AlertDescription>
        </Alert>
      </VStack>
    );
  }

  return (
    <VStack w="95%" h="100%" margin="auto" justifyContent="center">
      {graphData && graphData.data.length ? (
        <Box width="100%" height="90vh">
          <ReusableGraph graphData={graphData} />
        </Box>
      ) : (
        <Alert
          status="warning"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="50%"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            No data found
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            There no data for the following entity/time range.
          </AlertDescription>
        </Alert>
      )}
    </VStack>
  );
};

export default GraphWrapper;
