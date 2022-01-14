import React from "react";
import styled from "styled-components";
import BeerElement from "components/molecules/BeerElement/BeerElement";
import { Swiper, SwiperSlide } from "swiper/react";
import Counter from "components/molecules/Counter/Counter";
import logo from "../../../assets/images/broders2.png";
import faq from "../../../assets/images/faqimage.png";

import { useInView } from "react-intersection-observer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Wrapper = styled.div`
  width: 100%;
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
  margin: 0;
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
    height: auto;
    min-height: 100vh;
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
  }
`;

const WelcomeContent = styled.div`
  width: 70%;
  height: 50%;
  margin: 0 5% 0 0;
  padding: 0 5% 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #483954;

  h1 {
    font-weight: 300;
    font-size: 4rem;
    line-height: 64px;
    u {
      text-decoration-color: ${({ theme }) => theme.colors.darkOrange};
      text-decoration-thickness: 2.5px;
    }
  }
  p {
    font-weight: 300;
    text-align: justify;
    font-size: 1rem;
  }
  button {
    width: 200px;
    height: 50px;
    border: 1px solid black;
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

const AboutElement = styled.div.attrs({ className: "flex" })`
  width: 30%;
  height: 25vh;

  min-width: 300px;
  position: relative;
  z-index: 0;
  background-color: ${({ theme }) => theme.colors.paleOrange};
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 25vh;
    margin: 30px 0 30px 0;
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

const FAQsection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 65vh;
  width: 100%;

  img {
    max-height: 100%;
  }

  container {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`;

const FAQquestions = styled.div`
  height: 100%;
  width: 50%;
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
  const [ref, inView, entry] = useInView({
    threshold: 1.0,
    triggerOnce: true,
  });
  const item = {
    id: "AhADDLjQ4ql5gGYw8tce",
    brand: "Funky Fluid",
    alcohol: 7.6,
    name: "Free Gelato",
    reviews: [5, 4],
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/beerbroders-d46c2.appspot.com/o/funky-fluid-gelato-berries.png?alt=media&token=152a9c87-49e9-46bb-a43e-24788a8ac2fb",
  };

  return (
    <Wrapper className="section">
      <WelcomeSection img={logo}>
        <WelcomeContainer>
          <WelcomeContent>
            <h1>
              <u>Pij</u>, <u>oceniaj</u> i <u>ucz się</u> o piwie
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
              felis accumsan, semper metus blandit, porttitor risus. Nullam
              pulvinar semper vestibulum. Mauris eget ligula leo. Ut id sapien
              felis. Vestibulum semper nisi vitae urna ornare, egestas porta
              ipsum aliquet.
            </p>
            <button>Dowiedz się więcej</button>
          </WelcomeContent>
          <p></p>
        </WelcomeContainer>
      </WelcomeSection>
      <NumbersSection>
        <Border color={"#ffbe59"} />
        <div ref={ref}>
          <h1>
            <Counter />
          </h1>{" "}
          uzytkownikow
        </div>

        <div>
          <h1>
            <Counter />
          </h1>{" "}
          piw w bazie
        </div>
        <div>
          <h1>
            <Counter />
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
            <Border />
            Blog
          </AboutElement>
          <AboutElement>
            <Border />
            Aplikacja
          </AboutElement>
          <AboutElement>
            <Border />
            Sklep
          </AboutElement>
        </AboutElementContainer>
      </AboutSection>
      <FAQsection>
        <container className="flex">
          <img src={faq} />
        </container>
        <FAQquestions>
          <h1>Najczęściej zadawane pytania</h1>

          <FAQElement>
            <h2>Jak mogę załozyc konto?</h2>
            <button>+</button>
          </FAQElement>
          <FAQElement>
            <h2>Czy korzystanie z serwisu jest darmowe?</h2>
            <button>+</button>
          </FAQElement>
          <FAQElement>
            <h2>Jak mogę wesprzec dzialanie serwisu?</h2>
            <button>+</button>
          </FAQElement>
          <FAQElement>
            <h2>Jak mogę załozyc konto?</h2>
            <button>+</button>
          </FAQElement>
          <FAQElement>
            <h2>Czy korzystanie z serwisu jest darmowe?</h2>
            <button>+</button>
          </FAQElement>
          <FAQElement>
            <h2>Jak mogę wesprzec dzialanie serwisu?</h2>
            <button>+</button>
          </FAQElement>
          <FAQElement>
            <h2>Jak mogę załozyc konto?</h2>
            <button>+</button>
          </FAQElement>
        </FAQquestions>
      </FAQsection>
      <FeaturedItemsContainer className="section">
        <TopFeaturedItems className="flex">
          <FeaturedTitle>Najlepiej oceniane</FeaturedTitle>
          <BeerElement item={item} />
          <BeerElement item={item} />
          <BeerElement item={item} />
          <BeerElement item={item} />
          <BeerElement item={item} />
        </TopFeaturedItems>
        <BottomFeaturedItems className="flex">
          <FeaturedTitle>Ostatnio wyszukiwane</FeaturedTitle>
          <BeerElement item={item} />
          <BeerElement item={item} />
          <BeerElement item={item} />
          <BeerElement item={item} />
          <BeerElement item={item} />
        </BottomFeaturedItems>
      </FeaturedItemsContainer>
    </Wrapper>
  );
};

export default LandingPage;
