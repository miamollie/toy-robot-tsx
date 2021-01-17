import { Coord, useGameContext } from "../../context/GameContext";
//todo setup filepaths in config

const Square = function ({ coord }: { coord: Coord }) {
  const {
    currentLocation,
    attemptedInvalidMove,
    orientation,
  } = useGameContext();
  const isRobot = doesCoordMatch(coord, currentLocation);
  //TODO styled components
  const backgroundColor = isRobot
    ? attemptedInvalidMove
      ? "red"
      : "blue"
    : "grey";
  const border = isRobot ? "1px solid white" : "1px solid transparent"; //TODO border from orientaiton
  // const showAnimation = attemptedInvalidMove ? "1px solid" : undefined;
  return (
    <span
      style={{
        height: "20px",
        width: "20px",
        display: "inline-block",
        backgroundColor,
        border,
      }}
    >
      {isRobot ? "x" : "o"}
    </span>
  );
};

const doesCoordMatch = function (coord: Coord, otherCoord: Coord) {
  return coord[0] === otherCoord[0] && coord[1] === otherCoord[1];
};

export default Square;
