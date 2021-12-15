import React, { useEffect } from "react";
import styled from "styled-components";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Element = styled.div`
  width: 100%;
  height: 45%;
  min-height: 350px;
  margin: 20px 20px 20px 20px;
  border: 1px solid #c9c9c9;
  align-items: flex-end;
  flex-direction: column;
  &:first-of-type {
    margin-top: 50%;
  }

  @media (min-width: 1024px) {
    width: 30%;
    margin: 20px 1% 20px 1%;
    height: 45%;
    &:first-of-type {
      margin-top: 20px;
    }
  }
`;

const Review = styled.div`
  width: 30%;
  height: 100%;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: lightseagreen;
  box-shadow: lightgrey -2px 4px 10px;

  top: 0;
`;

const BottomTitle = styled.div`
  width: 100%;
  height: 25%;
  border-top: 1px solid white;
  background-color: whitesmoke;
  color: black;
  flex-direction: row;
  bottom: 0;
  p {
    margin: 5px;
  }
`;

const Photo = styled.div`
  width: 100%;
  height: 75%;
`;

const BottomButton = styled.button`
  width: 100px;
  height: 20px;
  background-color: black;
  border: none;
  margin: 5px;
  color: white;

  &:hover {
    width: 110px;
    height: 30px;
    margin: 0px;
  }
`;

const CenterDiv = styled.div`
  width: 50%;
  height: 100%;
  flex-direction: column;
`;

const SideDiv = styled.div`
  width: 25%;
  height: 100%;
  flex-direction: column;
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
  const newArr = [].concat(item.reviews);
  item.reviewCount = newArr.length;

  const average = (array) => array.reduce((a, b) => a + b) / array.length;
  item.average = average(newArr);

  return (
    <Element className="flex">
      <Photo className="flex">
        <h1>Photo</h1>{" "}
      </Photo>
      <BottomTitle className="flex">
        <SideDiv className="flex">
          <Review className="flex">{item.average}</Review>
        </SideDiv>
        <CenterDiv className="flex">
          <p>{item.brand}</p>
          <p>{item.name}</p>
          <Button onClick={onOpen} colorScheme="purple" variant="outline">
            Zobacz więcej
          </Button>

          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Header className="flex">
                  <Review className="flex">{item.average}</Review>

                  <div>
                    <p>{item.brand}</p>
                    <p>{item.name}</p>
                  </div>
                </Header>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </CenterDiv>
        <SideDiv className="flex"></SideDiv>
      </BottomTitle>
    </Element>
  );
};

export default BeerElement;
