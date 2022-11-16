import React from "react";
import {  createContext, useContext, useState } from "react";
import { themeOptions } from "../Styles/theme";

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) =>{
    const defaultTheme = themeOptions[0].value;
    const [theme, setTheme] = useState(defaultTheme);

    const values ={
        theme,
        setTheme
    }

    return(<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>)
} 

export const ThemeMode = () =>  useContext(ThemeContext);