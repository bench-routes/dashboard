import communityFaker from "community-faker";

//Generator Function
const createMachines = (numUsers = 5) => {
  return Array.from({ length: numUsers }, communityFaker.internet.domainName);
};

// Mock data
export const mockMachines = {
  machines: [...createMachines(4)],
};
