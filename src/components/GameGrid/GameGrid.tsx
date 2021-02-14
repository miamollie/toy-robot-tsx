import Square from "../Square";
import Container from "@material-ui/core/Container";

import { useGameContext } from "../../context/GameContext";
import styled from "styled-components";
const GameGrid = function () {
  const { gridDimensions } = useGameContext();

  return (
    <Container>
      {Array(gridDimensions.height)
        .fill(0)
        .map((_, y) => {
          return (
            <GridRow key={`row-${y}`} data-testid="gridRow">
              {Array(gridDimensions.width)
                .fill(0)
                .map((_, x) => {
                  return <Square key={`${x}-${y}`} coord={[x, y]} />;
                })}
            </GridRow>
          );
        })}
    </Container>
  );
};

export default GameGrid;

const GridRow = styled.div`
  display: flex;
  justify-content: center;
`;
