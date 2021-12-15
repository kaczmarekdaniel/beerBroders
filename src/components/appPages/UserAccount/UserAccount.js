import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { AppContext } from "providers/AppProvider";

const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  color: white;
  flex-direction: column;
  justify-content: flex-start;
`;

const UserDataSection = styled.div`
  width: 40%;
  height: 40%;
  color: white;
  border: 1px solid white;
  flex-direction: column;
`;

const UserAccount = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  if (currentUser != null) {
    console.log(currentUser);
  } else {
    console.log("user not logged in");
  }
  return (
    <Wrapper className="flex">
      {currentUser != null ? (
        <>
          <UserDataSection className="flex">
            <img src={currentUser.photoURL} />
            <p>{currentUser.displayName}</p>
            <p>{currentUser.email}</p>
          </UserDataSection>
        </>
      ) : (
        console.log("xd")
      )}
    </Wrapper>
  );
};

export default UserAccount;
