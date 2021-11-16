import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../assets/styles/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import { theme } from "../../assets/styles/theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import AppContext from "providers/AppProvider.js";
import AppProvider from "providers/AppProvider.js";

import "./styles.css";
import MainPage from "components/appPages/MainPage/MainPage.js";
import LoginForm from "components/appPages/LoginPage/LoginPage.js";
import LoginButton from "components/atoms/LoginButton/LoginButton";
import UserAccount from "components/appPages/UserAccount/UserAccount.js";

const Wrapper = styled.div`
  padding-top: 10%;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: white;

  .show {
    transition: 150ms;
  }

  .show.active {
    transform: translateY(0px) scale(0) translateX(0px);
  }
`;

const Nav = styled.div`
  position: absolute;
  width: 25%;
  height: 5vh;
  top: 10px;
  border: 1px solid white;
`;

const NavBtn = styled(NavLink).attrs({
  activeClassName: "active",
  className: "flex",
})`
  min-width: 80px;
  height: auto;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: "Roboto", sans-serif;
  margin: 10px;
  text-decoration: none;
  color: white;

  &.active {
    border-bottom: 1px solid #986abf;
  }
`;

const AppView = () => {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
    document.body.setAttribute(
      "style",
      "position:fixed; height:100vh;width:100vw;"
    );
  };

  const handleLoginClose = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppProvider>
          <Wrapper className="flex">
            <LoginButton handleLoginClick={handleLoginClick}>LogIn</LoginButton>
            <LoginForm
              isShowLogin={isShowLogin}
              handleLoginClose={handleLoginClose}
            />
            <Nav className="flex">
              <NavBtn exact to={"/app"}>
                Strona główna
              </NavBtn>
              <NavBtn to={"/app/main"}>Piwa</NavBtn>
              <NavBtn to={"/app/account"}>Twoje konto</NavBtn>
            </Nav>
            <Switch>
              <Route path="/app/main">
                <MainPage />
              </Route>
              <Route path="/app/account">
                <UserAccount />
              </Route>
              <Route exact path="/app">
                <h1>strona startowa apki</h1>
              </Route>
            </Switch>
          </Wrapper>
        </AppProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppView;
