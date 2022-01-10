import { Dict } from "@chakra-ui/utils";
import { mode } from "@chakra-ui/theme-tools";
import { SystemStyleObject } from "@chakra-ui/react";

export const DateTime = {
  baseStyle: (props: Dict): SystemStyleObject => ({
    w: "60%",
    ".custom-datepicker": {
      fontFamily: "Monaco",
      w: "100%",
      p: "1",
      bg: mode("lightSecondary", "darkSecondary")(props),
      border: mode(
        "0.05px solid #C4C4C4C4",
        "0.05px solid var(--chakra-colors-whiteAlpha-400)"
      )(props),
      borderRadius: "3px",
    },
    ".rdtPicker": {
      fontFamily: "Monaco",
      bg: mode("#ffffff", "darkSecondary")(props),
      border: mode(
        "0.05px solid #ffffff",
        "0.05px solid var(--chakra-colors-whiteAlpha-400)"
      )(props),
    },
    ".rdtPicker td.rdtDay:hover,.rdtPicker thead tr:first-of-type th:hover\
    ,.rdtPicker .rdtTimeToggle:hover,.rdtCounter .rdtBtn:hover\
    ,td.rdtMonth:hover, td.rdtYear:hover,.rdtSwitch:hover":
      {
        bg: mode("#eee", "darkPrimary")(props),
      },
    ".rdtPicker td.rdtDisabled:hover": {
      bg: "none",
    },
    ".rdtPicker td.rdtActive:hover": {
      bg: "#428bca",
    },
    ".rdtPicker td.rdtOld": {
      color: mode("lightText", "#fff")(props),
    },
    ".rdtSwitch": {
      cursor: "pointer",
    },
  }),
};
