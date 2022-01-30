import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Board } from "./Board";
import { BoardState, useGameState, Value } from "./GameState";
import { MoveLog } from "./log";
import { StyledSquare } from "./StyledSquare";
import Splash from "./Splash";

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
  const [yourName, setName] = useState("");
  const [partnersName, setPartnerName] = useState("");
  const [splash, setSplash] = useState(true);

  function handleNames(e: any) {
    e.preventDefault();
    let yourName = e.target.yourName.value;
    let partnersName = e.target.partnersName.value;

    setName(yourName);
    setPartnerName(partnersName);
    setSplash(false);
  }
  return (
    <div className="gamepage-container">
      {splash ? (
        <Splash handleNames={handleNames} />
      ) : (
        <div className="board-container">
          <div className="game-header">
            {winner
              ? `${
                  winner == "X" ? yourName : partnersName
                } won! Our state of the art algorithm has given your love a 92% chance of success!`
              : `${xIsNext ? yourName : partnersName}'s turn!`}
          </div>
          <Row gap={20}>
            <Column gap={20}>
              <Board board={current} onClick={handleClick} />
            </Column>
          </Row>
        </div>
      )}
      <MoveLog history={gameState.history} jumpTo={jumpTo} />
    </div>
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
  return (
    <StyledSquare className="squares" onClick={props.onClick}>
      {props.value}
    </StyledSquare>
  );
}

export default Game;
