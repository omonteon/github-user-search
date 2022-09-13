import React from "react";
import ReactDOM from "react-dom/client";
import GithubProfile from "./GithubProfile";

test("should render the Github Profile", () => {
  const div = document.createElement("div");
  const root = ReactDOM.createRoot(div);
  root.render(<GithubProfile />);
});
