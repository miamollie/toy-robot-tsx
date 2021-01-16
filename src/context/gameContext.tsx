import React, { useState } from "react";

export type Coord = [number, number]; // {x: number; y: number} ?

export interface GameState {
  gridDimensions: { height: number; width: number };
  orientation: Orientation;
  currentLocation: Coord;
  attemptedInvalidMove: Boolean;
  place: () => void;
  move: () => void;
  report: () => void;
  orient: (direction: Orientation) => void;
}

type Orientation = "NORTH" | "SOUTH" | "EAST" | "WEST";

// THIS IS WRONG!
const Movements: Record<Orientation, Coord> = {
  NORTH: [0, 1],
  SOUTH: [0, -1],
  EAST: [1, 0],
  WEST: [-1, 0],
};
const gameDefaults = {
  orientation: "NORTH",
  currentLocation: [0, 0] as Coord,
  attemptedInvalidMove: false,
  gridDimensions: { height: 0, width: 0 },
  place: () => {},
  move: () => {},
  report: () => {},
  orient: (direction: Orientation) => {},
};

const GameContext = React.createContext(gameDefaults);

const Provider = GameContext.Provider;

export const GameStateProvider = ({
  children,
  gridDimensions,
}: {
  children: React.ReactNode;
  gridDimensions: { height: number; width: number };
}) => {
  const [orientation, setOrientation] = useState<Orientation>("NORTH");
  const [currentLocation, setCurrentLocation] = useState<Coord>([0, 0]); //TODO get from defaults..?
  const [attemptedInvalidMove, setAttemptedInvalidMove] = useState(false);

  // Maybe this doesn't belong in here..., maybe it's an init function that lives above the provider call site?
  function place() {
    const x = getRandomInt(gridDimensions.height);
    const y = getRandomInt(gridDimensions.width);
    setCurrentLocation([x, y]);
  }

  function move() {
    const predictedMove: Coord = [
      currentLocation[0] + Movements[orientation][0],
      currentLocation[1] + Movements[orientation][1],
    ];
    if (isPermittedMove(predictedMove)) {
      setCurrentLocation(predictedMove);
    } else {
      console.log("attempted Invalid");
      setAttemptedInvalidMove(true);
      setTimeout(() => {
        console.log("cleared attempt");

        setAttemptedInvalidMove(false);
      }, 2000);
    }
  }

  function isPermittedMove(coord: Coord) {
    return (
      coord[0] >= 0 &&
      coord[0] < gridDimensions.width &&
      coord[1] >= 0 &&
      coord[1] < gridDimensions.height
    );
  }

  function report() {
    window.alert(currentLocation);
  }

  function orient(newOrientation: Orientation) {
    setOrientation(newOrientation);
  }

  return (
    <Provider
      value={{
        orientation,
        currentLocation,
        attemptedInvalidMove,
        gridDimensions,
        place,
        move,
        report,
        orient,
      }}
    >
      {children}
    </Provider>
  );
};

// TODO move to Utils
function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function useGameContext() {
  const context = React.useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGameContext must be used within a GameContextProvider");
  }
  return context;
}
