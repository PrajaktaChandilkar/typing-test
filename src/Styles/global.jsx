import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before{
        box-sizing:border-box;
    }
    body{
        background-color: red;
        padding:0;
        margin:0;
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
        background:pink;
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
`