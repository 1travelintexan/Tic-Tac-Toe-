import * as React from "react";
import { BoardProps, SquareProps, Column, Row, Square } from "./game";

//game board function
export function Board({ board, onClick }: BoardProps) {
  const createProps = (square: number): SquareProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
    };
  };
  return (
    <div className="board">
      <Column gap={20}>
        <Row gap={20}>
          <Square {...createProps(0)} />
          <Square {...createProps(1)} />
          <Square {...createProps(2)} />
        </Row>
        <Row gap={20}>
          <Square {...createProps(3)} />
          <Square {...createProps(4)} />
          <Square {...createProps(5)} />
        </Row>
        <Row gap={20}>
          <Square {...createProps(6)} />
          <Square {...createProps(7)} />
          <Square {...createProps(8)} />
        </Row>
      </Column>
    </div>
  );
}
