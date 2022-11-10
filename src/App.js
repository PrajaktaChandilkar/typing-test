import styled from "styled-components";
import TypingBox from "./components/TypingBox";
import { GlobalStyles } from "./Styles/global"


var randomWords = require('random-words')

function App() {
  const words = randomWords(100)
  return (
    <div className="canvas">
      <GlobalStyles />
      <h1 style={{"text-align":"center"}}>Typingtest</h1>
      <TypingBox  words = {words}/>
      <h1 style={{"textAlign":"center"}}>Footer</h1>
    </div>
  );
}

export default App;
