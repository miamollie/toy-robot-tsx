import Square from "../Square";
import { useGameContext } from "../../context/GameContext";
const GameGrid = function () {
  const { gridDimensions } = useGameContext();

  return (
    <section>
      {Array(gridDimensions.height)
        .fill(0)
        .map((_, y) => {
          return (
            <section
              key={`row-${y}`}
              style={{ display: "flex" }}
              data-testid="gridRow"
            >
              {Array(gridDimensions.width)
                .fill(0)
                .map((_, x) => {
                  return <Square key={`${x}-${y}`} coord={[x, y]} />;
                })}
            </section>
          );
        })}
    </section>
  );
};

export default GameGrid;
