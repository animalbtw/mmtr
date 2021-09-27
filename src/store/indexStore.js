import {boardsReducer} from "./reducers/boardsReducer";
import {listsReducer} from "./reducers/listsReducer";
import {recordsReducer} from "./reducers/recordsReducer";
import {currentBoardReducer} from "./reducers/currentBoardReducer";
import {boardsOrderReducer} from "./reducers/boardsOrderReducer";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    lists: listsReducer,
    records: recordsReducer,
    currentBoard: currentBoardReducer,
    boardsOrder: boardsOrderReducer
  }
})
