import React from "react";
import { render, screen, within } from "@testing-library/react";
// import { within } from "@testing-library/dom";
import { GameStateProvider } from "../../context/GameContext";
import GameGrid from "./";

test("renders with correct number of rows and columns from provider", async () => {
  render(
    <GameStateProvider
      initialPosition={[1, 1]}
      gridDimensions={{ height: 3, width: 5 }}
    >
      <GameGrid />
    </GameStateProvider>
  );
  const gridRows = await screen.findAllByTestId("gridRow");
  expect(gridRows).toHaveLength(3);

  const rowItems = await within(gridRows[0]).findAllByTestId("gridItem");
  expect(rowItems).toHaveLength(5);
});

test("renders with robot in default location from provider", () => {
  render(
    <GameStateProvider
      initialPosition={[1, 1]}
      gridDimensions={{ height: 3, width: 5 }}
    >
      <GameGrid />
    </GameStateProvider>
  );

  const robot = screen.getByText(/x/i);
  expect(robot).toBeInTheDocument();
  //robot coords check as [1,1]
});
