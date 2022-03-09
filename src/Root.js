/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { GlobalStyle } from "./assets/styles/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";
import "assets/styles/scrollbar.css";
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
import Footer from "components/Footer/Footer.js";
//component imports

import NavAndAppButton from "components/NavAndAppButton/NavAndAppButton.js";
import StartView from "./views/StartView";
import AppView from "./views/AppView";

// eslint-disable-next-line

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavAndAppButton />
        <Switch>
          <Route path="/start">
            <StartView />
          </Route>
          <Redirect to="/start" />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default Root;
