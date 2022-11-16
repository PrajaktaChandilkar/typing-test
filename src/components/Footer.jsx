import React from "react";
import Select from 'react-select';
import { ThemeMode } from "../context/ThemeContext";
import { themeOptions } from "../Styles/theme";


const Footer = () =>{
    const {setTheme} = ThemeMode();
    const handleThemeChange = (e) =>{
        console.log(e.value);
        setTheme(e.value);
    }
    return(
        <div className="footer">
            <div className="footer-links">links</div>
            <div className="theme-options">
                 <Select 
                    options={themeOptions}
                    onChange = {handleThemeChange}
                 />
            </div>
        </div>
    )
}

export default Footer