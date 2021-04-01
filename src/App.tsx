import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import BasicLayout from "./layouts/BasicLayout";

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <BasicLayout>Hello</BasicLayout>
  </ChakraProvider>
);
