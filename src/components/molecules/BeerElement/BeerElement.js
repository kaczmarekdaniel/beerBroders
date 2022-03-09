import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useDisclosure } from "@chakra-ui/react";
import ReviewBeer from "../ReviewBeer/ReviewBeer";
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import Comments from "../Comments/Comments";

const Element = styled.button`
  width: 100%;
  height: 35vh;
  min-height: 150px;
  margin: 10px 0 10px 0;
  align-items: flex-end;
  flex-direction: column;
  &:first-of-type {
    margin-top: 10%;
  }

  @media (min-width: 1200px) and (max-width: 1920px) {
    width: 180px;
    margin: 0px 27px 27px 27px;
    height: 250px;
    padding: 5px;
    &:first-of-type {
      margin-top: 0px;
    }
  }
  @media (min-width: 1921px) {
    width: 220px;
    margin: 0px 10px 10px 10px;
    height: 320px;
    padding: 5px;
    &:first-of-type {
      margin-top: 0px;
    }
  }
`;

const Review = styled.div`
  left: 0;
  width: 45px;
  height: 45px;
  border-radius: 30px;
  margin: 5px;
  background-color: ${(props) => props.color};
  box-shadow: lightgrey -2px 4px 10px;
  font-weight: 500;

  top: 0;
`;

const ProductInfo = styled.div`
  width: 100%;
  height: 30%;
  color: black;
  flex-direction: row;
  flex-wrap: wrap;
  bottom: 0;
  p {
    margin: 5px;
  }
`;

const Photo = styled.div`
  width: 100%;
  height: 100%;
  max-height: 70%;
  background-color: ${(props) => (props.color ? props.color : "lightblue")};
  cursor: pointer;
  img {
    max-height: 100%;
  }
`;

const BottomDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;

  font-weight: 300;
  white-space: nowrap;
  p:first-of-type {
    font-weight: 500;
    margin: 5px 0 0 0;
    animation: moveDownTitle 0.3s reverse;
  }

  p {
    margin: 0;
    z-index: 10;
    animation: moveDown 0.4s reverse;
    cursor: pointer;
  }

  &:hover > p {
    animation: moveDownTitle 0.3s forwards;
  }

  &:hover > p:first-of-type {
    animation: moveDown 0.8s forwards;
  }

  @keyframes moveDown {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(4px);
    }
  }

  @keyframes moveDownTitle {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(3px);
    }
  }
`;

const ReviewContainer = styled.div`
  width: 30%;
  height: 50%;
  flex-direction: column;
  position: absolute;
  right: 0;
  z-index: 10;

  top: 0;
`;

const Header = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  div {
    margin: 0 20px 0 0;
  }
`;

const BeerElement = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [color, setColor] = useState();
  const [visibility, setVisibility] = useState("hidden");
  const newArr = [].concat(item.reviews);
  item.reviewCount = newArr.length;
  const average = (array) => array.reduce((a, b) => a + b) / array.length;
  item.average = average(newArr);

  useEffect(() => {
    if (item.average < 2) {
      setColor("#ff6961");
    } else if (item.average >= 2 && item.average <= 4) {
      setColor("#ffae42");
    } else {
      setColor("#a0e7a0");
    }
    setTimeout(() => setVisibility("visible"), 700);
  }, []);
  return (
    <>
      <Element className="flex" onClick={onOpen}>
        <Photo className="flex" color={item.background}>
          <img src={`${item.photoURL}`} />{" "}
        </Photo>
        <ProductInfo className="flex " onClick={onClose}>
          <BottomDiv>
            <p>{item.brand}</p>
            <p>{item.name}</p>

            <ReviewContainer>
              {" "}
              <Review className="flex" color={color}>
                {item.average}
              </Review>
            </ReviewContainer>
          </BottomDiv>
        </ProductInfo>

        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              background={item.background}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <img src={`${item.photoURL}`}></img>
              <p>{item.brand}</p>
              <p>{item.name}</p>
              <Text fontSize="sm" as="samp" fontWeight="300">
                Zawartość alkoholu: {item.alcohol}%
              </Text>
              <Text fontSize="sm" as="samp" fontWeight="300">
                Kraj pochodzenia: {item.country}
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody bg="darkgrey">
              <ReviewBeer postid={item.id} />
              <Comments postid={item.id} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Element>
    </>
  );
};

export default BeerElement;
