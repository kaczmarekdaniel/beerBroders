import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Btn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 50px;
  border: 1px solid white;
  color: white;
`;

const LoginButton = ({ handleLoginClick }) => {
  const handleClick = () => {
    handleLoginClick();
  };
  return <Btn onClick={handleClick} className="flex"></Btn>;
};

export default LoginButton;
