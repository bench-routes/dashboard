import faker from "faker";

/* Custom Generator
   Generate a route with the given keys
   with random values using faker
*/
const routeGenerator = () => ({
  name: faker.unique(faker.internet.url),
  route: faker.unique(faker.system.filePath),
  status: faker.datatype.boolean(),
});

/* Generator Function
   Generate a array of routes with a userdefined length
*/
const createRoutes = (numRoutes = 5) => {
  return Array.from({ length: numRoutes }, routeGenerator);
};

// Mock routes
export const mockRoutes = (num: number) => {
  return createRoutes(num);
};

// Mock search input
export const mockSearch = faker.datatype.string();
