import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "providers/AppProvider";
import { getAuth, signOut } from "firebase/auth";
import { CloseButton } from "@chakra-ui/react";

const Btn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 50px;
  border: 1px solid white;
`;

const Welcome = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
`;

const Profilephoto = styled.img`
  max-height: 70px;
  border-radius: 35px;
  border: 1px solid black;
  opacity: 0.9;
  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

const Popover = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 300px;
  height: 300px;
  color: black;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 11;
  box-shadow: black -2px 4px 10px;

  .top {
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 50%;
    text-align: center;
    flex-direction: column;
  }

  .controls {
    width: 75%;
    height: 50%;
    flex-direction: column;
  }
`;

const Control = styled.button`
  width: 100%;
  height: 33%;
  border: 1px solid red;
  margin: 5px;

  &.logOut {
    width: 75%;
    border-radius: 20px;
    background-color: tomato;
    color: white;
    box-shadow: lightgray -2px 4px 10px;
  }
`;

const LoginButton = ({ handleLoginClick, isShowLogout, handleLogoutClick }) => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [showPopover, setShowPopover] = useState(false);

  const handleClick = () => {
    handleLoginClick();
  };

  const handleShowPopover = () => {
    setShowPopover((showPopover) => !showPopover);
  };

  const auth = getAuth();
  const signOutFirebase = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      {currentUser == null ? (
        <Btn onClick={handleClick} className="flex">
          Zaloguj się
        </Btn>
      ) : showPopover ? (
        <>
          <Popover className="flex">
            <div className="top flex">
              <CloseButton
                boxShadow="base"
                pos="absolute"
                top="5"
                left="5"
                onClick={handleShowPopover}
              />
              <button onClick={handleShowPopover}>
                <Profilephoto src={currentUser.photoURL} />
              </button>
              <p className="flex">
                Witaj, <br /> {currentUser.displayName}
              </p>
            </div>
            <div className="controls flex">
              <Control>1</Control>
              <Control>2</Control>
              <Control
                className="logOut"
                onClick={() => {
                  signOutFirebase();
                  console.log(currentUser);
                }}
              >
                Wyloguj się
              </Control>
            </div>
          </Popover>
        </>
      ) : (
        <>
          <Welcome onClick={handleShowPopover}>
            <Profilephoto src={currentUser.photoURL} />
          </Welcome>
        </>
      )}
    </>
  );
};

export default LoginButton;
