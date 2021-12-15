import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutPage = () => {
  return <Wrapper>About us</Wrapper>;
};

export default AboutPage;
