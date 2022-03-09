import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { Stack, Button } from "@chakra-ui/react";
import { AppContext } from "providers/AppProvider";
import { useToast, Text } from "@chakra-ui/react";
import {
  collectionGroup,
  query,
  where,
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AddComment = styled.div`
  color: white;
  z-index: 20;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  widht: 200px;
  height: 100px;
  border: 1px solid white;
`;

const ReviewBeer = ({ postid }) => {
  const { currentUser } = useContext(AppContext);
  const toast = useToast();
  const [color, setColor] = useState(null);
  const [taste, setTaste] = useState(null);
  const [visual, setVisual] = useState(null);
  const [canAdd, setCanAdd] = useState(true);

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  const handleAddReview = async (input) => {
    console.log((color + taste + visual) / 3);
    toast({
      title: "Sukces!",
      description: "Opinia została poprawnie dodana.",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };

  return (
    <Wrapper>
      {currentUser ? (
        canAdd ? (
          <>
            <AddComment>
              Barwa:
              <Stack
                spacing={4}
                direction="row"
                align="center"
                mb="20px"
                mt="5px"
              >
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setColor(1)}
                >
                  1
                </Button>
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setColor(2)}
                >
                  2
                </Button>
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setColor(3)}
                >
                  3
                </Button>
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setColor(4)}
                >
                  4
                </Button>
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setColor(5)}
                >
                  5
                </Button>
              </Stack>
              Smak:
              <Stack
                spacing={4}
                direction="row"
                align="center"
                mb="20px"
                mt="5px"
              >
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setVisual(1)}
                >
                  1
                </Button>
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setVisual(2)}
                >
                  2
                </Button>
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setVisual(3)}
                >
                  3
                </Button>
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setVisual(4)}
                >
                  4
                </Button>
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setVisual(5)}
                >
                  5
                </Button>
              </Stack>
              Ocena wizualna:
              <Stack spacing={4} direction="row" align="center" mt="5px">
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setTaste(1)}
                >
                  1
                </Button>
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setTaste(2)}
                >
                  2
                </Button>
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setTaste(3)}
                >
                  3
                </Button>
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setTaste(4)}
                >
                  4
                </Button>
                <Button
                  colorScheme="grey"
                  variant="outline"
                  size="md"
                  onClick={() => setTaste(5)}
                >
                  5
                </Button>
              </Stack>
              <Text fontSize="sm" as="samp" fontWeight="300" mt="40px">
                Kolor: {color != null ? color : "Nie wybrano"}
              </Text>
              <Text fontSize="sm" as="samp" fontWeight="300">
                Smak: {taste != null ? taste : "Nie wybrano"}
              </Text>
              <Text fontSize="sm" as="samp" fontWeight="300">
                Ocena wizualna: {visual != null ? visual : "Nie wybrano"}
              </Text>
              <Button
                colorScheme="blue"
                mt="25px"
                mb="20px"
                onClick={() => handleAddReview()}
              >
                Dodaj opinię
              </Button>
            </AddComment>
          </>
        ) : (
          <></>
        )
      ) : (
        <>
          <h1>Musisz byc zalogowany by dodac opinie</h1>
        </>
      )}
    </Wrapper>
  );
};

export default ReviewBeer;
