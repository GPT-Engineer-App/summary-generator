import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  background: {
    light: "#ffffff",
    dark: "#f0f0f0",
  },
  text: {
    primary: "#000000",
    secondary: "#4a4a4a",
  },
  accent: {
    500: "#ff4081",
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: "background.light",
        color: "text.primary",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
