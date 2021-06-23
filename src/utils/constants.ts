import moment from "moment";

export default {
  defaultSelectedMachine: "localhost",
  backendBaseUrl: "http://localhost:3002",
  defaultStepValue: 15,
  minStepValue: 1,
  defaultStartTimestamp: moment().subtract(1, "h").toISOString(),
  defaultEndTimestamp: moment().toISOString(),
  dateFormat: "DD/MM/yyyy",
  timeFormat: "h:mm A",
};
