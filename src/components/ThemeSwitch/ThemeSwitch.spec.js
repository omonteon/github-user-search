import React from "react";
import { render, screen } from "@testing-library/react";
import ThemeSwitch from "./ThemeSwitch";
import userEvent from "@testing-library/user-event";

test("should render the Theme Switch", () => {
  render(<ThemeSwitch />);
});

test("should have default checked option 'lightmode'", () => {
  render(<ThemeSwitch />);
  const lightModeOption = screen.getByRole("radio", { name: /lightmode/i });
  expect(lightModeOption).toBeChecked();
});

test("should update checked option on click", () => {
  render(<ThemeSwitch />);
  const darkModeOption = screen.getByRole("radio", { name: /darkmode/i });
  userEvent.click(darkModeOption);
  expect(darkModeOption).toBeChecked();
});
