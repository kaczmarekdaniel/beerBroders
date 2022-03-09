import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BeerElement from "components/molecules/BeerElement/BeerElement";
import { collection, query, limit, getDocs, orderBy } from "firebase/firestore";
import { Link } from "react-router-dom";
import Counter from "components/molecules/Counter/Counter";
import logo from "../../assets/images/broders2.webp";
import faq from "../../assets/images/faqimage.webp";
import { db } from "../../firebase";
import { useInView } from "react-intersection-observer";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Wrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  height: auto;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  font-family: "Roboto", sans-serif;
  padding: 0;
  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 3rem;
`;

const WelcomeSection = styled.div`
  height: 100vh;
  max-width: 100vw;
  flex-direction: row;
  position: relative;
  z-index: 0;
  background-color: ${({ theme }) => theme.colors.paleOrange};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right 0 bottom 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  border-bottom: 2px solid black;
  @media screen and (max-width: 1000px) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const WelcomeContainer = styled.div`
  width: 40%;
  height: 65%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    width: 100%;
    backdrop-filter: contrast(5%);
    height: 100%;
    justify-content: flex-end;
  }
`;

const StoreButton = styled.button`
  z-index: 100;
  width: 200px;
  height: 50px;
  min-height: 50px;
  border: 1px solid black;
  font-weight: 300;
  margin: 0 auto;
  margin-top: 15px;
`;

const WelcomeContent = styled.div`
  width: 70%;
  height: 50%;
  margin: 0 5% 0 0;
  padding: 0 5% 0 5%;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #483954;

  @media screen and (max-width: 1000px) {
    width: 90%;
    color: white;
    margin-top: 25vh;
    height: 100%;
  }
  h1 {
    font-weight: 300;
    font-size: 4rem;
    line-height: 64px;
    margin-bottom: 24px;
    u {
      text-decoration-color: ${({ theme }) => theme.colors.darkOrange};
      text-decoration-thickness: 2.5px;
    }
  }
  p {
    font-weight: 300;
    text-align: justify;
    font-size: 1rem;
    margin-bottom: 12px;
  }
  button {
    min-width: 200px;
    min-height: 50px;
    height: 50px;
    border: 1px solid black;
    margin-bottom: 12px;
  }
`;

const NumbersSection = styled.div`
  height: 20vh;
  width: 70%;
  margin-left: 15%;
  position: relative;
  background-color: #2d2d2d;
  margin-top: 5%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  div {
    margin: 0 1vw 0 1vw;
    width: auto;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 300;

    h1 {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 1000px) {
    height: auto;
    flex-direction: column;
  }
`;

const AboutSection = styled.div`
  height: 50vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    height: auto;
  }
`;

const AboutElement = styled.div`
  width: 30%;
  height: 25vh;
  font-weight: 300;
  min-width: 300px;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5%;

  background-color: ${({ theme }) => theme.colors.paleOrange};
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: auto;
    margin: 30px 0 30px 10px;
    padding: 10% 10% 10% 10%;
  }
  h3 {
    text-align: left;
    font-size: 24px;

    font-weight: 500;
  }

  &:after {
    content: "";
    position: absolute;
    border: 1px solid black;
    top: 10px;
    right: 10px;
    width: 100%;
    z-index: 0;
    height: 100%;
  }
`;

const Border = styled.section`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  width: 100%;
  height: 100%;
  border: 2px solid ${(props) => props.color};
`;

const AboutElementContainer = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const AboutTitle = styled.div`
  width: 70%;
  h1 {
    font-size: 2.5rem;
    font-weight: 300;
    margin: 5% 0 17px 0;
  }
`;

const AboutButton = styled(Link)`
  width: 200px;
  height: 50px;
  min-height: 50px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 15px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FAQsection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 65vh;
  width: 100%;
  padding: 0 10% 0 10%;
  img {
    max-height: 100%;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`;

const FAQimage = styled.div`
  height: 100%;
  width: 50%;
`;

const FAQquestions = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  h1 {
    font-size: 3rem;
    font-weight: 300;
  }
`;

const FAQElement = styled.div`
  width: 55%;
  height: 10%;
  border-bottom: 1px solid black;
  justify-content: space-between;
  display: flex;
  align-items: center;
  h2 {
    font-size: 1.8rem;
    font-weight: 300;
  }

  button {
    font-size: 32px;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 20%;
  }
`;

const FeaturedItemsContainer = styled.div`
  height: auto;

  width: 100%;
  padding-bottom: 30px;
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    height: auto;
  }
`;

const TopFeaturedItems = styled.div`
  flex-wrap: wrap;
`;
const BottomFeaturedItems = styled.div`
  flex-wrap: wrap;
  margin: 0;
`;

const FeaturedTitle = styled.h1`
  width: 100%;
  min-width: 300px;
  text-align: left;
  font-size: 2rem;
  font-weight: 300;
  margin: 27px 0 17px 11%;
`;

const LandingPage = () => {
  const [bestReviewedItems, setBestReviewedItems] = useState(null);
  const [newestItems, setNewestItems] = useState(null);

  const collectIdsAndDocs = (doc) => {
    return { id: doc.id, ...doc.data() };
  };

  useEffect(async () => {
    const data = collection(db, "beers");
    const q = query(data, orderBy("reviews", "desc"), limit(5));
    const querySnapshot = await getDocs(q);
    const posts = querySnapshot.docs.map(collectIdsAndDocs);
    setBestReviewedItems(posts);

    const data1 = collection(db, "beers");
    const q1 = query(data1, orderBy("reviews", "asc"), limit(5));
    const querySnapshot1 = await getDocs(q1);
    const posts1 = querySnapshot1.docs.map(collectIdsAndDocs);
    setNewestItems(posts1);
  }, []);

  const [ref, inView, entry] = useInView({
    threshold: 1.0,
    triggerOnce: true,
  });

  return (
    <Wrapper className="section">
      <WelcomeSection img={logo}>
        <WelcomeContainer>
          <WelcomeContent>
            <h1>
              <u>Pij</u>, <u>oceniaj</u> i <u>ucz się</u> o piwie
            </h1>
            <p>
              Korzystając z naszej platformy możesz w prosty sposób oceniać
              próbowane przez siebie napoje! Możesz również dowiedzieć się
              czegoś nowego o Twoim ulubionym napoju z artykułów pisanych przez
              naszych zaprzyjaźnionych, alkoholowych aktywistów!
            </p>
            <button>
              <a href="#numbers">Dowiedz się więcej</a>
            </button>
          </WelcomeContent>
          <p></p>
        </WelcomeContainer>
      </WelcomeSection>
      <NumbersSection id="numbers">
        <Border color={"#ffbe59"} />
        <div ref={ref}>
          <h1>
            <Counter range={10} />
          </h1>{" "}
          uzytkownikow
        </div>

        <div>
          <h1>
            <Counter range={35} />
          </h1>{" "}
          piw w bazie
        </div>
        <div>
          <h1>
            <Counter range={100} />
          </h1>
          % zadowolenia
        </div>
      </NumbersSection>
      <AboutSection>
        <AboutTitle>
          <h1>Czym się zajmujemy?</h1>
        </AboutTitle>
        <AboutElementContainer>
          {" "}
          <AboutElement>
            <h3>Artykuły</h3>
            sporządzane przez sympatyków piwa przybliżą Ci tematy związane z
            Twoim ulubionym napojem.
            <AboutButton to="/start/articles">Zobacz artykuły</AboutButton>
          </AboutElement>
          <AboutElement>
            <h3>Aplikacja</h3>
            pozwoli Ci na ocenę piwa, które jest w bazie danych, jak i również
            dodanie własnego.
            <AboutButton to={"/start/app"}>Przejdź do aplikacji</AboutButton>
          </AboutElement>
          <AboutElement>
            <h3>Sklep</h3>
            zakupy w nim wesprą naszą platformę oraz pozwolą Ci cieszyć się
            nowym akcesorium.
            <StoreButton>
              <a href="https://broders-shop-2.myshopify.com/?fbclid=IwAR1oxCBBwDhjfsbdOXEn2MlKaJB5s8ranw0SeWs9kvYvKO5kV0UEmZdsYHk">
                Otworz sklep
              </a>
            </StoreButton>
          </AboutElement>
        </AboutElementContainer>
      </AboutSection>
      <FAQsection>
        <FAQimage className="flex">
          <img src={faq} />
        </FAQimage>

        <FAQquestions>
          <h1>Najczęściej zadawane pytania</h1>

          <Accordion w="85%">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Jak założyć konto?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={1}>
                Założenie konta jest banalnie proste! Wystarczy kliknąć “zaloguj
                się” oraz wybrać najwygodniejszą dla siebie opcję założenia
                konta. Sugerowane jest połączenie się kontem “Google”.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Jak dodać nowe piwo?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={2}>
                Dodanie piwa nie powinno stanowić dla nikogo problemu! Kliknij
                “dodaj nowe piwo”, wypełnij formularz i poczekaj, po
                zatwierdzeniu propozycji przez moderatora nasza baza
                zaktualizuje się o właśnie dodany napój.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Jak wesprzeć działanie serwisu?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={3}>
                Wsparcie naszego serwisu możesz zapewnić w kilka sposobów.
                Zachęcamy do udostępniania naszej strony znajomym. Możesz
                również dokonać zakupu w naszym sklepie! Jeżeli chcesz aktywnie
                uczestniczyć w życiu serwisu - zachęcamy do dołączenia do
                zespołu moderatorów.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Jak dołączyć do zespołu moderatorów?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Aby móc zostać moderatorem wcale nie musisz być niesamowicie
                doświadczony! Wystarczy, że będziesz miał trochę wolnego czasu,
                chęci i napiszesz do nas maila. Czekamy!
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </FAQquestions>
      </FAQsection>
      <FeaturedItemsContainer className="section">
        <TopFeaturedItems className="flex">
          <FeaturedTitle>Najlepiej oceniane</FeaturedTitle>
          {bestReviewedItems == null ? (
            <></>
          ) : (
            bestReviewedItems.map((item) => (
              <>
                {" "}
                <BeerElement item={item} key={item.id}></BeerElement>{" "}
              </>
            ))
          )}
        </TopFeaturedItems>
        <BottomFeaturedItems className="flex">
          <FeaturedTitle>Ostatnio wyszukiwane</FeaturedTitle>
          {newestItems == null ? (
            <></>
          ) : (
            newestItems.map((item) => (
              <>
                {" "}
                <BeerElement item={item} key={item.id}></BeerElement>{" "}
              </>
            ))
          )}
        </BottomFeaturedItems>
      </FeaturedItemsContainer>
    </Wrapper>
  );
};

export default LandingPage;
