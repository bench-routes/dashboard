import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { queryResponse } from "../GraphWrapper";

interface reusableGraphProps {
  graphData: queryResponse;
}

const ReusableGraph: React.FC<reusableGraphProps> = ({
  graphData,
}: reusableGraphProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={graphData.data}
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
