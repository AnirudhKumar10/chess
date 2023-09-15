import { Box } from "./Box";
import { useAppSelector } from "../store/hook";

const Rank = [1, 2, 3, 4, 5, 6, 7, 8];
const File = ["a", "b", "c", "d", "e", "f", "g", "h"];

function Board() {
  const boardState = useAppSelector(state => state.board)
  return (
    <div className="board-size">
      <div className={"board"}>
        {Rank.map((rank) =>
          File.map((file, fileIndex) => (
            <Box
              key={`${file}${rank}`}
              id={`${file}${9-rank}`}
              chessIcon={boardState.board[`${file}${9-rank}`]}
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
