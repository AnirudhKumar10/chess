import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BoardType, intitalBoardChess } from "../intial-state";
import { ChessIconType } from "../../components/Icon";

interface MoveAction {
  chessIcon: ChessIconType;
  initialPos: string;
  finalPos: string;
}

export const boardSlice = createSlice({
  name: "counter",
  initialState: {
    board: intitalBoardChess,
    activePiece: {
      pos: "",
      chessIcon: undefined
    },
  },
  reducers: {
    move: (state, action: PayloadAction<MoveAction>) => {
      // validate move
      // update state
      console.log(action.payload)
      state.board = {
        ...state.board,
        [action.payload.initialPos]: undefined,
        [action.payload.finalPos]: action.payload.chessIcon,
      };
    },
    setActivePos: (state, action: PayloadAction<any>) => {
      state.activePiece.pos = action.payload.pos
      state.activePiece.chessIcon = action.payload.chessIcon
    },
  },
});

export const { move, setActivePos } = boardSlice.actions;

export default boardSlice.reducer;
