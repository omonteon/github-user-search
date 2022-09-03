import React from "react";
import { ReactComponent as SunIcon } from "../assets/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../assets/icon-moon.svg";

function ThemeSwitch({ theme, toggleTheme }) {
  return (
    <button className="theme-switch" onClick={toggleTheme}>
      <p>{theme === "light" ? "dark" : "light"}</p>

      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default ThemeSwitch;
