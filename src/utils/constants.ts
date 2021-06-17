<<<<<<< HEAD
export default {
  defaultSelectedMachine: "localhost",
  backendBaseUrl: "http://localhost:3002",
};
=======
import moment from "moment";

export const defaultSelectedMachine = "localhost";
export const defaultStepValue = 15;
export const minStepValue = 1;
export const defaultStartTimestamp = moment().subtract(1, "h").toISOString();
export const defaultEndTimestamp = moment().toISOString();
>>>>>>> Make TimeQuerier functional
