import {combineReducers} from "redux";
import {boardReducer} from "./boardReducer";
import {listReducer} from "./listReducer";
import {recordReducer} from "./recordReducer";
import {setCurrentBoard} from "./currentBoardReducer";
import {boardOrderReducer} from "./boardOrderReducer";

export const rootReducer = combineReducers({
  boards: boardReducer,
  lists: listReducer,
  records: recordReducer,
  activeBoard: setCurrentBoard,
  boardOrder: boardOrderReducer
})