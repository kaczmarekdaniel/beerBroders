import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = styled.nav`
  position: absolute;
  width: auto;
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

const Nav = ({ item }) => {
  return (
    <Navigation className="flex">
      <NavBtn exact to={"/app"}>
        Strona główna
      </NavBtn>
      <NavBtn to={"/app/main"}>Piwa</NavBtn>
      <NavBtn to={"/app/account"}>Twoje konto</NavBtn>
      <NavBtn to={"/app/addbeer"}>Dodaj piwo</NavBtn>
    </Navigation>
  );
};

export default Nav;
