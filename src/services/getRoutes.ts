import constants from "../utils/constants";

export function getRoutes(host: string): string {
  return `${constants.backendBaseUrl}/get-route-time-series?host=${host}`;
}
