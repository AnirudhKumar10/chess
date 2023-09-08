import React from "react";
import { ChessIconType, Icon } from "./Icon";

interface BoxProp {
  color: "white" | "black";
  chessIcon: ChessIconType;
  id?: string;
}

export const Box: React.FC<BoxProp> = ({ color, chessIcon, id }: BoxProp) => {
  const colorValue = color === "white" ? "white" : "black"
    return (
    <div id={id || "blank"} className={`${color} box`}>
      <Icon className="size-50" iconType={chessIcon} />
    </div>
  );
};
