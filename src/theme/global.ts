import { mode, GlobalStyleProps } from "@chakra-ui/theme-tools";
import { SystemStyleObject } from "@chakra-ui/react";

const styles = {
  global: (props: GlobalStyleProps): SystemStyleObject => {
    return {
      body: {
        fontFamily: "body",
        color: mode("lightText", "white")(props),
        bg: mode("white", "darkPrimary")(props),
        lineHeight: "base",
        fontSize: "sm",
      },
    };
  },
};

export default styles;
