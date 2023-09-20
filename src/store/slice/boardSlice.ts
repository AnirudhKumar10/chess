import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { intitalBoardChess } from "../intial-state";
import {
  ActivePiece,
  ChessBoardState,
  Move,
  Validation,
  square,
} from "../../utils/types";

export const boardSlice = createSlice({
  name: "counter",
  initialState: {
    board: intitalBoardChess,
    validation: {},
    activePiece: {
      piece: {},
      from: "" as square,
    },
  } as ChessBoardState,
  reducers: {
    move: (state, action: PayloadAction<Move>) => {
      state.board = {
        ...state.board,
        [action.payload.from]: undefined,
        [action.payload.to]: action.payload.piece,
      };
    },
    activePiece: (state, action: PayloadAction<ActivePiece>) => {
      state.activePiece = {
        from: action.payload.from,
        piece: action.payload.piece,
      };
    },
    validationSquare: (state, action: PayloadAction<Validation>) => {
      state.validation = {
        ...action.payload,
      };
    },
  },
});

export const { move, activePiece, validationSquare } = boardSlice.actions;

export default boardSlice.reducer;
