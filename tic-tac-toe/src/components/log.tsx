import * as React from "react";
import { BoardState } from "./GameState";

//move log function next to the board
type logProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};
export function MoveLog(props: logProps) {
  return (
    <div className="log-container">
      <h3>Move List:</h3>
      <ol>
        {props.history.map((_, index) => {
          return (
            <li key={index}>
              <button onClick={() => props.jumpTo(index)}>
                Go to{index === 0 ? "Start" : ` move #${index}`}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
