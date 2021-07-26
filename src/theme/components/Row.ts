import { Dict } from "@chakra-ui/utils";
import { mode, darken, whiten } from "@chakra-ui/theme-tools";
import { SystemStyleObject } from "@chakra-ui/react";

export const Row = {
  baseStyle: (props: Dict): SystemStyleObject => ({
    px: "4",
    py: "2",
    alignItems: "center",
    borderBottom: "1px solid",
    borderBottomColor: mode("gray.200", "gray.700")(props),
    boxShadow: "sm",
    cursor: "pointer",
    ":hover": {
      bg: mode(
        darken("lightSecondary", 10),
        whiten("darkSecondary", 15)
      )(props),
    },
  }),
  variants: {
    active: (props: Dict): SystemStyleObject => ({
      bgColor: mode("#CAC7C7", "#454040")(props),
      ":hover": {
        bg: mode("#CAC7C7", "#454040")(props),
      },
    }),
  },
};
