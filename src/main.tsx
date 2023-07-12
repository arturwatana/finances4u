import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    bg: "#F8FFF2",
    primaryGreen: "#9CFB7A",
  },
  breakpoints: {
    base: "360px",
    sm: "768px",
    md: "869px",
    lg: "1080px",
    xl: "1640px",
    "2x1": "2070px",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
