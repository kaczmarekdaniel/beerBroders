import React, { useEffect } from "react";
import styled from "styled-components";

const Element = styled.div`
  width: 30%;
  height: 45%;
  min-height: 350px;
  margin: 20px 1% 20px 1%;
  border: 1px solid #c9c9c9;
  align-items: flex-end;
  flex-direction: column;
`;

const Review = styled.div`
  width: 30%;
  height: 100%;
  left: 0;
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

const BeerElement = ({ item }) => {
  const newArr = [].concat(item.reviews);
  const average = (array) => array.reduce((a, b) => a + b) / array.length;
  return (
    <Element className="flex">
      <Photo className="flex">
        <h1>Photo</h1>{" "}
      </Photo>
      <BottomTitle className="flex">
        <SideDiv className="flex">
          <Review className="flex">{average(newArr)}</Review>
        </SideDiv>
        <CenterDiv className="flex">
          <p>{item.brand}</p>
          <p>{item.name}</p>
          <BottomButton> Zobacz więcej </BottomButton>
        </CenterDiv>
        <SideDiv className="flex"></SideDiv>
      </BottomTitle>
    </Element>
  );
};

export default BeerElement;
