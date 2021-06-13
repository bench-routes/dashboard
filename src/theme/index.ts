import { extendTheme } from "@chakra-ui/react";
// Global style overrides
import styles from "./global";
//Branding style ovverides
import branding from "./branding";

const overrides = {
  ...branding,
  styles,
  components: {},
};
export default extendTheme(overrides);
