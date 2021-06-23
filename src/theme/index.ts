import { NumberInput } from "./components/NumberInput";
import { Button } from "./components/Button";
import { DateTime } from "./components/DateTime";
import { Select } from "./components/Select";
import { Heading } from "./components/Heading";
import { extendTheme } from "@chakra-ui/react";
// Global style overrides
import styles from "./global";
import "react-datetime/css/react-datetime.css";
//Branding style ovverides
import branding from "./branding";

const overrides = {
  ...branding,
  styles,
  components: {
    Heading,
    Select,
    DateTime,
    Button,
    NumberInput,
  },
};
export default extendTheme(overrides);
