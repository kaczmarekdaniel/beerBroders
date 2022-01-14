import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Textarea, Button } from "@chakra-ui/react";
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

const Wrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  height: auto;
  margin: 5vh 0 10vh 0;
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
  border: 1px solid white;
`;

const Comments = ({ postid }) => {
  const inputRef = useRef();
  const [comments, setComments] = useState(null);
  const [dbQuery, setDBQuery] = useState(
    where("id", "==", "41xnu1Lr7GZf8yEQiwgM")
  );
  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  const handleAddComment = async (input) => {
    if (inputRef.current.value.length > 5) {
      const commentData = {
        text: input,
        author: "Daniel",
        postid: postid,
      };
      setComments([commentData, ...comments]);
      await addDoc(collection(db, "blog", postid, "comments"), commentData);
      inputRef.current.value = "";
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
      <h1>Komentarze</h1>
      <AddComment>
        <Textarea
          variant="filled"
          placeholder="Dodaj komentarz"
          ref={inputRef}
        />
        <Button
          colorScheme="gray"
          variant="outline"
          onClick={() => {
            handleAddComment(inputRef.current.value);
          }}
        >
          Button
        </Button>
      </AddComment>
      {comments != null ? (
        comments.map((item) => (
          <CommentElement key={item.id} text={item.text} author={item.author} />
        ))
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

Comments.propTypes = {};

export default Comments;
