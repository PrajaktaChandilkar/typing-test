import React from "react";
import TypingBox from "./components/TypingBox";
import { GlobalStyles } from "./Styles/global";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { ThemeMode } from "./context/ThemeContext";
import { auth } from "./firebaseConfig";
import Header from "./components/Header";


function App() {
  const {theme} = ThemeMode();
  console.log('auth',auth)
  return (
    <ThemeProvider theme={theme}>
      <div className="canvas">
        <GlobalStyles />
        <Header />
        <TypingBox />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
