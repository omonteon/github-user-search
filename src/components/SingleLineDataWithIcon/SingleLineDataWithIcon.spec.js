import React from "react";
import ReactDOM from "react-dom";
import SingleLineDataWithIcon from "./SingleLineDataWithIcon";

test("should render SingleLineDataWithIcon", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SingleLineDataWithIcon />, div);
});
