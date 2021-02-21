import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { Theme } from "@material-ui/core/styles";

import { Orientation, useGameContext } from "../../context/GameContext";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

export default function GameControls() {
  const { move, orient, orientation } = useGameContext();
  return (
    <Container>
      <Box m={5} boxShadow={1} display="flex" justifyContent="center">
        <ControlWrapper>
          <ControlButton
            currentOrientation={orientation}
            orientation="NORTH"
            disabled={orientation === "NORTH"}
            style={{ gridColumn: "2", gridRow: "1" }}
            aria-label="Orient NORTH"
            onClick={() => orient("NORTH")}
          >
            <ExpandLessIcon />
          </ControlButton>
          <ControlButton
            currentOrientation={orientation}
            orientation="SOUTH"
            disabled={orientation === "SOUTH"}
            style={{ gridColumn: "2", gridRow: "3" }}
            aria-label="Orient SOUTH"
            onClick={() => orient("SOUTH")}
          >
            <ExpandMoreIcon />
          </ControlButton>
          <ControlButton
            currentOrientation={orientation}
            orientation="WEST"
            disabled={orientation === "WEST"}
            style={{ gridColumn: "1", gridRow: "2" }}
            aria-label="Orient WEST"
            onClick={() => orient("WEST")}
          >
            <ChevronLeftIcon />
          </ControlButton>
          <ControlButton
            currentOrientation={orientation}
            orientation="EAST"
            disabled={orientation === "EAST"}
            style={{ gridColumn: "3", gridRow: "2" }}
            aria-label="Orient EAST"
            onClick={() => orient("EAST")}
          >
            <ChevronRightIcon />
          </ControlButton>
          <IconButton
            color="primary"
            style={{ gridColumn: "2", gridRow: "2" }}
            aria-label="Move"
            onClick={move}
          >
            <CancelPresentationIcon />
          </IconButton>
        </ControlWrapper>
      </Box>
    </Container>
  );
}

const ControlWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`;

const ControlButton = styled(IconButton)<{
  orientation: Orientation;
  currentOrientation: Orientation;
  theme: Theme;
}>`
  color: ${({ orientation, currentOrientation, theme }) =>
    orientation === currentOrientation
      ? theme.palette.primary.main
      : theme.palette.secondary.dark};
`;
