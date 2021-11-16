/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../assets/styles/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import { theme } from "../../assets/styles/theme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//component imports
import AboutPage from "../startPages/AboutPage/AboutPage";
import ContactPage from "../startPages/ContactPage/ContactPage";
import LandingPage from "../startPages/LandingPage/LandingPage";

// eslint-disable-next-line

const AppButton = styled(Link)`
  background-color: #986abf;
`;

const StartView = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path="/start/contact">
            <ContactPage />
          </Route>
          <Route path="/start/about">
            <AboutPage />
          </Route>
          <Route exact path="/start">
            <LandingPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default StartView;
