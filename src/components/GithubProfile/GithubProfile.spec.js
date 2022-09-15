import React from "react";
import { render } from "@testing-library/react";
import GithubProfile from "./GithubProfile";

test("should render the Github Profile", () => {
  render(<GithubProfile />);
});
