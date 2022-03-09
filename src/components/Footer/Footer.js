import React, { useRef } from "react";
import styled from "styled-components";
import { Input } from "@chakra-ui/react";
import { useToast, Button } from "@chakra-ui/react";

const Content = styled.div`
  height: 15vh;
  width: 100%;
  background-color: #805943;
  color: whitesmoke;
  padding: 0 25% 0 25%;
  flex-direction: row;
  @media screen and (max-width: 1500px) and (min-width: 1000px) {
    padding: 0 15% 0 15%;
  }
  @media screen and (max-width: 1000px) {
    height: auto;
    padding: 0;
    flex-direction: column;
  }
`;

const Sitemap = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Newsletter = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 5% 0 5%;

  @media screen and (max-width: 1000px) {
    flex-direction: row;
  }
`;

const Logo = styled.div`
  background-color: #805943;
  width: 100%;
  height: 2vh;
  padding: 0 15% 0 15%;
`;
const Copyright = styled.div`
  background-color: #805943;
  width: 100%;
  color: #f6edfc;
  height: 3vh;
`;
const SitemapElement = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
  div {
    width: 100%;
    height: 50%;
    margin-right: 5px;
    display: flex;
    flex-direction: column;
  }
  h3 {
    color: #f6edfc;
    font-weight: 500;
    font-size: 1rem;
  }
  a {
    font-size: 0.9rem;
  }
  a:hover {
    border-bottom: 1px solid white;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 50%;
    div {
      width: 100%;
      height: 100%;
    }
  }
`;
const Footer = (props) => {
  const toast = useToast();
  const newsletter = useRef(null);

  const handleSignToNewsletter = () => {
    if (newsletter.current == null) {
      toast({
        title: "Błąd!",
        description: "Nie podałeś maila.",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    } else if (newsletter.current.length < 5) {
      toast({
        title: "Błąd!",
        description: "Wprowadzony tekst jest za krótki",
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    } else {
      toast({
        title: "Sukces!",
        description: "Email zostal poprawnie zapisany.",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Content className="flex">
        <Sitemap>
          <SitemapElement>
            <div>
              <h3>Produkty</h3>
              <a>Sklep</a>
              <a>Blog</a>
              <a>Aplikacja</a>
            </div>
            <div>
              <h3>Pomoc</h3>
              <a>O nas</a>
              <a>FAQ</a>
              <a>Regulamin</a>
            </div>
          </SitemapElement>
          <SitemapElement>
            <div>
              <h3>Social Media</h3>
              <a>Facebook</a>
              <a>Instagram</a>
            </div>
            <div>
              <h3>Adres</h3>
              <a>Broders sp.z.o.o</a>
              <a>Szkolna 7</a>
            </div>
          </SitemapElement>
        </Sitemap>
        <Newsletter>
          Zapisz się do naszego newslettera:
          <Input
            ref={newsletter}
            size="md"
            variant="filled"
            placeholder="Filled"
          />
          <Button
            color="black"
            mt="5px"
            onClick={() => handleSignToNewsletter()}
          >
            Zapisz się
          </Button>
        </Newsletter>
      </Content>
      <Copyright className="flex">
        <p>Copyright BROders 2022</p>
      </Copyright>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
