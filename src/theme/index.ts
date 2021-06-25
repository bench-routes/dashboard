import { ReactWindow } from "./components/ReactWindow";
import { NumberInput } from "./components/NumberInput";
import { Button } from "./components/Button";
import { DateTime } from "./components/DateTime";
import { Input } from "./components/Input";
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
    Input,
    ReactWindow,
  },
};
export default extendTheme(overrides);
