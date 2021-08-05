import React from "react";
import moment from "moment";
import {
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { reusableGraphProps } from "../../utils/types";
import constants from "../../utils/constants";

const ReusableGraph: React.FC<reusableGraphProps> = ({
  graphData,
}: reusableGraphProps) => {
  if (graphData.data.length > constants.graphDataLimit) {
    return (
      <VStack w="95%" h="100%" margin="auto" justifyContent="center">
        <Alert
          status="error"
          data-testid="step-alert"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="50%"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Small Step Value
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Please select larger step value to avoid performance issues.
          </AlertDescription>
        </Alert>
      </VStack>
    );
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={graphData.data}
        data-testid="graph-plot"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="timestamp"
          domain={["dataMin", "dataMax"]}
          tickMargin={10}
          tickFormatter={(unixTime) =>
            moment(unixTime).format("D MMM HH:mm:ss")
          }
          interval={0}
          type="number"
        />
        <YAxis tickMargin={10} unit={graphData.unit} />
        <Tooltip />
        <Line type="monotone" dataKey="value" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ReusableGraph;
