import React, { createRef, useEffect, useMemo, useRef, useState } from "react";
import { useTestMode } from "../context/TestModeContext";
import Stats from "./Stats";
import TimeMenu from "./TimeMenu";
var randomWords = require("random-words");

const TypingBox = () => {
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [countDown, setCountDown] = useState(15);
  const [testStart, setTestStart] = useState(false);
  const [testOver, setTestOver] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [correctChars, setCorrectChars] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [extraChars, setExtraChars] = useState(0);
  const [missedChars, setMissedChars] = useState(0);
  const [graphData, setGraphData] = useState([]);
  const [wordsArray, setWordsArray] = useState(() => {
    return randomWords(100);
  });

  const { testTime } = useTestMode();
  const inputTextRef = useRef(null);

  const words = useMemo(() => {
    return wordsArray;
  }, [wordsArray]);

  const wordSpanRef = useMemo(() => {
    return Array(words.length)
      .fill(0)
      .map((i) => createRef(null));
  }, [words]);

  const resetWordsSpanRefClassName = () => {
    wordSpanRef.map((i) => {
      Array.from(i.current.childNodes).map((j) => {
        j.className = "";
      });
    });
    wordSpanRef[0].current.childNodes.className = "left-blinking-cursor";
  };

  // console.log(inputTextRef)

  //create ref for each character
  // const wordSpanRef = Array(words.length().fill(0).map((i)=>(createRef(null)))
  // const wordSpanRef = Array(words.length).fill(0).map(i => createRef(null))
  // console.log(wordSpanRef)

  //timer
  const startTimer = () => {
    const intervalId = setInterval(timer, 1000);
    setIntervalId(intervalId);
    //callback function
    function timer() {
      setCountDown((preCountDown) => {
        setCorrectChars((correctChars) => {
          setGraphData((data) => {
            return [
              ...data,
              [
                testTime - preCountDown,
                Math.round(
                  correctChars / 5 / ((testTime - preCountDown + 1) / 60)
                ),
              ],
            ];
          });
          return correctChars;
        });
        if (preCountDown === 1) {
          clearInterval(intervalId);
          setCountDown(0);
          setTestOver(true);
        } else {
          return preCountDown - 1;
        }
      });
    }
  };

  const handleKeyDown = (e) => {
    // console.log("key pressed", e.key)
    // console.log(wordSpanRef[0].current);
    if (!testStart) {
      startTimer();
      setTestStart(true);
    }

    let allChildrenSpans = wordSpanRef[currentWordIndex].current.childNodes;
    // let allChildrenSpans = wordSpanRef[currentWordIndex].current.querySelector('span')
    // console.log(allChildrenSpans)

    //logic for space
    if (e.keyCode === 32) {
      //calculate accuracy
      const correctChar = wordSpanRef[currentWordIndex].current.querySelectorAll(".correct");
      const incorrectChar = wordSpanRef[currentWordIndex].current.querySelectorAll(".incorrect");
      setMissedChars(missedChars+(allChildrenSpans.length - (incorrectChar.length+correctChar.length)));

      if (correctChar.length === allChildrenSpans.length) {
        setCorrectWords(correctWords + 1);
      }
      //remove cursor after giving spaces
      if (allChildrenSpans.length <= currentCharIndex) {
        allChildrenSpans[currentCharIndex - 1].classList.remove(
          "right-blinking-cursor"
        ); //('right-blinking-cursor');
      } else {
        allChildrenSpans[currentCharIndex].classList.remove(
          "left-blinking-cursor"
        );
        // allChildrenSpans[currentCharIndex].className=allChildrenSpans[currentCharIndex].className.replace('left-blinking-cursor','')//('right-blinking-cursor');
      }

      //add cursor before the word
      wordSpanRef[currentWordIndex + 1].current.childNodes[0].classList.add(
        "left-blinking-cursor"
      );

      setCurrentWordIndex(currentWordIndex + 1);
      setCurrentCharIndex(0);

      return;
    }

    //logic for backspace

    if (e.keyCode === 8) {
      console.log("back key pressed");

      if (currentCharIndex !== 0) {
        // console.log('charindex', currentCharIndex);
        // console.log('wordspam',allChildrenSpans.length )
        if (currentCharIndex === allChildrenSpans.length) {
          console.log("length", allChildrenSpans.length);
          //remove extra typed characters
          if (
            allChildrenSpans[currentCharIndex - 1].className.includes("extra")
          ) {
            allChildrenSpans[currentCharIndex - 1].remove();
            // allChildrenSpans[currentCharIndex-1].className = allChildrenSpans[currentCharIndex-1].className.replace('incorrect right-blinking-cursor extra', ' ');
            allChildrenSpans[currentCharIndex - 2].className +=
              " right-blinking-cursor";
          } else {
            allChildrenSpans[currentCharIndex - 1].className =
              "left-blinking-cursor";
          }
          setCurrentCharIndex(currentCharIndex - 1);
          return;
        }
        console.log("left cur");
        allChildrenSpans[currentCharIndex].className = "";
        allChildrenSpans[currentCharIndex - 1].className =
          "char left-blinking-cursor";
        setCurrentCharIndex(currentCharIndex - 1);
      }
      return;
    }
    //logic for extra character need to add
    if (currentCharIndex === allChildrenSpans.length) {
      let newSpan = document.createElement("span");
      newSpan.innerHTML = e.key;
      newSpan.className = "incorrect right-blinking-cursor extra";

      wordSpanRef[currentWordIndex].current.append(newSpan);
      setCurrentCharIndex(currentCharIndex + 1);
      allChildrenSpans[currentCharIndex - 1].className = allChildrenSpans[currentCharIndex - 1].className.replace("right-blinking-cursor", "");
      setExtraChars(extraChars+1);
      return;
    }

    //key logic for correct and incorrect character
    if (e.key === allChildrenSpans[currentCharIndex].innerText) {
      allChildrenSpans[currentCharIndex].className = "correct";
      setCorrectChars(correctChars + 1);
    } else {
      // console.log("not correct")
      allChildrenSpans[currentCharIndex].className = "incorrect";
      setIncorrectChars(incorrectChars+1);
    }

    //move the cursor
    if (currentCharIndex + 1 === allChildrenSpans.length) {
      allChildrenSpans[currentCharIndex].className += " right-blinking-cursor";
    } else {
      allChildrenSpans[currentCharIndex + 1].className =
        "char left-blinking-cursor";
    }

    // allChildrenSpans[currentCharIndex+1].className ="char left-blinking-cursor"
    setCurrentCharIndex(currentCharIndex + 1);
  };

  //calculate wordper minut
  const calculateWPM = () => {
    return Math.floor(correctChars / 5 / (testTime / 60));
  };

  const calculateAccuracy = () => {
    return Math.floor((correctWords / currentWordIndex) * 100);
  };
  //reset game
  const resetTest = () => {
    setCurrentCharIndex(0);
    setCurrentWordIndex(0);
    setTestStart(false);
    setTestOver(false);
    clearInterval(intervalId);
    setCountDown(testTime);
    let random = randomWords(100);
    setWordsArray(random);
    resetWordsSpanRefClassName();
  };
  const focusInput = () => {
    inputTextRef.current.focus();
  };

  useEffect(() => {
    resetTest();
  }, [testTime]);

  useEffect(() => {
    focusInput();
    wordSpanRef[0].current.childNodes[0].className =
      "char left-blinking-cursor";
    // wordSpanRef[currentCharIndex+1];
  }, []);

  //change the time 30s 60s
  useEffect(() => {
    setCountDown(testTime);
  }, [testTime]);

  return (
    <div>
      {/* <TimeMenu countDown={countDown} /> */}
      {testOver ? (
        <Stats
          wpm={calculateWPM()}
          accuracy={calculateAccuracy()}
          graphData={graphData}
          correctChars={correctChars}
          incorrectChars={incorrectChars}
          missedChars={missedChars}
          extraChars={extraChars}
        />
      ) : (
        <div> 
        <TimeMenu countDown={countDown} /> 
        <div className="type-box" onClick={focusInput}>
          <div className="words">
            {words.map((word, index) => (
              <span className="word" key={index} ref={wordSpanRef[index]}>
                {word.split("").map((character, idx) => (
                  <span key={idx}>{character}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
        </div> 
      )}
      <input
        type="text"
        ref={inputTextRef}
        className="input-filed"
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
};

export default TypingBox;
