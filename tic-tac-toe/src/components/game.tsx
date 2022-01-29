import * as React from "react";
import styled from "styled-components";
import { Board } from "./Board";
import { BoardState, useGameState, Value } from "./GameState";
import { MoveLog } from "./log";
import { StyledSquare } from "./StyledSquare";

//set the size of the gap between the rows and columns
type LayoutProps = {
  gap: number;
};

//setting the row component for the game board
export const Row = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap}px;
`;

//setting the column component for the game board
export const Column = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;

function Game() {
  const { gameState, current, xIsNext, winner, handleClick, jumpTo } =
    useGameState();
  return (
    <Row gap={20}>
      <Column gap={20}>
        <div>
          {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}
        </div>
        <Board board={current} onClick={handleClick} />
      </Column>
      <MoveLog history={gameState.history} jumpTo={jumpTo} />
    </Row>
  );
}

export type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};

export type SquareProps = {
  value: Value;
  onClick: () => void;
};

export function Square(props: SquareProps) {
  return <StyledSquare onClick={props.onClick}>{props.value}</StyledSquare>;
}

export default Game;
