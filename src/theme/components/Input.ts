import { Dict } from "@chakra-ui/utils";
import { mode } from "@chakra-ui/theme-tools";
import { SystemStyleObject } from "@chakra-ui/react";

export const Input = {
  variants: {
    outline: (props: Dict): SystemStyleObject => ({
      field: {
        borderColor: mode("#C4C4C4C4", "whiteAlpha.400")(props),
        _focus: {
          boxShadow: "none",
          borderColor: mode("#C4C4C4C4", "whiteAlpha.400")(props),
        },
      },
    }),
  },
};
