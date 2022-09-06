import React from "react";
import { ReactComponent as SunIcon } from "../assets/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../assets/icon-moon.svg";

// function ThemeSwitch({ theme, toggleTheme }) {
//   return (
//     <button className="theme-switch" onClick={toggleTheme}>
//       <p>{theme === "light" ? "dark" : "light"}</p>

//       {theme === "light" ? <MoonIcon /> : <SunIcon />}
//     </button>
//   );
// }

function ThemeSwitch_({ theme, toggleTheme }) {
  return (
    <fieldset className="theme-switch">
      <legend className="sr-only">Color mode selections</legend>
      <input
        className="colormodes__input"
        type="radio"
        id="lightmode"
        name="colormode"
        aria-label="lightmode"
        value="lightmode"
        defaultChecked
        onChange={toggleTheme}
      />
      <label htmlFor="lightmode" className="colormodes__toggler">
        LIGHT <SunIcon />
      </label>
      <input
        className="colormodes__input"
        type="radio"
        id="darkmode"
        name="colormode"
        aria-label="darkmode"
        onChange={toggleTheme}
      />
      <label htmlFor="darkmode" className="colormodes__toggler">
        DARK <MoonIcon />
      </label>
      <div className="colormodes__focus-trick"></div>
    </fieldset>
  );
}

// export default ThemeSwitch;
export default ThemeSwitch_;
