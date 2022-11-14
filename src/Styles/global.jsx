import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before{
        box-sizing:border-box;
    }
    body{
        background-color: black;
        color: white;
        padding:0;
        margin:0;
        font-family: Arial, Helvetica, sans-serif;
    }

    .heading{
        font-size: 10rem;
    }

    .canvas{
        display: grid;
        grid-auto-flow:row;
        grid-template-row: auto 1fr auto;
        min-height:100vh;
        gap: 0.5rem;
        align-items: center;
        // width: 100vh;
    }
    .type-box{
        display:block;
        // background:pink;
        border: 1px solid black;
        radius: 20px;
        max-width: 1000px;
        height: 155px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        // display: flex;
        // align-items: center;
        // justify-content:center;
        overflow:hidden;
    }

    .words{
        font-size: 30px;
        display:flex;
        flex-wrap: wrap;
        align-content:center;
        
    }
    .word{
        margin: 5px;
        padding : 5px;
    }

    .input-filed{
        // visibility:hidden;
        opacity:0;
    }

    .correct{
        color: green;
    }
    .incorrect{
        color:red;
    }
    .left-blinking-cursor{
        border-left: 1px solid;
        animation: blinking 2s infinite;
        animation-timing-funcation: ease;
        @keyframes blinking{
            0% {border-left-color:white;}
            25% {border-left-color:black;}
            50% {border-left-color:white;}
            75% {border-left-color:black;}
            100% {border-left-color:white;}
        }
    }

    .right-blinking-cursor{
        border-right: 1px solid;
        animation: blinkingRight 2s infinite;
        animation-timing-funcation: ease;
        @keyframes blinkingRight{
            0% {border-right-color:white;}
            25% {border-right-color:black;}
            50% {border-right-color:white;}
            75% {border-right-color:black;}
            100% {border-right-color:white;}
        }
    }
`