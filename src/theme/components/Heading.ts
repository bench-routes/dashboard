import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";
import { SystemStyleObject } from "@chakra-ui/react";

export const Heading = {
  baseStyle: (props: Dict): SystemStyleObject => ({
    color: mode("#333333", "#ffffff")(props),
  }),
};
