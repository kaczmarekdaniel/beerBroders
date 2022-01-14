import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

const GlobalLogo = styled(Link)`
  width: auto;
  height: 100%;
  text-decoration: none;
  font-size: 32px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 10vh;

  display: flex;
  position: absolute;
  top: 0;
  left: 0;

  align-items: center;
  justify-content: center;
  z-index: 10;
  flex-wrap: wrap;
  padding: 0 10% 5px 10%;
`;

const Notch = styled.div`
  margin-top: -55px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 50px 30px 30px 30px;
  height: 80%;
  width: 35%;
  border-radius: 25px;
  overflow: hidden;
`;

const Nav = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;

  height: 100%;
`;

const NavAndAppButton = () => {
  return (
    <Wrapper>
      <Notch>
        <GlobalLogo to="/" className="flex">
          BRODERS
        </GlobalLogo>
        <Nav className="flex">
          <Navigation />
        </Nav>
      </Notch>
    </Wrapper>
  );
};

export default NavAndAppButton;
