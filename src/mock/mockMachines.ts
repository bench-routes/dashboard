import faker from "faker";

//Generator Function
const createMachines = (numUsers = 5) => {
  return Array.from({ length: numUsers }, faker.internet.domainName);
};

// Mock data
export const mockMachines = {
  machines: [...createMachines(4)],
};
