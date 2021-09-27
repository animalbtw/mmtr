import uuid from 'react-uuid'

export const add_list = (listHeader) => {
  return (dispatch, getState) => {
    const boardId = getState().currentBoard
    dispatch({
      type: 'ADD_LIST',
      payload: {
        id: uuid(),
        listHeader,
        boardId,
        records: []
      }
    })
  }
}

export const dragAndDrop = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
) => {
  return {
    type: 'DRAG_AND_DROP',
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId,
    }
  }
}

export const dndFromListToList = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
) => {
  return {
    type: 'DND_FROM_LIST_TO_LIST',
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId,
    }
  }
}

export const dndInsideList = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
) => {
  return {
    type: 'DND_INSIDE',
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
    }
  }
}
