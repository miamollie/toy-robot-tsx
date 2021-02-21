import { Coord, useGameContext, Orientation } from "../../context/GameContext";
import styled from "styled-components";
import AndroidIcon from "@material-ui/icons/Android";

const Square = function ({ coord }: { coord: Coord }) {
  const {
    currentLocation,
    attemptedInvalidMove,
    orientation,
  } = useGameContext();
  const isRobot = doesCoordMatch(coord, currentLocation);

  return (
    <StyledSquare
      isRobot={isRobot}
      attemptedInvalidMove={attemptedInvalidMove}
      orientation={orientation}
      data-testid="gridItem"
    >
      {isRobot && <AndroidIcon />}
    </StyledSquare>
  );
};

const doesCoordMatch = function (coord: Coord, otherCoord: Coord) {
  return coord[0] === otherCoord[0] && coord[1] === otherCoord[1];
};

type StyledSquareProps = {
  isRobot: boolean;
  attemptedInvalidMove: boolean;
  orientation: Orientation;
};

const StyledSquare = styled.span<StyledSquareProps>`
  height: 3rem;
  width: 3rem;
  background-color: ${({ isRobot, attemptedInvalidMove, theme }) => {
    return isRobot
      ? attemptedInvalidMove
        ? theme.palette.error.main
        : theme.palette.primary.main
      : theme.palette.secondary.main;
  }};
  border: 1px solid white;
`;

export default Square;


      // trasform:  ${({ orientation, isRobot }) =>
//   // isRobot && `rotate(${getDegreeFromOrientation(orientation)})`}
// function getDegreeFromOrientation(orientation: Orientation) {
//   switch (orientation) {
//     case "NORTH":
//       return 0;
//     case "SOUTH":
//       return 180;
//     case "EAST":
//       return 90;
//     default:
//       return 0;
//   }
// }
