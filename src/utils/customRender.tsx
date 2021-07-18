import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStore } from "../store/global";
import theme from "../theme";
import { TimeQuerierStore } from "../store/timeQuerier";

/*  Function used to render the component that we need to test
    after wrapping it around all the providers like ChakraProvider,
    Container Provider etc
    input : component that is tested
    output : component after being wrapped by all the providers
*/
const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ChakraProvider theme={theme}>
    <GlobalStore.Provider>
      <TimeQuerierStore.Provider>{children}</TimeQuerierStore.Provider>
    </GlobalStore.Provider>
  </ChakraProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
