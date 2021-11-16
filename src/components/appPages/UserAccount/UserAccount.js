import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { AppContext } from "providers/AppProvider";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: white;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    padding: 5% 20% 2% 20%;
  }
`;

const UserAccount = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  if (currentUser != null) {
    console.log(currentUser.email);
  } else {
    console.log("user not logged in");
  }
  return <Wrapper className="flex"></Wrapper>;
};

export default UserAccount;
