/* eslint-disable */
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      fontFamily: "body",
      color: mode("lightText", "white")(props),
      bg: mode("white", "darkPrimary")(props),
      lineHeight: "base",
    },
  }),
};

export default styles;
