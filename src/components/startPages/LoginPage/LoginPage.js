import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";
import { AppContext } from "providers/AppProvider";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { userInfo } from "os";
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
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [buttonState, setButtonState] = useState(false);

  return (
    <Wrapper>{currentUser != null ? <h1>elo</h1> : <LoginForm />}</Wrapper>
  );
};

export default LoginPage;
