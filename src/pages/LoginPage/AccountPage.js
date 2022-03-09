import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  collectionGroup,
  query,
  where,
  getDocs,
  collection,
  addDoc,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { collectIdsAndDocs } from "components/utilities";
import CommentElement from "components/molecules/Comments/CommentElement/CommentElement";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  padding: 12vh 0 15vh 0;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 24px;
  }
`;

const UserInteractions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0 15% 0 15%;
  h1 {
    font-size: 24px;
  }
`;

const UserComments = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  width: 50%;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin: 50px 10px 0 0;
`;

const Comments = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TargetPost = styled.div`
  width: 40%;
  height: 100%;
  margin-top: 20px;
  padding: 10px;
  display: flex;

  img {
    max-height: 150px;
  }
`;

const UserReviews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  width: 50%;
  margin: 50px 0 0 10px;
  padding: 5px;

  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

const AccountPage = ({ currentUser }) => {
  const [comments, setComments] = useState(null);

  useEffect(async () => {
    let postTargets = [];

    const data = query(
      collectionGroup(db, "comments"),
      where("author_id", "==", currentUser.uid)
    );
    const querySnapshot = await getDocs(data);
    const posts = querySnapshot.docs.map(collectIdsAndDocs);

    posts.forEach((post) => postTargets.push(post.postid));

    const beers = query(
      collectionGroup(db, "beers"),
      where("beerid", "in", postTargets)
    );
    const beersQuerySnapshot = await getDocs(beers);
    const results = beersQuerySnapshot.docs.map(collectIdsAndDocs);

    console.log(results);

    posts.forEach((post, i) => {
      results.forEach((result, i) => {
        if (post.postid == result.id) {
          post.targetName = result.name;
          post.targetBrand = result.brand;
          post.targetImage = result.photoURL;
        }
      });
    });
    setComments(posts);
  }, []);
  return (
    <Wrapper>
      <UserInfo>
        {" "}
        <img src={currentUser.photoURL} />
        <h1>Witaj, {currentUser.displayName}</h1>
        <p>
          Liczba komentarzy: {comments != null ? comments.length : <p>...</p>}
        </p>
        <p>
          Liczba recenzji: {comments != null ? comments.length : <p>...</p>}
        </p>
        <Link to="/start/app" exact>
          <Button>Przejdź do aplikacji</Button>
        </Link>
        <Button>Wyloguj się</Button>
      </UserInfo>
      <UserInteractions>
        {" "}
        <UserComments>
          <h1>Twoje komentarze:</h1>
          {comments != null ? (
            comments.map((comment) => (
              <Comments>
                <CommentElement
                  text={comment.text}
                  author={comment.author}
                  image={currentUser.photoURL}
                />
                <TargetPost>
                  {comment.targetName}
                  <img src={comment.targetImage} />
                </TargetPost>
              </Comments>
            ))
          ) : (
            <>
              <h1>Ładowanie</h1>
            </>
          )}
        </UserComments>
        <UserReviews>
          <h1>Wystawione recenzje:</h1>
          {comments != null ? (
            comments.map((comment) => (
              <CommentElement text={comment.text} author={comment.author} />
            ))
          ) : (
            <>
              <h1>Ładowanie</h1>
            </>
          )}
        </UserReviews>
      </UserInteractions>
    </Wrapper>
  );
};

AccountPage.propTypes = {};

export default AccountPage;
