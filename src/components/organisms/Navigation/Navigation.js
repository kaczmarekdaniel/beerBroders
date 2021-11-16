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
  color: white;

  &.active {
    border-bottom: 1px solid #986abf;
  }
`;

const Nav = styled.div`
  width: 300px;
  height: 100%;
  position: relative;
`;

const Navigation = () => {
  return (
    <Nav className="flex">
      <Button className="flex" exact to={"/start"}>
        Main
      </Button>

      <Button className="flex" to={"/start/about"}>
        About
      </Button>

      <Button className="flex" to={"/start/contact"}>
        Contact
      </Button>
    </Nav>
  );
};

export default Navigation;
