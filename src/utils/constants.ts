import dayjs from "dayjs";

export default {
  defaultSelectedMachine: null,
  backendBaseUrl: "http://localhost:9990/api/v1",
  defaultStepValue: 15,
  minStepValue: 1,
  defaultStartTimestamp: dayjs().subtract(1, "h").toISOString(),
  defaultEndTimestamp: dayjs().toISOString(),
  dateFormat: "DD/MM/yyyy",
  timeFormat: "h:mm A",
  graphDataLimit: 6000,
};
