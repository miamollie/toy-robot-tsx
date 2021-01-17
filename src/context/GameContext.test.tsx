import React from "react";
import { render, screen } from "@testing-library/react";
import { GameStateProvider, useGameContext } from "./GameContext";

const TestComponent = function () {
  const { currentLocation, gridDimensions } = useGameContext();
  return (
    <span>
      {`${currentLocation[0]}, ${currentLocation[1]}`}
      <br></br>
      {`${gridDimensions.width}, ${gridDimensions.height}`}
    </span>
  );
};

test("renders with defaults from provider", () => {
  render(
    <GameStateProvider
      initialPosition={[1, 1]}
      gridDimensions={{ height: 3, width: 5 }}
    >
      <TestComponent />
    </GameStateProvider>
  );
  const currLocation = screen.getByText(/1, 1/i);
  expect(currLocation).toBeInTheDocument();

  const dimensions = screen.getByText(/5, 3/i);
  expect(dimensions).toBeInTheDocument();
});
