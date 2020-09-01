import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "./styles.scss";
import { Main } from "./components/MainComponent";
export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <CSSReset />
        <Main />
        {/* <div className="el" /> */}
      </ThemeProvider>
    </div>
  );
}
