import { extendTheme } from "@chakra-ui/react";
import { Accordion } from "./components/accordion";

export const theme = extendTheme({
  components: {
    Accordion,
  },
  colors: {
    brand: {
      primary: "#1a508b",
      secondary: "#FBBE1F",
      active: "#fad586",
    },
  },
});
