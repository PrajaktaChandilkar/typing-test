import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before{
        box-sizing:border-box;
    }
    body{
        background-color: ${({theme})=>theme.background};
        color:  ${({theme})=>theme.title};
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
        border:none;
        // width: 100vh;
    }
    .type-box{
        display:block;
        // background:pink;
        // border: 1px solid black;
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
        color: ${({theme})=>theme.typeBoxText};
        
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
        color:  ${({theme})=>theme.title};;
    }
    .incorrect{
        color:red;
    }
    .left-blinking-cursor{
        border-left: 1px solid;
        animation: blinking 2s infinite;
        animation-timing-function: ease;
        @keyframes blinking{
            0% {border-left-color:${({theme})=>theme.title};}
            25% {border-left-color:${({theme})=>theme.background};}
            50% {border-left-color:${({theme})=>theme.title};}
            75% {border-left-color:${({theme})=>theme.background};}
            100% {border-left-color:${({theme})=>theme.title};}
            // 0% {border-left-color:}
            // 25% {border-left-color:black;}
            // 50% {border-left-color:white;}
            // 75% {border-left-color:black;}
            // 100% {border-left-color:white;}
        }
    }

    .right-blinking-cursor{
        border-right: 1px solid;
        animation: blinkingRight 2s infinite;
        animation-timing-function: ease;
        @keyframes blinkingRight{
            0% {border-right-color:${({theme})=>theme.title};}
            25% {border-right-color:${({theme})=>theme.background};}
            50% {border-right-color:${({theme})=>theme.title};}
            75% {border-right-color:${({theme})=>theme.background};}
            100% {border-right-color:${({theme})=>theme.title};}
        }
    }

    .times-menu{
        display: flex;
        max-width: 1000px;
        justify-content: space-between;
        margin-left: auto;
        margin-right: auto;
        font-size: 20px; 
        padding: 1rem;
        color:${({theme})=>theme.typeBoxText};
        
    }

    .choose-time{
        display: flex;
        gap: 10px;
    }

    .set-time:hover{
        cursor:pointer;
        color:${({theme})=>theme.title};
    }

    .stats-box{
        display:flex;
        max-width:1000px;
        height: auto;
        margin-left: auto;
        margin-right: auto;
    }
    .title{
        font-size: 20px;
        color:${({theme})=>theme.typeBoxText};
    }
    .subtitle{
        font-size:30px;
        color:${({theme})=>theme.title};
    }

    .left-stats{
        width:30%;
        padding:30px;

    }
    .right-stats{
        width:70%;
    }
    .footer{
        display: flex;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-between;
        height: 60px;
    }
`