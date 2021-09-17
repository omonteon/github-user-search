import React from "react";
import SunIcon from "../../assets/icon-sun.svg";
import MoonIcon from "../../assets/icon-moon.svg";

function ThemeSwitch({ theme, toggleTheme }) {
  return (
    <button className="theme-switch" onClick={toggleTheme}>
      <span>{theme === "light" ? "dark" : "light"}</span>

      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default ThemeSwitch;
