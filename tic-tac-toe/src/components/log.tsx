import * as React from "react";
import { BoardState } from "./GameState";

//move log function next to the board
type logProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};
export function MoveLog(props: logProps) {
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
