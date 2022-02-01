import faker from "@faker-js/faker";
import dayjs from "dayjs";

/* Custom Generator
   Generate a datapoint with the given keys
   with random values using faker
*/
const dataGenerator = () => ({
  timestamp: dayjs(faker.date.past()).unix(),
  value: faker.datatype.number,
});

/* Generator Function
   Generate a array of data with a userdefined length
*/
const createData = (numData = 5) => {
  return Array.from({ length: numData }, dataGenerator);
};

// Mock response for graph data
export const mockGraphData = (num: number) => {
  return { unit: faker.datatype.string, data: createData(num) };
};

// Mock selected route name
export const mockSelectedRouteName = faker.unique(faker.internet.url);

// Mock selected rute chain name
export const mockSelectedRoutePath = faker.unique(faker.system.filePath);
