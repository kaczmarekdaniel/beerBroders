/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { GlobalStyle } from "./assets/styles/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";
import "./scrollbar.css";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import AppProvider from "providers/AppProvider.js";

//component imports

import NavAndAppButton from "components/organisms/NavAndAppButton/NavAndAppButton.js";
import StartView from "./components/views/StartView";
import AppView from "./components/views/AppView";

// eslint-disable-next-line

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppProvider>
          <Switch>
            <Route path="/app" component={AppView} />
            <Route path="/start">
              <NavAndAppButton />

              <StartView />
            </Route>
            <Redirect to="/start" />
          </Switch>
        </AppProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
