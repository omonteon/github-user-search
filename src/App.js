import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ThemeSwitch from "./components/ThemeSwitch";
import "./App.css";

// In this project I'm learning/using for the first time:
// ...

// Resources that helped me with the project
// ...

const THEME_BG_COLOR = { light: "#fefefe", dark: "#141d2f" };

function App() {
  const defaultTheme = getDefaultTheme();
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    localStorage.setItem("selected-theme", theme);
    const root = window.document.documentElement;
    root.style.setProperty("--background-color", THEME_BG_COLOR[theme]);
  }, [theme]);

  function getDefaultTheme() {
    const persistedThemePreference = localStorage.getItem("selected-theme");
    const hasPersistedPreference = typeof persistedThemePreference === "string";

    if (hasPersistedPreference) {
      return persistedThemePreference;
    }
    try {
      // If they haven't been explicit, let's check the media query
      const preferedColorScheme = window.matchMedia(
        "(prefers-color-scheme: light)"
      );
      const hasMediaQueryPreference =
        typeof preferedColorScheme.matches === "boolean";

      if (hasMediaQueryPreference) {
        return preferedColorScheme.matches ? "light" : "dark";
      }
    } catch (error) {
      throw new Error("prefers-color-scheme is not supported by the browser");
    }
    return "light";
  }

  function toggleTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  return (
    <>
      <div className={`app theme-${theme}`}>
        <div className="app__header">
          <h1>devfinder</h1>
          <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
        </div>
        {/* TODO: Search bar */}
        {/* TODO: Search results/Github profile */}
        {/* <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/omonteon">Omar Monteon</a>.
        </div> */}
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
