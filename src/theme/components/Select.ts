import { Dict } from "@chakra-ui/utils";
import { mode } from "@chakra-ui/theme-tools";
import { SystemStyleObject } from "@chakra-ui/react";

export const Select = {
  variants: {
    outline: (props: Dict): SystemStyleObject => ({
      field: {
        background: mode("lightPrimary", "darkPrimary")(props),
        color: mode("#000000 ", "#ffffff")(props),
        _focus: {
          border: "none",
          boxShadow: "none",
        },
        ">option": {
          background: mode("lightPrimary", "darkPrimary")(props),
          color: mode("#000000 ", "#ffffff")(props),
        },
      },
    }),
  },
};
