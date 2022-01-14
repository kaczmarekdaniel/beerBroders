import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { StructuredText } from "react-datocms";
import Comments from "../molecules/Comments/Comments";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #323232;
  position: absolute;
  color: white;
  overflow: scroll;
  margin: 0;
  overflow: hidden;
  top: 0px;
  z-index: 15;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    .content {
      width: 50%;
    }
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

const Content = styled.p`
  height: auto;
`;

const Close = styled.button`
  position: absolute;
  top: 15px;
  left: 30px;
  height: 50px;
  font-size: 32px;
  background-color: transparent;
  color: white;
  border: none;
  padding: 0;
  z-index: 3;
`;

const ArticleContent = styled.div`
  background-color: transparent;
  width: auto;
  color: white;
  justify-content: flex-start;
  margin: 0 20% 0 20%;
  text-align: justify;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: auto;
  background-color: transparent;
  width: auto;
  color: white;
  justify-content: flex-start;
  margin: 0 20% 0 20%;
  padding: 0 10% 0 10%;
  text-align: justify;

  hr {
    margin: 20px;
  }
  h1 {
    font-size: 48px;
    text-align: center;
    margin-bottom: 5vh;
  }
  h2 {
    font-size: 32px;
    margin: 0 0 30px 0;
  }
  h3 {
    margin-bottom: 5vh;
    font-size: 33px;
    font-weight: 300;
  }

  p {
    margin: 5px 0 5px 0;
  }

  img {
    width: 100%;
    margin: 0 auto;
  }
`;

const modalContainer = document.getElementById("modal-container");

const ArticleModal = ({ isOpen, handleClose, setModalState, postData }) => {
  const [currentArticle, setCurrentArticle] = useState([]);
  const { id } = useParams();

  const modalNode = document.createElement("div");
  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <Wrapper>
      <Close
        onClick={() => {
          handleClose();
          setModalState(true);
        }}
      >
        X
      </Close>

      <ContentContainer className="scroll">
        <img src={postData.articlecover.url} />
        <h1>{postData.title}</h1>
        <h3>{postData.shortversion}</h3>
        <StructuredText data={postData.articlecontent} />
        <p>{postData.author}</p>
        <p>{postData.dat}</p>
        <Comments postid={postData.commentsid}></Comments>
      </ContentContainer>
    </Wrapper>,
    modalNode
  );
};

ArticleModal.propTypes = {};

export default ArticleModal;
