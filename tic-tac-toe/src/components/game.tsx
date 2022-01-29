import * as React from "react";
import styled from "styled-components";
import { BoardState, useGameState, Value } from "./GameState";

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

type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};

//game board function
function Board({ board, onClick }: BoardProps) {
  const createProps = (square: number): SquareProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
    };
  };
  return (
    <div>
      <Column gap={0}>
        <Row gap={0}>
          <Square {...createProps(0)} />
          <Square {...createProps(1)} />
          <Square {...createProps(2)} />
        </Row>
        <Row gap={0}>
          <Square {...createProps(3)} />
          <Square {...createProps(4)} />
          <Square {...createProps(5)} />
        </Row>
        <Row gap={0}>
          <Square {...createProps(6)} />
          <Square {...createProps(7)} />
          <Square {...createProps(8)} />
        </Row>
      </Column>
    </div>
  );
}
//move log function next to the board
type logProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};

function MoveLog(props: logProps) {
  return (
    <ol>
      {props.history.map((_, index) => {
        return (
          <li key={index}>
            <button onClick={() => props.jumpTo(index)}>
              Go To{index === 0 ? "Start" : `Move to #${index}`}
            </button>
          </li>
        );
      })}
    </ol>
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

type SquareProps = {
  value: Value;
  onClick: () => void;
};

function Square(props: SquareProps) {
  return <StyledSquare onClick={props.onClick}>{props.value}</StyledSquare>;
}

export default Game;
