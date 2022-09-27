import React from "react";
import { render, screen } from "@testing-library/react";
import GithubProfile from "./GithubProfile";
import { GITHUB_PROFILE } from "../../constants/testData";

test("should render null Github Profile", () => {
  render(<GithubProfile />);
});

test("should render the Github Profile", () => {
  render(<GithubProfile user={GITHUB_PROFILE} />);

  const userHandle = screen.getByText(`@${GITHUB_PROFILE.login}`);
  expect(userHandle).toBeInTheDocument();
});
