import Square from "../Square";
import { useGameContext } from "../../context/GameContext";
const GameGrid = function () {
  const { gridDimensions } = useGameContext();

  return (
    <section style={{ display: "grid" }}>
      {Array(gridDimensions.height)
        .fill(0)
        .map((_, x) => {
          return (
            <section>
              {Array(gridDimensions.width)
                .fill(0)
                .map((_, y) => {
                  return <Square key={`${x}-${y}`} coord={[x, y]} />;
                })}
            </section>
          );
        })}
    </section>
  );
};

export default GameGrid;
