import React, { useState } from "react";
import GameGrid from "./components/GameGrid";
import {
  Coord,
  GameStateProvider,
  useGameContext,
} from "./context/GameContext";
import { getRandomInt } from "./utils/getRandomInt";

function App() {
  const [gridDimensions, setGridDimensions] = useState({
    height: 5,
    width: 10,
  });
  const [initialPosition, setInitialPosition] = useState<Coord>([0, 0]);

  function increaseGridWidth() {
    setGridDimensions((prevDimensions) => {
      return { width: prevDimensions.width + 1, height: prevDimensions.height };
    });
  }
  function decreaseGridWidth() {
    if (gridDimensions.width === 1) {
      return;
    }
    setGridDimensions((prevDimensions) => {
      return { width: prevDimensions.width - 1, height: prevDimensions.height };
    });
  }
  function increaseGridHeight() {
    setGridDimensions((prevDimensions) => {
      return { width: prevDimensions.width, height: prevDimensions.height + 1 };
    });
  }
  function decreaseGridHeight() {
    if (gridDimensions.height === 1) {
      return;
    }
    setGridDimensions((prevDimensions) => {
      return { width: prevDimensions.width, height: prevDimensions.height - 1 };
    });
  }

  function place() {
    const x = getRandomInt(gridDimensions.height);
    const y = getRandomInt(gridDimensions.width);
    setInitialPosition([x, y]);
  }

  return (
    <>
      <header>
        <h1>Toy Robot</h1>
        {/* TODO move to GameInit component */}
        <section>
          <button onClick={place}>PLACE</button>
          <button
            disabled={gridDimensions.width === 50}
            onClick={increaseGridWidth}
          >
            Width up
          </button>
          <button
            disabled={gridDimensions.width === 1}
            onClick={decreaseGridWidth}
          >
            Width down
          </button>
          <button
            disabled={gridDimensions.height === 50}
            onClick={increaseGridHeight}
          >
            Height up
          </button>
          <button
            disabled={gridDimensions.height === 1}
            onClick={decreaseGridHeight}
          >
            Height down
          </button>
        </section>
      </header>

      <GameStateProvider
        gridDimensions={gridDimensions}
        initialPosition={initialPosition}
      >
        <MainGame />
      </GameStateProvider>
    </>
  );
}

export default App;

const MainGame = function () {
  const {
    orientation,
    currentLocation,
    attemptedInvalidMove,
    move,
    report,
    orient,
  } = useGameContext();
  return (
    <main>
      <section>
        <GameGrid />

        <p>Current orientation is: {orientation}</p>
        <p>Current location is: {currentLocation}</p>
        <p>Is invalid move: {attemptedInvalidMove ? "true" : "false"}</p>
      </section>
      <section>
        <button onClick={move}>Move</button>
        <button onClick={() => orient("NORTH")}>NORTH</button>
        <button onClick={() => orient("SOUTH")}>SOUTH</button>
        <button onClick={() => orient("EAST")}>EAST</button>
        <button onClick={() => orient("WEST")}>WEST</button>
        <button onClick={report}>Report</button>
      </section>
    </main>
  );
};
