import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Skeleton, Stack, SkeletonText } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
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
    <Section>
      {items == null ? (
        <></>
      ) : (
        items.map((item) => (
          <BeerElement key={item.id} item={item}></BeerElement>
        ))
      )}

      <Footer></Footer>
    </Section>
  );
};

export default ContentSection;
