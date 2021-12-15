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
import { useMediaQuery } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "./styles.css";
import MainPage from "components/appPages/MainPage/MainPage.js";
import LoginForm from "components/appPages/LoginForm/LoginForm.js";
import LoginButton from "components/atoms/LoginButton/LoginButton";
import UserAccount from "components/appPages/UserAccount/UserAccount.js";
import AddBeer from "components/appPages/AddBeer/AddBeer.js";
import Nav from "components/molecules/Nav/Nav.js";

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

const AppView = () => {
  const [isShowLogin, setIsShowLogin] = useState(true);
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
    document.body.setAttribute(
      "style",
      "position:fixed; height:100vh;width:100vw;"
    );
  };

  const handleLoginClose = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
    document.body.setAttribute("style", "");
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

            {isLargerThan1280 ? (
              <Nav />
            ) : (
              <>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    variant="outline"
                    pos="absolute"
                    top="20px"
                    left="20px"
                    icon={<HamburgerIcon />}
                  />
                  <MenuList bg="white" color="black">
                    <MenuItem>Strona główna</MenuItem>
                    <MenuItem>Piwa</MenuItem>
                    <MenuItem>Twoje konto</MenuItem>
                  </MenuList>
                </Menu>
              </>
            )}
            <Switch>
              <Route path="/app/main">
                <MainPage />
              </Route>
              <Route path="/app/account">
                <UserAccount />
              </Route>
              <Route path="/app/addbeer">
                <AddBeer />
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
