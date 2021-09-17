import React from "react";
import sunIcon from "../../assets/icon-sun.svg";
import moonIcon from "../../assets/icon-moon.svg";

function ThemeSwitch({ theme, toggleTheme }) {
  return (
    <div className="theme-switch">
      <label htmlFor="buttonTheme">
        {theme === "light" ? "dark" : "light"}
      </label>
      <button id="buttonTheme" onClick={toggleTheme}>
        {theme === "light" ? (
          <img src={moonIcon} alt="Dark mode icon" />
        ) : (
          <img src={sunIcon} alt="Light mode icon" />
        )}
      </button>
    </div>
  );
}

export default ThemeSwitch;
