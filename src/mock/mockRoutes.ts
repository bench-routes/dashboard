import faker from "faker";

//Custom Generator
const routeGenerator = () => ({
  name: faker.unique(faker.internet.url),
  route: faker.unique(faker.system.filePath),
  status: faker.datatype.boolean(),
});

//Generator Function
const createRoutes = (numRoutes = 5) => {
  return Array.from({ length: numRoutes }, routeGenerator);
};

// Mock data
export const mockRoutes = (num: number) => {
  return createRoutes(num);
};

export const mockSearch = faker.datatype.string();
