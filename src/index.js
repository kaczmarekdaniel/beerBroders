// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import { ChakraProvider } from "@chakra-ui/react";
import AppProvider from "providers/AppProvider.js";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <AppProvider>
        <Root />
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
