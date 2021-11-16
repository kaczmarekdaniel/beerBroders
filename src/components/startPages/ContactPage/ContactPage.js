import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  display: flex;
  justify-content: center;
  align-items: center;
  nav {
    width: 200px;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const Contact = () => {
  return <Wrapper>contact </Wrapper>;
};

export default Contact;
