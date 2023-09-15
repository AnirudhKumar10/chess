import React, { useRef, DragEventHandler, MouseEventHandler } from "react";
import { ChessIconType, Icon } from "./Icon";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { move, setActivePos } from "../store/slice/boardSlice";
import { validateDiagonal, validateLShape, validateStraightLine } from "../utils/valid-moves";

interface BoxProp {
  color: "white" | "black";
  chessIcon: ChessIconType;
  id?: string;
}

export const Box: React.FC<BoxProp> = ({ color, chessIcon, id }: BoxProp) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const dispatch = useAppDispatch()
  const activePiece = useAppSelector(state => state.board.activePiece)

  const handleDrop: DragEventHandler<HTMLDivElement> = (e) => {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    dispatch(move({ chessIcon: activePiece.chessIcon, initialPos: activePiece.pos, finalPos: id as string }))
  };

  const handleDragOver: DragEventHandler<HTMLDivElement> = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrag: DragEventHandler<HTMLDivElement> = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(id)
    dispatch(setActivePos({pos: id, chessIcon}))
  };

  const handleclick: MouseEventHandler<HTMLDivElement> = (e: any) => {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    console.log(validateStraightLine(id as string, "a4"), "ANIRUDH")
    console.log(validateDiagonal(id as string, "a4"), "ANIRUDH")
    console.log(validateLShape(id as string, "e4"), "ANIRUDH")
  };

  return (
    <div
      onDrop={handleDrop}
      onDrag={handleDrag}
      onDragOver={handleDragOver}
      onClick={handleclick}
      id={id}
      className={`${color} box`}
    >
      <Icon id={id} className="size-50" iconType={chessIcon} />
    </div>
  );
};
