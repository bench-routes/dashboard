import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import BasicLayout from "./layouts/BasicLayout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";

export const App: React.FC = () => (
  <ChakraProvider>
    <Router>
      <BasicLayout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BasicLayout>
    </Router>
  </ChakraProvider>
);
