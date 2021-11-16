// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Root />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
