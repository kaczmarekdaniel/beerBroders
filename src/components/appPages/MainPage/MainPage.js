import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { collection, query, where, getDocs } from "firebase/firestore";
import { doc } from "firebase/firestore";

import { db } from "../../../firebase";

import ContentSection from "components/organisms/ContentSection/ContentSection";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: white;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    padding: 5% 20% 2% 20%;
  }
`;

const FilterBar = styled.div`
  width: 50%;
  margin: 5px;
  height: 10%;
  border: 1px solid white;
  padding: 20px;
  flex-direction: row;
  position: absolute;
  top: 10%;
`;

const FilterBy = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 5px;
`;

const FilterButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: transparent;
  border: 1px solid white;
  margin: 5px;
  color: white;

  &:hover {
    background-color: grey;
  }

  &.active {
    background-color: purple;
  }
`;

const SearchBar = styled.input`
  width: 50%;
  margin-left: 5px;
  height: 50px;
  color: white;
  padding: 0 5% 0 5%;
  font-size: 1rem;
  border: 1px solid white;
  background-color: transparent;
`;

const MainPage = () => {
  const [items, setItems] = useState([]);

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  useEffect(async () => {
    const data = collection(db, "beers");
    const q = query(data);
    const querySnapshot = await getDocs(q);
    const posts = querySnapshot.docs.map(collectIdsAndDocs);
    setItems(posts);
  }, []);

  return (
    <Wrapper className="flex">
      <FilterBar className="flex">
        <FilterBy className="flex">
          <FilterButton className="active">Od najnowyszch</FilterButton>
          <FilterButton>Od najstarszych</FilterButton>
          <FilterButton>Najlepsza ocena</FilterButton>
          <FilterButton>Najgorsza ocena</FilterButton>
        </FilterBy>
        <SearchBar placeholder="Perła..."></SearchBar>
      </FilterBar>
      <ContentSection items={items} />
    </Wrapper>
  );
};

export default MainPage;
