import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import BasicLayout from "./layouts/BasicLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Config from "./pages/Config";

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <BasicLayout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/config">
            <Config />
          </Route>
        </Switch>
      </BasicLayout>
    </Router>
  </ChakraProvider>
);
