import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Skeleton, Stack, SkeletonText } from "@chakra-ui/react";

import BeerElement from "components/molecules/BeerElement/BeerElement";

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const Footer = styled.div`
  width: 100%;
  height: 50px;
`;

const ContentSection = ({ items }) => {
  return (
    <>
      <Section>
        {items == null ? (
          <>
            <Skeleton
              key={1}
              height="250px"
              w="200px"
              margin="0 27px 27px 27px"
            />
            <Skeleton
              key={2}
              height="250px"
              w="200px"
              margin="0 27px 27px 27px"
            />
            <Skeleton
              key={3}
              height="250px"
              w="200px"
              margin="0 27px 27px 27px"
            />
            <Skeleton
              key={4}
              height="250px"
              w="200px"
              margin="0 27px 27px 27px"
            />
            <Skeleton
              key={5}
              height="250px"
              w="200px"
              margin="0 27px 27px 27px"
            />
            <Skeleton
              key={6}
              height="250px"
              w="200px"
              margin="0 27px 27px 27px"
            />
          </>
        ) : (
          items.map((item) => (
            <>
              {" "}
              <BeerElement item={item} key={item.id}></BeerElement>{" "}
            </>
          ))
        )}

        <Footer></Footer>
      </Section>
    </>
  );
};

export default ContentSection;
