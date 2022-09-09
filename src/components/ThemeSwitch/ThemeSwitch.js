import React from "react";
import { ReactComponent as SunIcon } from "../../assets/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";
import styles from "./ThemeSwitch.module.css";

function ThemeSwitch({ theme, toggleTheme }) {
  return (
    <fieldset className={styles["theme-switch"]}>
      <legend className="sr-only">Color mode selections</legend>
      <input
        type="radio"
        id="lightmode"
        name="colormode"
        aria-label="lightmode"
        value="lightmode"
        defaultChecked
        onChange={toggleTheme}
      />
      <label htmlFor="lightmode">
        LIGHT <SunIcon />
      </label>
      <input
        type="radio"
        id="darkmode"
        name="colormode"
        aria-label="darkmode"
        onChange={toggleTheme}
      />
      <label htmlFor="darkmode">
        DARK <MoonIcon />
      </label>
      <div className="colormodes__focus-trick"></div>
    </fieldset>
  );
}

export default ThemeSwitch;
