import React, { useRef, DragEventHandler, MouseEventHandler } from "react";
import { Icon } from "./Icon";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { move, activePiece, validationSquare } from "../store/slice/boardSlice";
import { Board, Piece, square } from "../utils/types";
import { getValidMoveArray } from "../utils/valid-moves";

interface BoxProp {
  color: "white" | "black";
  chessIcon: Piece;
  id?: square;
  applyValidationStyle?: boolean;
}

export const Box: React.FC<BoxProp> = ({
  color,
  chessIcon,
  id,
  applyValidationStyle,
}: BoxProp) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const dispatch = useAppDispatch();
  const ap = useAppSelector((state) => state.board.activePiece);

  const handleDrop: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (applyValidationStyle) {
      dispatch(move({ ...ap, to: id as square }));
    }
  };

  const handleDragOver: DragEventHandler<HTMLDivElement> = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrag: DragEventHandler<HTMLDivElement> = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(activePiece({ piece: chessIcon, from: id as square }));
  };

  const handleclick: MouseEventHandler<HTMLDivElement> = (e: any) => {
    // console.log(e);
    e.preventDefault();
    e.stopPropagation();
    dispatch(activePiece({ piece: chessIcon, from: id as square }));

    if (applyValidationStyle) {
      dispatch(move({ ...ap, to: id as square }));
      dispatch(validationSquare({}));
    }

    if (!ap.from) {
      const validMoveObject = getValidMoveArray(
        chessIcon || ap.piece,
        id as square
      )?.reduce((acc, key) => ({ ...acc, [key]: true }), {} as Board);

      dispatch(validationSquare(validMoveObject));
    }
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
      {applyValidationStyle && <div className="validation-circle"></div>}
    </div>
  );
};
