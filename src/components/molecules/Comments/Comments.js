import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { Textarea, Button } from "@chakra-ui/react";
import { AppContext } from "providers/AppProvider";
import { useToast } from "@chakra-ui/react";
import {
  collectionGroup,
  query,
  where,
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import CommentElement from "./CommentElement/CommentElement";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    margin: 30px 30px 30px 0;
  }
`;

const AddComment = styled.div`
  color: white;
  z-index: 20;
  margin-top: 30px;
`;

const SubmitButton = styled.button`
  widht: 200px;
  height: 100px;
`;

const Comments = ({ postid }) => {
  const inputRef = useRef();
  const [comments, setComments] = useState(null);
  const { currentUser } = useContext(AppContext);
  const toast = useToast();

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  const handleAddComment = async (input) => {
    if (inputRef.current.value.length > 5) {
      const commentData = {
        text: input,
        author: currentUser.displayName,
        author_id: currentUser.uid,
        postid: postid,
        img: currentUser.photoURL,
      };
      setComments([commentData, ...comments]);
      await addDoc(collection(db, "beers", postid, "comments"), commentData);
      inputRef.current.value = "";
      toast({
        title: "Sukces!",
        description: "Komentarz został poprawnie dodany.",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    } else {
      toast({
        title: "Błąd!",
        description: "Komentarz jest za krótki",
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    }
  };

  useEffect(async () => {
    const data = query(
      collectionGroup(db, "comments"),
      where("postid", "==", postid)
    );
    const querySnapshot = await getDocs(data);
    const posts = querySnapshot.docs.map(collectIdsAndDocs);
    setComments(posts);
  }, []);

  return (
    <Wrapper>
      {currentUser ? (
        <>
          <AddComment>
            <Textarea
              variant="filled"
              placeholder="Dodaj komentarz (min. 5 znakow)"
              ref={inputRef}
            />
            <Button
              colorScheme="gray"
              variant="outline"
              mt="20px"
              onClick={() => {
                handleAddComment(inputRef.current.value);
              }}
            >
              Opublikuj
            </Button>
          </AddComment>
          {comments != null ? (
            comments.map((item) => (
              <CommentElement
                key={item.id}
                text={item.text}
                author={item.author}
                image={item.img}
              />
            ))
          ) : (
            <h1>Brak komentarzy, dodaj swój jako pierwszy!</h1>
          )}
        </>
      ) : (
        <>
          <h1>Musisz byc zalogowany by dodac komentarz</h1>
          <Link to="/start/login" exact>
            <Button>Przejdz do ekranu logowania</Button>
          </Link>
        </>
      )}
    </Wrapper>
  );
};

Comments.propTypes = {};

export default Comments;
