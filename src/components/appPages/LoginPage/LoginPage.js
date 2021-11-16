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
const Wrapper = styled.div`
  width: calc(100% - 8px);
  height: 100%;
  position: absolute;
  top: 0%;
  backdrop-filter: blur(2px);
  text-align: center;
  right: 8px;
  z-index: 11; /* 1px higher than the overlay layer */
  color: black;

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

const LoginForm = ({ isShowLogin, handleLoginClose }) => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const signInWithGoogle = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setCurrentUser(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });

  return (
    <Wrapper className={`flex ${isShowLogin ? "active" : ""} show`}>
      <Form className="flex">
        <CloseButton
          onClick={() => {
            handleLoginClose();
            document.body.setAttribute("style", "");
          }}
        >
          X
        </CloseButton>

        <h1>zaloguj się</h1>

        <Stack spacing={3} className="flex" styles="justify-content:center;">
          <Input variant="filled" placeholder="twoj@email.pl" isDisabled />
          <Input
            variant="filled"
            type="password"
            placeholder="••••••••••"
            isDisabled
          />

          <div className="flex">
            <p>Akceptuję lorem ipsum</p>
            <Switch id="email-alerts" isDisabled />
          </div>
          <Button
            colorScheme="teal"
            variant="outline"
            size="sm"
            width="50%"
            isDisabled
          >
            Button
          </Button>
        </Stack>
        <hr />
        <p>Inne metody</p>
        <Button
          onClick={() => {
            signInWithGoogle();
          }}
          colorScheme="purple"
          w="100px"
          variant="outline"
          h="50px"
        >
          <FcGoogle className="icon" />
        </Button>
      </Form>
    </Wrapper>
  );
};

export default LoginForm;
