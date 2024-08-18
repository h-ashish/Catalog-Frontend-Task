import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChartProvider } from "./context/chartContext";

const colors = {
  brand: {
    500: "#4B40EE",
  },
};

const theme = extendTheme({ colors });

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ChartProvider>
        <App />
      </ChartProvider>
    </ChakraProvider>
  </React.StrictMode>
);
