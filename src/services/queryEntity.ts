import constants from "../utils/constants";

export function queryEntities(
  name: string,
  start: string,
  end: string,
  step: number
): string {
  return `${constants.backendBaseUrl}/query-entity?name=${name}&start=${start}&end=${end}&step=${step}`;
}
