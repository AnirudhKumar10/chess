import { ChessIconType } from "../components/Icon"

interface BoardType {
    [key: string]: ChessIconType
}

export const intitalChess: BoardType = {
    a1: "rook-white",
    b1: "knight-white",
    c1: "bishop-white",
    d1: "queen-white",
    e1: "king-white",
    f1: "bishop-white",
    g1: "knight-white",
    h1: "rook-white",
    // white pawn
    a2: "pawn-white",
    b2: "pawn-white",
    c2: "pawn-white",
    d2: "pawn-white",
    e2: "pawn-white",
    f2: "pawn-white",
    g2: "pawn-white",
    h2: "pawn-white",

    a3: "empty",
    b3: "empty",
    c3: "empty",
    d3: "empty",
    e3: "empty",
    f3: "empty",
    g3: "empty",
    h3: "empty",

    a4: "empty",
    b4: "empty",
    c4: "empty",
    d4: "empty",
    e4: "empty",
    f4: "empty",
    g4: "empty",
    h4: "empty",

    a5: "empty",
    b5: "empty",
    c5: "empty",
    d5: "empty",
    e5: "empty",
    f5: "empty",
    g5: "empty",
    h5: "empty",

    a6: "empty",
    b6: "empty",
    c6: "empty",
    d6: "empty",
    e6: "empty",
    f6: "empty",
    g6: "empty",
    h6: "empty",

    // black pawn
    a7: "pawn-black",
    b7: "pawn-black",
    c7: "pawn-black",
    d7: "pawn-black",
    e7: "pawn-black",
    f7: "pawn-black",
    g7: "pawn-black",
    h7: "pawn-black",
    
    a8: "rook-black",
    b8: "knight-black",
    c8: "bishop-black",
    d8: "queen-black",
    e8: "king-black",
    f8: "bishop-black",
    g8: "knight-black",
    h8: "rook-black",
}

