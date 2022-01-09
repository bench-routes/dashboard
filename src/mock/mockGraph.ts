import communityFaker from "community-faker";
import moment from "moment";

/* Custom Generator
   Generate a datapoint with the given keys
   with random values using community-faker
*/
const dataGenerator = () => ({
  timestamp: moment(communityFaker.date.past()).unix(),
  value: communityFaker.datatype.number,
});

/* Generator Function
   Generate a array of data with a userdefined length
*/
const createData = (numData = 5) => {
  return Array.from({ length: numData }, dataGenerator);
};

// Mock response for graph data
export const mockGraphData = (num: number) => {
  return { unit: communityFaker.datatype.string, data: createData(num) };
};

// Mock selected route name
export const mockSelectedRouteName = communityFaker.unique(
  communityFaker.internet.url
);

// Mock selected rute chain name
export const mockSelectedRoutePath = communityFaker.unique(
  communityFaker.system.filePath
);
