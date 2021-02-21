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
      data-testid="gridItem"
    >
      {isRobot && (
        <StyledRobot
          orientation={orientation}
          fontSize="large"
          color="action"
        />
      )}
    </StyledSquare>
  );
};

const doesCoordMatch = function (coord: Coord, otherCoord: Coord) {
  return coord[0] === otherCoord[0] && coord[1] === otherCoord[1];
};

type StyledSquareProps = {
  isRobot: boolean;
  attemptedInvalidMove: boolean;
};

const StyledSquare = styled.span<StyledSquareProps>`
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
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

const StyledRobot = styled(AndroidIcon)<{ orientation: Orientation }>`
  transform: ${({ orientation }) =>
    `rotate(${getDegreeFromOrientation(orientation)}deg)`};
`;

function getDegreeFromOrientation(orientation: Orientation) {
  switch (orientation) {
    case "WEST":
      return 270;
    case "SOUTH":
      return 180;
    case "EAST":
      return 90;
    default:
      return 0;
  }
}
