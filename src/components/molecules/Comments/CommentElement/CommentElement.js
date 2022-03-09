import React from "react";
import styled from "styled-components";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: auto;
  margin-top: 20px;
  padding: 10px;
  width: 60%;
  p {
    font-size: 16px;
    font-weight: 300;
  }
  h4 {
    font-size: 19px;
    font-weight: 500;
  }
`;

const CommentElement = ({ text, author, image = null }) => {
  return (
    <Wrapper>
      <div className="flex">
        <Avatar name={author} src={image} mr="20px" />
        <div>
          <h4>{author}</h4>
          <p>{text}</p>
        </div>
      </div>
    </Wrapper>
  );
};

CommentElement.propTypes = {};

export default CommentElement;
