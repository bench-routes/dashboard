import { Dict } from "@chakra-ui/utils";
import { mode } from "@chakra-ui/theme-tools";
import { SystemStyleObject } from "@chakra-ui/react";

export const NumberInput = {
  variants: {
    outline: (props: Dict): SystemStyleObject => ({
      field: {
        borderColor: mode("#C4C4C4C4", "whiteAlpha.400")(props),
        fontFamily: "Monaco",
        _focus: {
          boxShadow: "none",
          borderColor: mode("#C4C4C4C4", "whiteAlpha.400")(props),
        },
      },
    }),
  },
};
