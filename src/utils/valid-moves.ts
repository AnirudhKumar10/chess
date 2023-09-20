// import { store } from "../store";
// import { chessSquare } from "./types";

import { PieceMap } from "../components/Icon";
import { Piece, chessSquare, square } from "./types";

export const validMoveSize: { [key: string]: number[] } = {
  "pawn-white": [1],
  "pawn-black": [-1],
  king: [1, -1],
  queen: [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4, -5, -6, -7],
  bishop: [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4, -5, -6, -7],
  rook: [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4, -5, -6, -7],
  knight: [],
};

const File: { [key: string]: number } = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
};

export const validateStraightLine = (
  from: square,
  to: square,
  moveSize: number[]
) => {
  return {
    valid:
      getFileMove(from, ...moveSize).includes(to) ||
      getRankMove(from, ...moveSize).includes(to),
    isSameFile: getFileMove(from, ...moveSize).includes(to),
  };
};

export const validateDiagonal = (
  intPos: square,
  finalPos: square,
  moveSize: number[]
) => {
  return {
    valid: getDiagonalMove(intPos, ...moveSize).includes(finalPos),
  };
};

export const validateLShape = (intPos: square, finalPos: square) => {
  return {
    valid: getLshapemove(intPos).includes(finalPos),
  };
};

export const getDiagonalMove = (pos: square, ...moveSize: number[]) => {
  const [intFile, intRank] = pos.split("");

  return moveSize.reduce((acc, move) => {
    const a = chessSquare.filter(
      (square) =>
        Math.abs(File[intFile] - File[square.split("")[0]]) === move &&
        Math.abs(Number(intRank) - Number(square.split("")[1])) === move
    );
    return [...acc, ...a];
  }, [] as string[]);
};

export const getRankMove = (pos: string, ...moveSize: number[]) => {
  const [intFile, intRank] = pos.split("");

  return moveSize.reduce((acc, move) => {
    const a = chessSquare.filter(
      (square) =>
        square.split("")[1] === intRank &&
        move === File[square.split("")[0]] - File[intFile]
    );
    return [...acc, ...a];
  }, [] as string[]);
};

export const getFileMove = (pos: string, ...moveSize: number[]) => {
  const [intFile, intRank] = pos.split("");

  return moveSize.reduce((acc, move) => {
    const a = chessSquare.filter(
      (square) =>
        square.split("")[0] === intFile &&
        move === Number(square.split("")[1]) - Number(intRank)
    );
    return [...acc, ...a];
  }, [] as string[]);
};

export const getLshapemove = (pos: string) => {
  const [intFile, intRank] = pos.split("");

  return chessSquare.filter((square) => {
    const [finalFile, finalRank] = square.split("");

    return (
      (Number(intRank) + 2 === Number(finalRank) &&
        File[intFile] + 1 === File[finalFile]) ||
      (Number(intRank) + 2 === Number(finalRank) &&
        File[intFile] - 1 === File[finalFile]) ||
      (Number(intRank) - 2 === Number(finalRank) &&
        File[intFile] + 1 === File[finalFile]) ||
      (Number(intRank) - 2 === Number(finalRank) &&
        File[intFile] - 1 === File[finalFile]) ||
      (Number(intRank) + 1 === Number(finalRank) &&
        File[intFile] + 2 === File[finalFile]) ||
      (Number(intRank) + 1 === Number(finalRank) &&
        File[intFile] - 2 === File[finalFile]) ||
      (Number(intRank) - 1 === Number(finalRank) &&
        File[intFile] + 2 === File[finalFile]) ||
      (Number(intRank) - 1 === Number(finalRank) &&
        File[intFile] - 2 === File[finalFile])
    );
  });
};

export const validateMove = (chessIcon: Piece, from: square, to: square) => {
  const chessKey = `${PieceMap[chessIcon.type]}-${
    chessIcon.type === "p" ? (chessIcon.color === "B" ? "black" : "white") : ""
  }`;

  const moveSize = validMoveSize[chessKey];
  const straightMove = validateStraightLine(from, to, moveSize);
  const diagonalMove = validateDiagonal(from, to, moveSize);
  const lShapeMove = validateLShape(from, to);

  switch (chessKey) {
    case "pawn-white":
      return straightMove.valid && straightMove.isSameFile;
    case "pawn-black":
      return straightMove.valid && straightMove.isSameFile;
    case "king":
      return straightMove.valid || diagonalMove.valid;
    case "queen":
      return straightMove.valid || diagonalMove.valid;
    case "knight":
      return lShapeMove.valid;
    case "bishop":
      return diagonalMove.valid;
    case "rook":
      return straightMove.valid;
  }
};

export const getValidMoveArray = (chessIcon: Piece, pos: square) => {
  const chessKey = `${PieceMap[chessIcon.type]}${
    chessIcon.type === "p" ? (chessIcon.color === "B" ? "-black" : "-white") : ""
  }`;

  const moveSize = validMoveSize[chessKey];

  switch (chessKey) {
    case "pawn-white":
      return [...getFileMove(pos, ...moveSize)];
    case "pawn-black":
      return [...getFileMove(pos, ...moveSize)];
    case "king":
      return [
        ...getDiagonalMove(pos, ...moveSize),
        ...getFileMove(pos, ...moveSize),
        ...getRankMove(pos, ...moveSize),
      ];
    case "queen":
      return [
        ...getDiagonalMove(pos, ...moveSize),
        ...getRankMove(pos, ...moveSize),
        ...getFileMove(pos, ...moveSize),
      ];
    case "knight":
      return [...getLshapemove(pos)];
    case "bishop":
      return [...getDiagonalMove(pos, ...moveSize)];
    case "rook":
      return [
        ...getFileMove(pos, ...moveSize),
        ...getRankMove(pos, ...moveSize),
      ];
    default:
      return [];
  }
};
