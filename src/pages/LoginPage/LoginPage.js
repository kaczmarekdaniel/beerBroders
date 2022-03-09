import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AppContext } from "providers/AppProvider";
import AccountPage from "./AccountPage";

import LoginForm from "./LoginForm";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: 40px;
  }

  hr {
    width: 50%;
    height: 1px;
    background-color: black;
    margin: 15px;
  }
`;

const Form = styled.div`
  background-color: whitesmoke;
  border-radius: 20px;
  position: relative;
  padding: 50px;
  width: 500px;
  box-shadow: lightgrey -2px 4px 10px;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 12px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  left: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: none;
  box-shadow: lightgrey -2px 4px 10px;
`;

const LoginPage = (props) => {
  const { currentUser } = useContext(AppContext);

  return (
    <Wrapper>
      {currentUser != null ? (
        <AccountPage currentUser={currentUser} />
      ) : (
        <LoginForm />
      )}
    </Wrapper>
  );
};

export default LoginPage;
