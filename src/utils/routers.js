import {BOARD_ROUTE, HOME_ROUTE} from "./constants";
import Boards from "../pages/Boards";
import MyBoard from "../pages/MyBoard";

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    component: Boards
  },
  {
    path: BOARD_ROUTE,
    component: MyBoard
  }
]