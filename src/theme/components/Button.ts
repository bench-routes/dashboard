import { Dict } from "@chakra-ui/utils";
import { mode, darken, whiten } from "@chakra-ui/theme-tools";
import { SystemStyleObject } from "@chakra-ui/react";
export const Button = {
  variants: {
    fetch: (props: Dict): SystemStyleObject => ({
      color: "#ffffff",
      bg: "blue.400",
      fontWeight: "400",
      fontSize: "16px",
      _hover: {
        bg: mode(darken("blue.400", 10), whiten("blue.400", 10))(props),
      },
    }),
  },
};
