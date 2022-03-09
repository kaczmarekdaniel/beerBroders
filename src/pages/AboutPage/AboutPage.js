import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15vh 15% 5% 15%;
  @media screen and (max-width: 1024px) {
    padding-bottom: 10vh;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 300;
  margin-bottom: 20px;
  &:last-of-type {
    margin-top: 50px;
  }
  &:first-of-type {
    margin-top: 10vh;
  }
  @media screen and (max-width: 1024px) {
    &:first-of-type {
      margin-top: 20vh;
    }
  }
`;

const About = styled.p`
  font-weight: 300;
  font-size: 16px;
  width: 35%;
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    width: 55%;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

const TeamMembers = styled.div`
  width: 100%;
  height: 35%;
  background-color: ${({ theme }) => theme.colors.paleOrange};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Border = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100%;
  height: 100%;
  border: 2px solid black;
`;

const TeamMember = styled.img`
  animation: spin;
  width: 150px;
  height: 150px;
  animation-iteration-count: infinite;
  animation-duration: 4.5s;
  animation-timing-function: linear;
  margin: 0 50px 0 50px;

  @media screen and (max-width: 1024px) {
    margin: 2vh 0 2vh 0;
  }
`;

const AboutPage = () => {
  return (
    <Wrapper>
      <Title>
        {" "}
        Kim jesteśmy?
        <About>
          Nasz zespół złożony jest z piątki przyjaciół, którzy w wolnym czasie
          postanowili stworzyć aplikację na naszych wspólnych potrzeb.
          Zainteresowani tematami związanymi z alkoholem chcieliśmy, aby
          istniało miejsce, w którym każdy z nas w prosty oraz przejrzysty
          sposób będzie mógł podzielić się opinią o świeżo-spróbowanym napoju.
        </About>
      </Title>
      <Title> Nasz zespół</Title>
      <TeamMembers>
        <TeamMember src="https://firebasestorage.googleapis.com/v0/b/beerbroders-d46c2.appspot.com/o/teamMembers%2FglowaRobert.png?alt=media&token=7ab9c2cf-88b1-45bc-b3c3-d57de24674f1" />
        <TeamMember src="https://firebasestorage.googleapis.com/v0/b/beerbroders-d46c2.appspot.com/o/teamMembers%2FglowaWiktor.png?alt=media&token=da6635d7-6ce8-416d-b9c1-fb70a3a21d64" />
        <TeamMember src="https://firebasestorage.googleapis.com/v0/b/beerbroders-d46c2.appspot.com/o/teamMembers%2FkamilGlowa.png?alt=media&token=4ca64916-aa6a-4da0-8198-04a5d72c81ca" />
        <TeamMember src="https://firebasestorage.googleapis.com/v0/b/beerbroders-d46c2.appspot.com/o/teamMembers%2FglowaMaciek.png?alt=media&token=77b1b8dd-5872-44e3-8f7c-af93f2b5395a" />
        <TeamMember src="https://firebasestorage.googleapis.com/v0/b/beerbroders-d46c2.appspot.com/o/teamMembers%2FdanielGLowa.png?alt=media&token=3c8bdcbb-a62b-47ca-b198-59cbbf8e1a0d" />
        <Border></Border>
      </TeamMembers>
    </Wrapper>
  );
};

export default AboutPage;
