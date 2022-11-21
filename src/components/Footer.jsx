import React from "react";
import Select, { defaultTheme } from "react-select";
import { ThemeMode } from "../context/ThemeContext";
import { themeOptions } from "../Styles/theme";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const { setTheme, defaultTheme } = ThemeMode();
  const handleThemeChange = (e) => {
    console.log(e.value);
    setTheme(e.value);
    localStorage.setItem("theme", JSON.stringify(e.value));
  };
  const handleChangeLink = () => {
    console.log("linked");
  };
  return (
    <div className="footer">
      <div className="footer-links">
        <a
          href="http://linkedin.com/in/prajakta-chandilkar-1a1b68144"className="link"> {" "}<LinkedInIcon /></a>
        <a href="https://github.com/PrajaktaChandilkar/typing-test" className="link">{" "}<GitHubIcon />
        </a><InstagramIcon />
      </div>
      <div className="theme-options">
        <Select
          options={themeOptions}
          onChange={handleThemeChange}
          defaultValue={{ value: defaultTheme, label: defaultTheme.label }}
        />
      </div>
    </div>
  );
};

export default Footer;
