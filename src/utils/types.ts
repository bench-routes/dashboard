export interface apiResponse<T> {
  status: string;
  data: T;
}

export interface queryResponse {
  unit: string;
  data: {
    timestamp: number;
    value: number;
  }[];
}

export interface machineResponse {
  machines: string[];
}

export interface reusableGraphProps {
  graphData: queryResponse;
}

export interface routeResponse {
  chain_name: string;
  entity_name: string;
  status: string;
}

export interface routeListProps {
  routes: routeResponse[];
  error: string | undefined;
}

export interface searchProps {
  routes: routeResponse[];
  isDisabled: boolean;
  changeFilteredRoutes: (routes: routeResponse[]) => void;
}
