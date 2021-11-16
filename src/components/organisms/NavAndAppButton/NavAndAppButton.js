import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

const Button = styled(NavLink).attrs({ activeClassName: "active" })`
  min-width: 80px;
  height: auto;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 10px;
  text-decoration: none;
  color: white;

  &.active {
    border-bottom: 1px solid #986abf;
  }
`;

const AppButton = styled(Link)`
  width: 200px;
  height: auto;
  text-align: center;
  text-decoration: none;
  color: black;
  margin-left: 50px;
  color: white;
  display: flex;
  border: 1px solid white;
  h3 {
    font-weight: 300;
  }
`;

const GlobalLogo = styled(Link)`
  width: 250px;
  height: 100%;
  text-decoration: none;
  color: white;
  border: 1px solid white;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 35px 10% 5px 10%;
`;

const Nav = styled.div`
  flex-direction: row;
  flex-wrap: wrap;

  height: 100%;
`;

const NavAndAppButton = () => {
  return (
    <Wrapper>
      <GlobalLogo to="/" className="flex">
        BeerBrodersLogo
      </GlobalLogo>
      <Nav className="flex">
        <Navigation />
        <AppButton className="flex" to={"/app"}>
          <h3 className="flex">Przejdź do aplikacji</h3>
        </AppButton>
      </Nav>
    </Wrapper>
  );
};

export default NavAndAppButton;
