import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders toy robot link", () => {
  render(<App />);
  const headerText = screen.getByText(/toy robot/i);
  expect(headerText).toBeInTheDocument();
});
