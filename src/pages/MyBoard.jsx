import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentBoard} from "../store/actions/boardActions";
import ListCreate from "../components/lists/ListCreate";
import ChosenBoard from "../components/boards/ChosenBoard";

const MyBoard = (props) => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    const {id} = props.match.params
    dispatch(setCurrentBoard(id))
  }, [])

  const currentBoard = useSelector(state => state.currentBoard)
  const boards = useSelector(state => state.boards)
  const board = boards[currentBoard]

  if (!board) {
    return (
      <div>
        Такой доски не существует
      </div>
    )
  }

  const listsOrder = board.lists

  return (
    <>
      <ListCreate/>
      <ChosenBoard listsOrder={listsOrder}/>
    </>
  )
}

export default MyBoard;
