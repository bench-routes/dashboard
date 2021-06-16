import { Dict } from "@chakra-ui/utils";
import { mode } from "@chakra-ui/theme-tools";
import { SystemStyleObject } from "@chakra-ui/react";
export const DateTime = {
  baseStyle: (props: Dict): SystemStyleObject => ({
    w: "60%",
    ".class": {
      fontFamily: "Monaco",
      w: "100%",
      p: "1",
      bg: mode("lightSecondary", "darkSecondary")(props),
      border: mode(
        "0.05px solid #C4C4C4C4",
        "0.05px solid rgba(255,255,255,0.24)"
      )(props),
      borderRadius: "3px",
    },
    ".rdtPicker": {
      fontFamily: "Monaco",
      bg: mode("#ffffff", "darkSecondary")(props),
      border: mode(
        "0.05px solid #ffffff",
        "0.05px solid rgba(255,255,255,0.24)"
      )(props),
    },
  }),
};
