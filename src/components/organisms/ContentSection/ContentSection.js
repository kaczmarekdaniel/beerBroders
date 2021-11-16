import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Skeleton, Stack, SkeletonText } from "@chakra-ui/react";

import BeerElement from "components/molecules/BeerElement/BeerElement";

const Section = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const Footer = styled.div`
  width: 100%;
  height: 50px;
`;

const ContentSection = ({ items }) => {
  let toRender = items.length == 0;

  const mapElements = () => {};
  return (
    <>
      <Section>
        {items.length == 0 ? (
          <>
            <Skeleton height="45%" w="30%" margin="20px 1% 20px 1%" />
            <Skeleton height="45%" w="30%" margin="20px 1% 20px 1%" />
            <Skeleton height="45%" w="30%" margin="20px 1% 20px 1%" />
          </>
        ) : (
          items.map((item) => (
            <BeerElement item={item} key={item.id}></BeerElement>
          ))
        )}

        <Footer></Footer>
      </Section>
    </>
  );
};

export default ContentSection;
