import { Select } from "./components/Select";
import { Heading } from "./components/Heading";
import { extendTheme } from "@chakra-ui/react";
// Global style overrides
import styles from "./global";
//Branding style ovverides
import branding from "./branding";

const overrides = {
  ...branding,
  styles,
  components: {
    Heading,
    Select,
  },
};
export default extendTheme(overrides);
