export const chessSquare = [
  "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8",
  "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", 
  "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", 
  "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", 
  "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", 
  "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", 
  "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", 
  "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"
] as const

export type square = typeof chessSquare[number]

export type color = "B" | "W";

export type pieceSymbol = "p" | "N" | "B" | "R" | "Q" | "K";

export type Piece = {
  color: color;
  type: pieceSymbol;
};

export type Move = {
  from: square;
  to: square;
  piece: Piece;
  captured?: Piece;
  promotion?: Piece;
};

export type ActivePiece = {
  from: square;
  piece: Piece;
};

export type Board = {
  [key in square]?: Piece;
};

export type Validation = Board

export type MoveCombo = { w?: Move; b?: Move };

export type History = Array<MoveCombo>;

export type File = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";

export type Rank = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

export type ChessBoardState = {
  board: Board;
  validation: Board;
  activePiece: {
    piece: Piece;
    from: square;
  };
};