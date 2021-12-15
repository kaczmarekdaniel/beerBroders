import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { doc } from "firebase/firestore";

import { db } from "../../../firebase";
import { Select } from "@chakra-ui/react";

import ContentSection from "components/organisms/ContentSection/ContentSection";

const Wrapper = styled.div`
  width: auto;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: white;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    padding: 5% 0 2% 0;
  }
`;

const FilterBar = styled.div`
  width: 60%;
  margin: 5px;
  height: 10%;
  padding: 20px;
  flex-direction: row;
  position: absolute;
  top: 10%;
`;

const FilterBy = styled.div`
  width: 65%;
  height: 100%;
  margin-right: 5px;
`;

const FilterButton = styled.button`
  width: auto;
  height: auto;
  background-color: transparent;
  border-bottom: 1px solid white;
  margin: 5px 5px 0 5px;
  font-size: 13px;
  color: white;

  &:hover {
    border-bottom: 1px solid blue;
  }
`;

const SearchBar = styled.div`
  width: 35%;
  margin-left: 5px;
  height: 50px;
  color: white;
  font-size: 1rem;
  border: 1px solid white;
  display: flex;
  flex-direction: row;
`;

const SearchBarInput = styled.input`
  background-color: transparent;

  height: 100%;
  width: 75%;
  padding: 0 5% 0 5%;
`;

const SearchBarButton = styled.button`
  height: 100%;
  width: 25%;
  border-left: 1px solid white;
`;

const MainPage = () => {
  const [items, setItems] = useState([]);
  const [dbQuery, setDBQuery] = useState(where("brand", "!=", true));

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  useEffect(async () => {
    const data = collection(db, "beers");
    const q = query(data, dbQuery);
    const querySnapshot = await getDocs(q);
    const posts = querySnapshot.docs.map(collectIdsAndDocs);
    setItems(posts);
  }, [dbQuery]);

  return (
    <Wrapper className="flex">
      <FilterBar className="flex">
        <FilterBy className="flex">
          <FilterButton
            onClick={() => {
              setDBQuery(where("brand", "!=", true));
            }}
          >
            Od najnowyszch
          </FilterButton>
          <FilterButton>Od najstarszych</FilterButton>
          <FilterButton
            onClick={() => {
              setDBQuery(orderBy("reviews", "desc"));
            }}
          >
            Najlepsza ocena
          </FilterButton>
          <FilterButton
            onClick={() => {
              setDBQuery(orderBy("reviews", "asc"));
            }}
          >
            Najgorsza ocena
          </FilterButton>
        </FilterBy>
        <SearchBar>
          <SearchBarInput placeholder="Perła..."></SearchBarInput>
          <SearchBarButton>Szukaj</SearchBarButton>
        </SearchBar>
      </FilterBar>
      <ContentSection items={items} />
    </Wrapper>
  );
};

export default MainPage;
