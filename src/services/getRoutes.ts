import constants from "../utils/constants";

export function getRoutes(host: string): string {
  return `${constants.backendBaseUrl}/get-domain-entities?domain_or_ip=${host}`;
}
