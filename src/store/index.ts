import { configureStore } from '@reduxjs/toolkit'
import boardSlice from './slice/boardSlice'

export const store = configureStore({
  reducer: {
    board: boardSlice
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;