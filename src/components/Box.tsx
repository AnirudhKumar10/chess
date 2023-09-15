import React, { useRef, DragEventHandler, MouseEventHandler } from "react";
import { ChessIconType, Icon } from "./Icon";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { move, setActivePos } from "../store/slice/boardSlice";
import {
  getDiagonalMove,
  getFileMove,
  getLshapemove,
  getRankMove,
  validateMove,
} from "../utils/valid-moves";

interface BoxProp {
  color: "white" | "black";
  chessIcon: ChessIconType;
  id?: string;
}

export const Box: React.FC<BoxProp> = ({ color, chessIcon, id }: BoxProp) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const dispatch = useAppDispatch();
  const activePiece = useAppSelector((state) => state.board.activePiece);

  const handleDrop: DragEventHandler<HTMLDivElement> = (e) => {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    console.log(
      validateMove(activePiece.chessIcon || "", activePiece.pos, id as string)
    );
    if (
      validateMove(activePiece.chessIcon || "", activePiece.pos, id as string)
    ) {
      dispatch(
        move({
          chessIcon: activePiece.chessIcon,
          initialPos: activePiece.pos,
          finalPos: id as string,
        })
      );
    }
  };

  const handleDragOver: DragEventHandler<HTMLDivElement> = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrag: DragEventHandler<HTMLDivElement> = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(id);
    dispatch(setActivePos({ pos: id, chessIcon }));
  };

  const handleclick: MouseEventHandler<HTMLDivElement> = (e: any) => {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    dispatch(setActivePos({ pos: id, chessIcon }));

    getFileMove(id as string, 1, 2);
    getRankMove(id as string, 1, 2, 3);
    getDiagonalMove(id as string, 1, 2, 3);

    getLshapemove(id as string);
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
