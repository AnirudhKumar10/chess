import { store } from "../store";
import { chessSquare } from "./types";

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

export const validateStraightLine = (intPos: string, finalPos: string) => {
  const [intFile, intRank] = intPos.split("");
  const [finalFile, finalRank] = finalPos.split("");
  return {
    isSameFile: intFile === finalFile,
    isSameRank: intRank === finalRank,
    moveSize:
      intFile !== finalFile
        ? File[intFile] - File[finalFile]
        : Number(intRank) - Number(finalRank),
    valid: intFile === finalFile || intRank === finalRank,
  };
};

export const validateDiagonal = (intPos: string, finalPos: string) => {
  const [intFile, intRank] = intPos.split("");
  const [finalFile, finalRank] = finalPos.split("");
  return {
    valid:
      Math.abs((intRank as any) - Number(finalRank)) ===
      Math.abs(File[intFile] - File[finalFile]),
    moveSize: Math.abs(File[intFile] - File[finalFile]),
  };
};

export const validateLShape = (intPos: string, finalPos: string) => {
  const [intFile, intRank] = intPos.split("");
  const [finalFile, finalRank] = finalPos.split("");

  const a =
    Number(intRank) + 2 === Number(finalRank) &&
    File[intFile] + 1 === File[finalFile];
  const b =
    Number(intRank) + 2 === Number(finalRank) &&
    File[intFile] - 1 === File[finalFile];
  const c =
    Number(intRank) - 2 === Number(finalRank) &&
    File[intFile] + 1 === File[finalFile];
  const d =
    Number(intRank) - 2 === Number(finalRank) &&
    File[intFile] - 1 === File[finalFile];
  const e =
    Number(intRank) + 1 === Number(finalRank) &&
    File[intFile] + 2 === File[finalFile];
  const f =
    Number(intRank) + 1 === Number(finalRank) &&
    File[intFile] - 2 === File[finalFile];
  const g =
    Number(intRank) - 1 === Number(finalRank) &&
    File[intFile] + 2 === File[finalFile];
  const h =
    Number(intRank) - 1 === Number(finalRank) &&
    File[intFile] - 2 === File[finalFile];

  return {
    valid: a || b || c || d || e || f || g || h,
  };
};

export const validateMove = (
  chessIcon: string,
  intPos: string,
  finalPos: string
) => {
  const chessKey = `${chessIcon.split("-")[0]}${
    chessIcon.split("-")[0] !== "pawn" ? "" : "-" + chessIcon.split("-")[1]
  }`;
  const straightMove = validateStraightLine(intPos, finalPos);
  const diagonalMove = validateDiagonal(intPos, finalPos);
  const lShapeMove = validateLShape(intPos, finalPos);

  if (
    chessIcon.split("-")[1] ===
    store.getState().board.board[finalPos]?.split("-")[1]
  ) {
    return false;
  }

  switch (chessKey) {
    case "pawn-white":
      return (
        straightMove.moveSize === -1 &&
        straightMove.valid &&
        straightMove.isSameFile
      );
    case "pawn-black":
      return (
        straightMove.moveSize === 1 &&
        straightMove.valid &&
        straightMove.isSameFile
      );
    case "king":
      return (
        (straightMove.valid && Math.abs(straightMove.moveSize) === 1) ||
        (diagonalMove.valid && Math.abs(diagonalMove.moveSize) === 1)
      );
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

export const getDiagonalMove = (pos: string, ...moveSize: number[]) => {
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

export const getValidMoves = (chessIcon: string, pos: string) => {};
