import uuid from 'react-uuid'

export const createList = (title) => {
  return(dispatch, getState) => {
    const boardId = getState().activeBoard
    dispatch({
      type: 'CREATE_LIST',
      payload: {
        title,
        boardId,
        id: uuid()
      }
    })
  }
}

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return (dispatch, getState) => {
    const boardId = getState().activeBoard
    dispatch({
      type: 'DRAG',
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
        boardId
      }
    })
  }
}