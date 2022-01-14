import React, { useRef } from "react";
import styled from "styled-components";
import useModal from "../../hooks/useModal";
import BlogPostModal from "./BlogPostModal";
const Wrapper = styled.div`
  height: 50%;
  margin: 10px;
  width: 31%;
  display: flex;
  flex-direction: column;
  padding: 0;
  &:first-of-type {
    width: 100%;
    margin-top: 10vh;

    height: 40%;
    flex-direction: row;
    background-color: #fff178;
    background-color: white;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      height: 55%;
      img {
        width: 60%;
      }
    }
    img {
      width: 60%;
      height: auto;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    margin: 2vh 0 2vh 0;
    &:first-of-type {
      width: 100%;
      height: auto;
      flex-direction: column;
      margin-top: 20vh;

      img {
        width: 100%;
      }
    }
  }
  img {
    cursor: pointer;
  }
`;

const Text = styled.div`
  margin: 0 0 0 3%;
  max-height: 100%;
`;

const Date = styled.p`
  color: #a3a4bf;
  width: 100%;
  font-weight: 300;
  margin: 0;
`;

const ShortVersion = styled.p`
  color: #a3a4bf;
  font-weight: 300;
  font-size: 0.9rem;
`;

const Title = styled.h1`
  color: #483954;
  font-size: 1.3rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 30%;
`;

const SeeMoreButton = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid black;
  font-weight: 300;
  position: relative;
  overflow: hidden;
  &:hover {
    color: white;
    transition-delay: 0.3s;
  }

  &:hover > .animate {
    animation: slideOut 1.5s forwards;
  }

  @keyframes slideOut {
    0% {
      transform: translatex(0);
      color: ${({ theme }) => theme.colors.paleOrange};
    }
    10% {
      transform: rotate(-40deg);
      color: ${({ theme }) => theme.colors.paleOrange};
    }
    50% {
      transform: translateX(280px);
      color: ${({ theme }) => theme.colors.paleOrange};
    }
    100% {
      color: black;
      left: -1px;
      top: -1px;
      width: 200px;
      height: 50px;
      transform: translateX(0px);
      z-index: 1;
    }
  }
`;

const Left = styled.div`
  top: -70px;
  left: -100%;
  color: ${({ theme }) => theme.colors.paleOrange};
  width: 70%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.paleOrange};
  position: absolute;
  animation: slideButton;
  animation-duration: 2s;
`;

const BlogPost = ({ postData }) => {
  const seeMore = useRef();
  const { Modal, isOpen, handleCloseModal, handleOpenModal } = useModal();

  return (
    <Wrapper>
      <img src={postData.articlecover.url} />
      <Text>
        <Date>{postData.dat}</Date> <br />
        <Title>{postData.title}</Title>
        <br />
        <ShortVersion>{postData.shortversion}</ShortVersion>
        <ButtonContainer className="flex">
          <SeeMoreButton onClick={handleOpenModal}>
            <p> Zobacz więcej</p>
            <Left className="animate flex">
              <div className="delayText"> Przejdź do artykułu</div>
            </Left>
          </SeeMoreButton>
        </ButtonContainer>
      </Text>
      {isOpen ? (
        <BlogPostModal handleClose={handleCloseModal} postData={postData} />
      ) : null}
    </Wrapper>
  );
};

BlogPost.propTypes = {};

export default BlogPost;
