import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { AppContext } from "providers/AppProvider";

import { Button, Stack } from "@chakra-ui/react";

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

const AddBeer = () => {
  return (
    <Stack spacing={4} direction="row" align="center">
      <Button colorScheme="blue">Button</Button>
      <Button colorScheme="blue">Button</Button>
      <Button colorScheme="blue">Button</Button>
      <Button colorScheme="blue">Button</Button>
    </Stack>
  );
};

export default AddBeer;
