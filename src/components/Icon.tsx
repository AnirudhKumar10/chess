import React from "react";
import KingBlack from "../icons/king-black.svg";
import KingWhite from "../icons/king-white.svg";
import BishopBlack from "../icons/bishop-black.svg";
import BishopWhite from "../icons/bishop-white.svg";
import KnightBlack from "../icons/knight-black.svg";
import KnightWhite from "../icons/knight-white.svg";
import PawnBlack from "../icons/pawn-black.svg";
import PawnWhite from "../icons/pawn-white.svg";
import QueenBlack from "../icons/queen-black.svg";
import QueenWhite from "../icons/queen-white.svg";
import RookBlack from "../icons/rook-black.svg";
import RookWhite from "../icons/rook-white.svg";
import { Piece } from "../utils/types";

export const IconMap = {
  "king-black": KingBlack,
  "king-white": KingWhite,
  "bishop-black": BishopBlack,
  "bishop-white": BishopWhite,
  "knight-black": KnightBlack,
  "knight-white": KnightWhite,
  "pawn-black": PawnBlack,
  "pawn-white": PawnWhite,
  "queen-black": QueenBlack,
  "queen-white": QueenWhite,
  "rook-black": RookBlack,
  "rook-white": RookWhite,
};

export const ColorMap = {
  B: "black",
  W: "white",
};

export const PieceMap = {
  p: "pawn",
  K: "king",
  Q: "queen",
  N: "knight",
  B: "bishop",
  R: "rook",
};

interface IconProps {
  iconType: Piece | undefined;
  className?: string;
  id?: string;
}

export const Icon: React.FC<IconProps> = ({ iconType, className, id }) => {
  return (
    <div id={id} draggable className={className}>
      {iconType && (
        <img
          width={"75%"}
          height={"75%"}
          src={
            IconMap[
              `${PieceMap[iconType.type]}-${
                ColorMap[iconType.color]
              }` as keyof typeof IconMap
            ]
          }
        />
      )}
    </div>
  );
};
