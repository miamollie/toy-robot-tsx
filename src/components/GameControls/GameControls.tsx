import styled from "styled-components";
import { useGameContext } from "../../context/GameContext";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

export default function GameControls() {
  const { move, orient } = useGameContext();
  return (
    <Box m={5} boxShadow={1} width={250}>
      <ControlWrapper>
        <IconButton
          style={{ gridColumn: "2", gridRow: "1" }}
          aria-label="Orient NORTH"
          onClick={() => orient("NORTH")}
        >
          <ExpandLessIcon />
        </IconButton>
        <IconButton
          style={{ gridColumn: "2", gridRow: "3" }}
          aria-label="Orient SOUTH"
          onClick={() => orient("SOUTH")}
        >
          <ExpandMoreIcon />
        </IconButton>
        <IconButton
          style={{ gridColumn: "1", gridRow: "2" }}
          aria-label="Orient WEST"
          onClick={() => orient("WEST")}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          style={{ gridColumn: "3", gridRow: "2" }}
          aria-label="Orient EAST"
          onClick={() => orient("EAST")}
        >
          <ChevronRightIcon />
        </IconButton>
        <IconButton
          style={{ gridColumn: "2", gridRow: "2" }}
          aria-label="Move"
          onClick={move}
        >
          <CancelPresentationIcon />
        </IconButton>
      </ControlWrapper>
    </Box>
  );
}

const ControlWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`;
