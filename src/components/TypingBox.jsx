import React, { createRef, useEffect, useRef, useState } from "react";
const TypingBox = ({ words }) => {

    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const inputTextRef = useRef(null);
    // console.log(inputTextRef)

    //create ref for each character
    // const wordSpanRef = Array(words.length().fill(0).map((i)=>(createRef(null)))
    const wordSpanRef = Array(words.length).fill(0).map(i => createRef(null))
    // console.log(wordSpanRef)
    const focusInput = () => {
        inputTextRef.current.focus();
    }


    useEffect(() => {
        focusInput()
        wordSpanRef[0].current.childNodes[0].className = "char left-blinking-cursor";
        // wordSpanRef[currentCharIndex+1];
    }, [])
    const handleKeyDown = (e) => {
        console.log("key pressed", e.key)
        // console.log(wordSpanRef[0].current);

        let allChildrenSpans = wordSpanRef[currentWordIndex].current.childNodes;
        // let allChildrenSpans = wordSpanRef[currentWordIndex].current.querySelector('span')
        console.log(allChildrenSpans)

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
                if(currentCharIndex === allChildrenSpans.length){
                    allChildrenSpans[currentCharIndex-1].className='left-blinking-cursor'
                    setCurrentCharIndex(currentCharIndex-1);
                    return;
                }

                allChildrenSpans[currentCharIndex].className = '';
                allChildrenSpans[currentCharIndex - 1].className = 'char left-blinking-cursor';
                setCurrentCharIndex(currentCharIndex - 1);
            }
             return
        }
        //key logic
        if (e.key === allChildrenSpans[currentCharIndex].innerText) {
            console.log('user pressed correct key')
            allChildrenSpans[currentCharIndex].className = 'correct'
        } else {
            console.log("not correct")
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
            </div>
            <input type="text" ref={inputTextRef} className="input-filed"
                onKeyDown={(e) => handleKeyDown(e)}
            />
        </>
    )
}

export default TypingBox

