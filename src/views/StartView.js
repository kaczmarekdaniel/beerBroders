/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../assets/styles/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//component imports
import AboutPage from "../pages/AboutPage/AboutPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import BlogPage from "pages/blogPage/BlogPage.js";
import MainPage from "pages/rateBeerPage/MainPage/MainPage";
import LoginPage from "pages/LoginPage/LoginPage.js";
import Footer from "components/Footer/Footer.js";
// eslint-disable-next-line

const AppButton = styled(Link)`
  background-color: #986abf;
`;

const StartView = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route path="/start/articles">
          <BlogPage />
        </Route>
        <Route path="/start/about">
          <AboutPage />
        </Route>
        <Route path="/start/app">
          <MainPage />
        </Route>
        <Route path="/start/login">
          <LoginPage />
        </Route>
        <Route exact path="/start">
          <LandingPage />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default StartView;
