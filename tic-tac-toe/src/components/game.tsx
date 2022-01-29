import * as React from "react";
import styled from "styled-components";

//set the size of the gap between the rows and columns
type LayoutProps = {
  gap: number;
};

//setting the row component for the game board
const Row = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap}px;
`;

//setting the column component for the game board
const Column = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;

function Game() {
  return (
    <Row gap={20}>
      <Column gap={20}>
        <div>Status</div>
        <Board />
      </Column>
      <MoveLog />
    </Row>
  );
}

//game board function
function Board() {
  return (
    <div>
      <Column gap={0}>
        <Row gap={0}>
          <Square />
          <Square />
          <Square />
        </Row>
        <Row gap={0}>
          <Square />
          <Square />
          <Square />
        </Row>
        <Row gap={0}>
          <Square />
          <Square />
          <Square />
        </Row>
      </Column>
    </div>
  );
}
//move log function next to the board
function MoveLog() {
  return (
    <div>
      <ol>
        <button>Go to move</button>
      </ol>
    </div>
  );
}

// styles for the game squares
const StyledSquare = styled.button`
  width: 34px;
  height: 34px;
  background: #fff;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
`;

function Square() {
  return <StyledSquare>X</StyledSquare>;
}

export default Game;
