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

// function ThemeSwitch({ theme, toggleTheme }) {
//   return (
//     <div className="theme-switch">
//       <label htmlFor="buttonTheme">
//         {theme === "light" ? "dark" : "light"}
//       </label>
//       <button id="buttonTheme" onClick={toggleTheme}>
//         {theme === "light" ? <SvgIcon name="moon" /> : <SvgIcon name="sun" />}
//       </button>
//     </div>
//   );
// }

export default ThemeSwitch;
