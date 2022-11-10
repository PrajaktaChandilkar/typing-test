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

    const handleKeyDown = (e) => {
        console.log("key pressed", e.key)
        // console.log(wordSpanRef[0].current);

        let allChildrenSpans = wordSpanRef[currentWordIndex].current.childNodes;
        // let allChildrenSpans = wordSpanRef[currentWordIndex].current.querySelector('span')
        console.log(allChildrenSpans)

        if (e.key === allChildrenSpans[currentCharIndex].innerText) {
            console.log('userpressed correct key')
            allChildrenSpans[currentCharIndex].className = 'correct'
        } else {
            console.log("not correct")

            allChildrenSpans[currentCharIndex].className = 'incorrect'
        }
        console.log(setCurrentCharIndex(currentCharIndex + 1))
    }

    const focusInput = () => {
        inputTextRef.current.focus();
    }


    useEffect(() => {
        focusInput()
    }, [])
    return (
        <>
            <div className="type-box" onClick={focusInput}>
                <div className="words">
                    {words.map((word, index) => (
                        <span className="word" key={index} ref={wordSpanRef[index]}>
                            {word.split('').map(character => (
                                <span>{character}</span>
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

