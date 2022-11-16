import React from "react";
import TypingBox from "./components/TypingBox";
import { GlobalStyles } from "./Styles/global";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { ThemeMode } from "./context/ThemeContext";

function App() {
  const {theme} = ThemeMode();
  return (
    <ThemeProvider theme={theme}>
      <div className="canvas">
        <GlobalStyles />
        <h1 style={{ textAlign: "center" }}>Typing Test</h1>
        <TypingBox />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
