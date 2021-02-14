import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import GameControls from "./components/GameControls";
import GameGrid from "./components/GameGrid";
import { GameStateProvider } from "./context/GameContext";
import { getRandomInt } from "./utils/getRandomInt";

function App() {
  const gridDimensions = { height: 10, width: 10 };

  return (
    <Container maxWidth="sm" component="main">
      <GameStateProvider
        gridDimensions={gridDimensions}
        initialPosition={[
          getRandomInt(gridDimensions.height),
          getRandomInt(gridDimensions.width),
        ]}
      >
        <GameHeader />
        <GameGrid />
        <GameControls />
      </GameStateProvider>
    </Container>
  );
}

export default App;
function GameHeader() {
  return (
    <header>
      <Typography align="center" gutterBottom variant="h3" component="h1">
        Toy Robot
      </Typography>
    </header>
  );
}

function GridControls() {
  const [gridDimensions, setGridDimensions] = useState({
    width: 10,
    height: 10,
  });
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
  return (
    <>
      <button
        disabled={gridDimensions.width === 50}
        onClick={increaseGridWidth}
      >
        Width up
      </button>
      <button disabled={gridDimensions.width === 1} onClick={decreaseGridWidth}>
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
    </>
  );
}
