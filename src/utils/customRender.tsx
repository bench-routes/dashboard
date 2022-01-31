import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

import theme from "../theme";

/*  Function used to render the component that we need to test
    after wrapping it around all the providers like ChakraProvider,
    Container Provider etc
    input : component that is tested
    output : component after being wrapped by all the providers
*/

const queryClient = new QueryClient();

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </QueryClientProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
