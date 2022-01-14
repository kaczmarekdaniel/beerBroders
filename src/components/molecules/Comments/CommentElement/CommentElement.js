import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: auto;
  margin-top: 20px;
  border: 1px solid white;
  padding: 10px;

  h4 {
    font-size: 19px;
  }
`;

const CommentElement = ({ text, author }) => {
  return (
    <Wrapper>
      <h4>{author}</h4>
      <p>{text}</p>
    </Wrapper>
  );
};

CommentElement.propTypes = {};

export default CommentElement;
