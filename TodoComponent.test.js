import React from "react";
import { render } from "@testing-library/react";
import TodoComponent from "./TodoComponent";

it("renders without crashing", function() {
  render(<TodoComponent task="Test Task" />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<TodoComponent task="Test Task" />);
  expect(asFragment()).toMatchSnapshot();
});