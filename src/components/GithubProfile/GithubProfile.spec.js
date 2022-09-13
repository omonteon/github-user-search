import React from "react";
import ReactDOM from "react-dom";
import GithubProfile from "./GithubProfile";

test("should render the Github Profile", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GithubProfile />, div);
});
