import constants from "../utils/constants";

export function getActiveMachines(): string {
  return `${constants.backendBaseUrl}/active-machines`;
}
