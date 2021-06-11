import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { SelectedMachine } from "../store/machineContainer";
import theme from "../theme";

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ChakraProvider theme={theme}>
    {" "}
    <SelectedMachine.Provider>{children}</SelectedMachine.Provider>
  </ChakraProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
