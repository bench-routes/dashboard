import { getBackendBaseUrl } from "./getBackendBaseUrl";

export function getActiveMachines(): string {
  return `${getBackendBaseUrl()}/active-machines`;
}
