import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');

  html {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  font-family: "Roboto", sans-serif;

  }
  
  body {
    margin: 0;
    background-color: ${({ theme }) =>
      theme.colors.backgroundColor};    padding: 0;
  }
  
  

  .flex{
    display: flex;
  justify-content: center;
  align-items: center;
  }
`;
