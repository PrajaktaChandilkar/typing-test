import React, { createElement, createRef, useEffect, useRef, useState } from "react";
import TimeMenu from "./TimeMenu";
const TypingBox = ({ words }) => {

    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [countDown, setCountDown] = useState(15)
    const [testStart, setTestStart] = useState(false);
    const [testOver, setTestOver] = useState(false);

    const inputTextRef = useRef(null);

    // console.log(inputTextRef)

    //create ref for each character
    // const wordSpanRef = Array(words.length().fill(0).map((i)=>(createRef(null)))
    const wordSpanRef = Array(words.length).fill(0).map(i => createRef(null))
    // console.log(wordSpanRef)
    const focusInput = () => {
        inputTextRef.current.focus();
    }

    //timer
    const startTimer = () =>{
        const intervalId = setInterval(timer, 1000);

        //callback function
        function timer(){
            setCountDown((preCountDown)=>{
                if(preCountDown === 1){
                    clearInterval(intervalId);
                    setCountDown(0);
                    setTestOver(true)
                }else
                return preCountDown-1;
            });
        }
    }
    useEffect(() => {
        focusInput()
        wordSpanRef[0].current.childNodes[0].className = "char left-blinking-cursor";
        // wordSpanRef[currentCharIndex+1];
    }, [])
    const handleKeyDown = (e) => {
        // console.log("key pressed", e.key)
        // console.log(wordSpanRef[0].current);
        if(!testStart){
            startTimer();
            setTestStart(true);
        }

        let allChildrenSpans = wordSpanRef[currentWordIndex].current.childNodes;
        // let allChildrenSpans = wordSpanRef[currentWordIndex].current.querySelector('span')
        // console.log(allChildrenSpans)

        //logic for space
        if (e.keyCode === 32) {

            //remove cursor after giving spaces
            if (allChildrenSpans.length <= currentCharIndex) {
                allChildrenSpans[currentCharIndex - 1].classList.remove('right-blinking-cursor')//('right-blinking-cursor');
            } else {
                allChildrenSpans[currentCharIndex].classList.remove('left-blinking-cursor');
                // allChildrenSpans[currentCharIndex].className=allChildrenSpans[currentCharIndex].className.replace('left-blinking-cursor','')//('right-blinking-cursor');

            }

            //add cursor before the word
            wordSpanRef[currentWordIndex + 1].current.childNodes[0].classList.add('left-blinking-cursor');

            setCurrentWordIndex(currentWordIndex + 1);
            setCurrentCharIndex(0);

            return;
        }

        //logic for backspace 

        if (e.keyCode === 8) {
            console.log('back key pressed');

            if (currentCharIndex !== 0) {
                // console.log('charindex', currentCharIndex);
                // console.log('wordspam',allChildrenSpans.length )
                if (currentCharIndex===allChildrenSpans.length) {
                    console.log('length',allChildrenSpans.length)
                    //remove extra typed characters
                    if(allChildrenSpans[currentCharIndex-1].className.includes('extra')){
                        allChildrenSpans[currentCharIndex-1].remove();
                        // allChildrenSpans[currentCharIndex-1].className = allChildrenSpans[currentCharIndex-1].className.replace('incorrect right-blinking-cursor extra', ' ');
                        allChildrenSpans[currentCharIndex-2].className +=' right-blinking-cursor';
                    }else{
                        allChildrenSpans[currentCharIndex - 1].className = 'left-blinking-cursor'

                    }
                    setCurrentCharIndex(currentCharIndex - 1);
                    return;
                }
                console.log('left cur')
                allChildrenSpans[currentCharIndex].className = '';
                allChildrenSpans[currentCharIndex - 1].className = 'char left-blinking-cursor';
                setCurrentCharIndex(currentCharIndex - 1);
            }
            return
        }
        //lgic for extra character need to add
        if(currentCharIndex===allChildrenSpans.length){
            let newSpan = document.createElement('span');
            newSpan.innerHTML=e.key;
            newSpan.className='incorrect right-blinking-cursor extra';

             wordSpanRef[currentWordIndex].current.append(newSpan);
             setCurrentCharIndex(currentCharIndex+1);
             allChildrenSpans[currentCharIndex-1].className=allChildrenSpans[currentCharIndex-1].className.replace('right-blinking-cursor','');
            //  allChildrenSpans[currentCharIndex-1].className='incorrect';
             return;
        }

        //key logic for correct and incorrect character
        if (e.key === allChildrenSpans[currentCharIndex].innerText) {
            // console.log('user pressed correct key')
            allChildrenSpans[currentCharIndex].className = 'correct'
        } else {
            // console.log("not correct")
            allChildrenSpans[currentCharIndex].className = 'incorrect'
        }

        //move the cursor
        if (currentCharIndex + 1 === allChildrenSpans.length) {
            allChildrenSpans[currentCharIndex].className += " right-blinking-cursor"
        } else {
            allChildrenSpans[currentCharIndex + 1].className = "char left-blinking-cursor"
        }

        // allChildrenSpans[currentCharIndex+1].className ="char left-blinking-cursor"
        setCurrentCharIndex(currentCharIndex + 1)
    }


    return (
        <>
            <TimeMenu countDown ={countDown} />
           {testOver ? (<h1>Game Over </h1>):(
            <div className="type-box" onClick={focusInput}>
            <div className="words">
                {words.map((word, index) => (
                    <span className="word" key={index} ref={wordSpanRef[index]}>
                        {word.split('').map((character, idx) => (
                            <span key={idx} >{character}</span>
                        ))}
                    </span>
                ))}
            </div>
        </div>)
           }
            <input type="text" ref={inputTextRef} className="input-filed"
                onKeyDown={(e) => handleKeyDown(e)}
            />
        </>
    )
}

export default TypingBox

