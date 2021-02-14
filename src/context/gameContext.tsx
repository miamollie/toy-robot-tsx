import React, { useState } from "react";

export type Coord = [number, number];

export interface GameState {
  gridDimensions: { height: number; width: number };
  orientation: Orientation;
  currentLocation: Coord;
  attemptedInvalidMove: Boolean;
  move: () => void;
  report: () => void;
  orient: (direction: Orientation) => void;
}

export type Orientation = "NORTH" | "SOUTH" | "EAST" | "WEST";

const Movements: Record<Orientation, Coord> = {
  NORTH: [0, -1],
  SOUTH: [0, 1],
  EAST: [1, 0],
  WEST: [-1, 0],
};

const gameDefaults = {
  orientation: "NORTH" as Orientation,
  currentLocation: [0, 0] as Coord,
  attemptedInvalidMove: false,
  gridDimensions: { height: 0, width: 0 },
  move: () => {},
  report: () => {},
  orient: (direction: Orientation) => {},
};

const GameContext = React.createContext(gameDefaults);

const Provider = GameContext.Provider;

export const GameStateProvider = ({
  children,
  gridDimensions,
  initialPosition,
}: {
  children: React.ReactNode;
  gridDimensions: { height: number; width: number };
  initialPosition: Coord;
}) => {
  const [orientation, setOrientation] = useState<Orientation>("NORTH");
  const [currentLocation, setCurrentLocation] = useState<Coord>(
    initialPosition
  );
  const [attemptedInvalidMove, setAttemptedInvalidMove] = useState(false);

  function move() {
    const predictedMove: Coord = [
      currentLocation[0] + Movements[orientation][0],
      currentLocation[1] + Movements[orientation][1],
    ];
    if (isPermittedMove(predictedMove)) {
      setCurrentLocation(predictedMove);
    } else {
      setAttemptedInvalidMove(true);
      setTimeout(() => {
        setAttemptedInvalidMove(false);
      }, 500);
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
        move,
        report,
        orient,
      }}
    >
      {children}
    </Provider>
  );
};

export function useGameContext() {
  const context = React.useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGameContext must be used within a GameContextProvider");
  }
  return context;
}
