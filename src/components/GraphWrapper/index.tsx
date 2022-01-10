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
import { useTimeQuerierStore } from "../../store/timeQuerier";
import { queryEntities } from "../../services/queryEntity";
import useFetch from "../../utils/useFetch";
import ReusableGraph from "../ReusableGraph";
import { apiResponse, queryResponse } from "../../utils/types";

interface PageProps {
  selectedRoutePath: string;
}

const GraphWrapper: React.FC<PageProps> = (props: PageProps) => {
  const { selectedRoutePath } = props;
  const { selectedStartTimestamp, selectedEndTimestamp, selectedStepValue } =
    useTimeQuerierStore();

  const { data, error, status } = useFetch<apiResponse<queryResponse>>(
    queryEntities(
      selectedRoutePath,
      selectedStartTimestamp,
      selectedEndTimestamp,
      selectedStepValue
    )
  );

  if (error) {
    return (
      <VStack w="95%" h="100%" margin="auto" justifyContent="center">
        <Alert
          status="error"
          data-testid="graph-error"
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
            An unexpected error occurred while processing the graph.
          </AlertDescription>
        </Alert>
      </VStack>
    );
  }

  if (status === "fetching" || status === "init")
    return (
      <VStack w="95%" h="100%" margin="auto" justifyContent="center">
        <CircularProgress size="10vh" isIndeterminate />
      </VStack>
    );

  if (!data) {
    return (
      <Alert
        status="warning"
        data-testid="graph-warn"
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
    );
  }

  return (
    <VStack w="95%" h="100%" margin="auto" justifyContent="center">
      <Box data-testid="graph" width="100%" height="90vh">
        <ReusableGraph graphData={data.data} />
      </Box>
    </VStack>
  );
};

export default GraphWrapper;
