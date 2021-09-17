import React from "react";
import SvgIcon from "./SvgIcon";

function ThemeSwitch({ theme, toggleTheme }) {
  return (
    <button className="theme-switch" onClick={toggleTheme}>
      <span>{theme === "light" ? "dark" : "light"}</span>

      {theme === "light" ? <SvgIcon name="moon" /> : <SvgIcon name="sun" />}
    </button>
  );
}

export default ThemeSwitch;
