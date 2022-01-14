import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { doc } from "firebase/firestore";

import { db } from "../../../firebase";
import { Select, Input } from "@chakra-ui/react";

import ContentSection from "components/appPages/ContentSection/ContentSection";

const Wrapper = styled.div`
  width: auto;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: white;
  flex-direction: column;
  justify-content: flex-start;
`;

const FilterBar = styled.div`
  width: 100%;
  height: 10%;
  padding: 20px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  visibility: hidden;
`;

const FilterBy = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  width: 40%;
  height: auto;
  background-color: transparent;
  font-size: 13px;
  color: white;
  margin: 2px;

  &:hover {
    color: blue;
  }
`;

const SearchBar = styled.div`
  width: 50%;
  height: 100%;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SearchBarInput = styled.input`
  height: 50px;
  width: 200px;
  padding: 0 5% 0 5%;
`;

const SearchBarButton = styled.button`
  height: 50px;
  width: 65px;
  border: 1px solid white;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const Filters = styled.div`
  width: 25%;
  height: 45%;
  border: 1px solid white;
  padding: 1% 5% 1% 5%;
`;

const MainPage = () => {
  return <Wrapper className="flex"></Wrapper>;
};

export default MainPage;
