import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getUser } from "./api/user-client";
import ThemeSwitch from "./components/ThemeSwitch";
import SearchBar from "./components/SearchBar";
import "./App.css";
import GitHubProfile from "./components/GitHubProfile";

// In this project I'm learning/using for the first time:
// SVGR, SVGs in general(when not used as simple images).

// Resources that helped me with the project
// https://stackoverflow.com/questions/14553392/perplexed-by-svg-viewbox-width-height-etc
// https://css-tricks.com/scale-svg/
// https://react-svgr.com/
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/

const THEME_BG_COLOR = { light: "#f6f8ff", dark: "#141d2f" };

function App() {
  const defaultTheme = getDefaultTheme();
  const [theme, setTheme] = useState(defaultTheme);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
  async function handleSearch(userHandle) {
    try {
      setLoading(true);
      const user = await getUser(userHandle);
      setLoading(false);
      setUser(user);
      setError(false);
    } catch (error) {
      setUser(null);
      setError(true);
      setLoading(false);
    }
  }

  function clearErrorMessage() {
    setError(false);
  }

  return (
    <>
      <div className={`app theme-${theme}`}>
        <div className="app__header">
          <h1>devfinder</h1>
          <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
        </div>
        <SearchBar
          onSearch={handleSearch}
          error={error}
          onTextChange={clearErrorMessage}
        />
        {loading ? "Loading..." : null}
        {error || loading ? null : <GitHubProfile user={user} />}
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer noopener"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/omonteon">Omar Monteon</a>.
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
