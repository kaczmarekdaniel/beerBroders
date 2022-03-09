import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Button = styled(NavLink).attrs({ activeClassName: "active" })`
  min-width: 80px;
  height: auto;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: "Roboto", sans-serif;
  margin: 10px;
  text-decoration: none;
  white-space: nowrap;
  color: #a3a4bf;
  &.active {
    color: #483954;

    font-weight: 500;
  }
`;

const Nav = styled.div`
  width: auto;
  height: 100%;
  position: relative;

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

const Navigation = () => {
  return (
    <Nav className="flex">
      <Button className="flex" exact to={"/start"}>
        Strona główna
      </Button>

      <Button className="flex" to={"/start/about"}>
        O nas
      </Button>

      <Button className="flex" to={"/start/articles"}>
        Artykuły
      </Button>

      <Button className="flex" to={"/start/app"}>
        Oceniaj
      </Button>

      <Button className="flex" to={"/start/login"}>
        Zaloguj się
      </Button>
    </Nav>
  );
};

export default Navigation;
