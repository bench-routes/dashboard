import { Dict } from "@chakra-ui/utils";
import { mode } from "@chakra-ui/theme-tools";
import { SystemStyleObject } from "@chakra-ui/react";

export const ReactWindow = {
  baseStyle: (props: Dict): SystemStyleObject => ({
    w: "100%",
    paddingTop: "4",
    paddingBottom: "2",
    flexGrow: "1",
    ".custom-window": {
      w: "100%",
      p: "1",
      bg: mode("lightPrimary", "darkPrimary")(props),
      border: mode(
        "0.05px solid #C4C4C4C4",
        "0.05px solid var(--chakra-colors-whiteAlpha-400)"
      )(props),
      borderRadius: "3px",
    },
  }),
};
