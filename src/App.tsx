import React from "react";
import {
  Coord,
  GameStateProvider,
  useGameContext,
} from "./context/gameContext";

function App() {
  return (
    <GameStateProvider gridDimensions={{ height: 5, width: 5 }}>
      <div>
        <header>
          <h1>Toy Robot</h1>
        </header>
        <MainGame />
      </div>
    </GameStateProvider>
  );
}

export default App;

const MainGame = function () {
  const {
    orientation,
    currentLocation,
    attemptedInvalidMove,
    place,
    move,
    report,
    orient,
  } = useGameContext();
  return (
    <main>
      <section>
        {/* Later, define grid dynamically here */}
        <p>init functions: place </p>
        <button onClick={place}>PLACE</button>
      </section>
      <section>
        <GameGrid />

        <p>Current orientation is: {orientation}</p>
        <p>Current location is: {currentLocation}</p>
        <p>Is invalid move: {attemptedInvalidMove ? "true" : "false"}</p>
      </section>
      <section>
        <p> Game controles: Report N | S | E | W orientation MOVE RESET</p>
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

const GameGrid = function () {
  const { gridDimensions } = useGameContext();

  return (
    <section style={{ display: "grid" }}>
      {Array(gridDimensions.width)
        .fill(0)
        .map((_, i) => {
          return (
            <section>
              {Array(gridDimensions.height)
                .fill(0)
                .map((_, j) => {
                  return <Square key={`${i}-${j}`} coord={[i, j]} />;
                })}
            </section>
          );
        })}
    </section>
  );
};

const Square = function ({ coord }: { coord: Coord }) {
  const { currentLocation } = useGameContext();
  return <span>[{doesCoordMatch(coord, currentLocation) ? "*" : " "}]</span>;
};

const doesCoordMatch = function (coord: Coord, otherCoord: Coord) {
  console.log(coord);
  return coord[0] === otherCoord[0] && coord[1] === otherCoord[1];
};
