import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { StateContext } from "./store/context";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateContext>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StateContext>
);
