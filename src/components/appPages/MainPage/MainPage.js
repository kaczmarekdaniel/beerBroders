import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { Checkbox, CheckboxGroup, VStack, Button } from "@chakra-ui/react";
import { db } from "../../../firebase";
import { Select, Input } from "@chakra-ui/react";

import ContentSection from "components/appPages/ContentSection/ContentSection";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 15vh 5% 5% 5%;
  color: black;
  flex-direction: column;
`;

const Content = styled.div`
  width: 75%;
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
`;
const Filters = styled.div`
  width: 15%;
  min-height: 100%;
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  padding: 2% 5% 0 5%;
  background-color: white;
`;

const ContentAndSort = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  flex-direction: column;
  margin: 0 30px 30px 30px;
`;

const Sort = styled.div`
  height: 65px;
  width: 100%;
  margin: 0 30px 30px 30px;
  display: flex;
  justify-content: space-around;
  align-items: space;
`;

const SearchInputWrapper = styled.div`
  height: 100%;
  width: 45%;
  background-color: white;
  border-radius: 30px;
`;
const SearchButton = styled.button`
  width: 30%;
  background-color: #d9a330;
  color: white;
  height: 70%;
  border-radius: 30px;
`;

const SearchInput = styled.input`
  width: 60%;
  height: 70%;
  padding: 0 5% 0 5%;
`;
const SearchDropdown = styled.div`
  height: 100%;
  width: 45%;
  background-color: white;
  border-radius: 30px;
  text-align: center;
  padding: 0 10% 0 10%;
`;

const MainPage = () => {
  const [items, setItems] = useState(null);
  const [dbQuery, setDBQuery] = useState(where("brand", "!=", true, "asc"));
  const [currentOption, setCurrentOption] = useState();
  const [showFilters, setShowFilters] = useState(true);
  const [activeCheckboxes, setActiveCheckboxes] = useState([]);
  const selectRef = useRef(null);

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

  useEffect(() => {
    switch (currentOption) {
      case "option1":
        setDBQuery(where("brand", "!=", true, "desc"));
        break;
      case "option2":
        setDBQuery(orderBy("reviews", "desc"));
        break;
      case "option3":
        setDBQuery(orderBy("reviews", "asc"));
        break;
    }
  }, [currentOption]);

  useEffect(() => {
    console.log(activeCheckboxes);
  }, [activeCheckboxes]);

  const handleRemoveItem = (e) => {
    const name = e;
    setActiveCheckboxes(activeCheckboxes.filter((item) => item !== name));
  };

  const handleAddItem = (e) => {
    setActiveCheckboxes([...activeCheckboxes, event.target.value]);
  };

  return (
    <Wrapper className="flex">
      <Content>
        {showFilters ? (
          <Filters>
            <h1>Filtruj wyniki</h1>

            <CheckboxGroup colorScheme="yellow">
              <VStack>
                <Checkbox
                  value="Lager"
                  color="black"
                  onChange={() =>
                    activeCheckboxes.includes(event.target.value)
                      ? handleRemoveItem(event.target.value)
                      : handleAddItem(event.target.value)
                  }
                >
                  Lager
                </Checkbox>
                <Checkbox
                  value="Porter"
                  color="black"
                  onChange={() =>
                    activeCheckboxes.includes(event.target.value)
                      ? handleRemoveItem(event.target.value)
                      : handleAddItem(event.target.value)
                  }
                >
                  Porter
                </Checkbox>
                <Checkbox
                  value="Lambic"
                  color="black"
                  onChange={() =>
                    activeCheckboxes.includes(event.target.value)
                      ? handleRemoveItem(event.target.value)
                      : handleAddItem(event.target.value)
                  }
                >
                  Lambic
                </Checkbox>
                <Checkbox
                  value="Pilsner"
                  color="black"
                  onChange={() =>
                    activeCheckboxes.includes(event.target.value)
                      ? handleRemoveItem(event.target.value)
                      : handleAddItem(event.target.value)
                  }
                >
                  Pilsner
                </Checkbox>
                <Checkbox
                  value="IPA"
                  color="black"
                  onChange={() =>
                    activeCheckboxes.includes(event.target.value)
                      ? handleRemoveItem(event.target.value)
                      : handleAddItem(event.target.value)
                  }
                >
                  IPA
                </Checkbox>
                <Checkbox
                  value="American Pale Ale"
                  color="black"
                  onChange={() =>
                    activeCheckboxes.includes(event.target.value)
                      ? handleRemoveItem(event.target.value)
                      : handleAddItem(event.target.value)
                  }
                >
                  APA{" "}
                </Checkbox>
                <Button
                  onClick={() => {
                    setDBQuery(where("style", "in", activeCheckboxes));
                  }}
                >
                  Zastosuj filtry
                </Button>
              </VStack>
            </CheckboxGroup>
          </Filters>
        ) : (
          <button
            onClick={() => {
              setShowFilters(true);
            }}
          >
            show filters
          </button>
        )}
        <ContentAndSort>
          <Sort>
            <SearchInputWrapper className="flex">
              <SearchInput placeholder="Perła export" />
              <SearchButton>Szukaj</SearchButton>
            </SearchInputWrapper>
            <SearchDropdown className="flex">
              {" "}
              <Select
                variant="unstyled"
                m="5px"
                placeholder="Od najnowszych"
                onChange={() => {
                  setCurrentOption(selectRef.current.value);
                }}
                ref={selectRef}
              >
                <option value="option1">Od najstarszych</option>
                <option value="option2">Najlepsza ocena</option>
                <option value="option3">Najgorsza ocena</option>
              </Select>
            </SearchDropdown>
          </Sort>
          <ContentSection items={items} />
        </ContentAndSort>
      </Content>
    </Wrapper>
  );
};

export default MainPage;
