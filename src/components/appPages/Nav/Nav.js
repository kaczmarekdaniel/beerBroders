import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = styled.nav`
  position: absolute;
  width: auto;
  height: 10vh;
  top: 0px;
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
  color: #a3a4bf;

  &.active {
    color: #483954;
  }
`;

const Nav = ({ item }) => {
  return (
    <Navigation className="flex">
      <NavBtn exact to={"/app"}>
        Strona główna
      </NavBtn>
      <NavBtn to={"/app/main"}>Piwa</NavBtn>
      <NavBtn to={"/app/account"}>Twoje konto</NavBtn>
    </Navigation>
  );
};

export default Nav;
