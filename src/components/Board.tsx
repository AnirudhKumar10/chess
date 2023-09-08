import React from "react";
import { Box } from "./Box";
import { intitalChess } from "../utils/intial-state";
import { ChessIconType } from "./Icon";

const Rank = [1, 2, 3, 4, 5, 6, 7, 8];
const File = ["a", "b", "c", "d", "e", "f", "g", "h"];

function Board() {
  return (
    <div className="board-size">
      <div className={"board"}>
        {Rank.map((rank) =>
          File.map((file, fileIndex) => (
            <Box
              key={`${file}${rank}`}
              id={`${file}${9-rank}`}
              chessIcon={intitalChess[`${file}${9-rank}`]}
              color={(fileIndex + rank) % 2 === 0 ? "black" : "white"}
            />
          ))
        )}
      </div>
      <div className="board-rank">{Rank.map((rank)=><div key={rank} className="rank">{rank}</div>)}</div>
      <div className="board-file">{File.map((file)=><div key={file} className="file">{file}</div>)}</div>
    </div>
  );
}

export default Board;
