import moment from "moment";

export default {
  defaultSelectedMachine: null,
  backendBaseUrl: "http://localhost:9990/api/v1",
  defaultStepValue: 15,
  minStepValue: 1,
  defaultStartTimestamp: moment().subtract(1, "h").toISOString(),
  defaultEndTimestamp: moment().toISOString(),
  dateFormat: "DD/MM/yyyy",
  timeFormat: "h:mm A",
};
