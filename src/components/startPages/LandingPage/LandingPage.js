import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 3rem;
`;

const LandingPage = () => {
  return (
    <Wrapper>
      <Title>Title title title title title title title title title title</Title>
    </Wrapper>
  );
};

export default LandingPage;
