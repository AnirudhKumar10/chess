import { Board } from "../utils/types";

export const intitalBoardChess: Board = {
  a1: { color: "W", type: "R" },
  b1: { color: "W", type: "N" },
  c1: { color: "W", type: "B" },
  d1: { color: "W", type: "Q" },
  e1: { color: "W", type: "K" },
  f1: { color: "W", type: "B" },
  g1: { color: "W", type: "N" },
  h1: { color: "W", type: "R" },

  // white pawn
  a2: { color: "W", type: "p" },
  b2: { color: "W", type: "p" },
  c2: { color: "W", type: "p" },
  d2: { color: "W", type: "p" },
  e2: { color: "W", type: "p" },
  f2: { color: "W", type: "p" },
  g2: { color: "W", type: "p" },
  h2: { color: "W", type: "p" },

  // black pawn
  a7: { color: "B", type: "p" },
  b7: { color: "B", type: "p" },
  c7: { color: "B", type: "p" },
  d7: { color: "B", type: "p" },
  e7: { color: "B", type: "p" },
  f7: { color: "B", type: "p" },
  g7: { color: "B", type: "p" },
  h7: { color: "B", type: "p" },

  a8: { color: "B", type: "R" },
  b8: { color: "B", type: "N" },
  c8: { color: "B", type: "B" },
  d8: { color: "B", type: "Q" },
  e8: { color: "B", type: "K" },
  f8: { color: "B", type: "B" },
  g8: { color: "B", type: "N" },
  h8: { color: "B", type: "R" },
};

