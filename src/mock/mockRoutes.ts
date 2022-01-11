import faker from "@faker-js/faker";

/* Custom Generator
   Generate a route with the given keys
   with random values using community-faker
*/
const routeGenerator = () => ({
  chain_name: faker.unique(faker.system.filePath),
  entity_name: faker.unique(faker.internet.url),
  status: faker.random.arrayElement(["true", "false", "none"]),
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
