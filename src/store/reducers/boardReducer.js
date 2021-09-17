import uuid from 'react-uuid'

const initialState = {};

export const boardReducer = (state= initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOARD': {
      const {title, id} = action.payload
      const newId = `b_${id}`
      const newBoard = {
        title,
        id: uuid(),
        lists: []
      }
      return {...state, [newId]: newBoard}
    }
    case 'CREATE_LIST': {
      const {boardId, id} = action.payload
      const board = state[boardId]
      const newListId = `l_${id}`
      board.lists = [...board.lists, newListId]
      return {...state, [boardId]: board}
    }
    case 'DRAG': {
      const {boardId} = action.payload
      const board = state[boardId]
      const lists = board.lists
      const {
        droppableIndexEnd,
        droppableIndexStart,

        type
      } = action.payload
      if (type === 'list') {
        const pullOutList = lists.splice(droppableIndexStart, 1)
        lists.splice(droppableIndexEnd, 0, ...pullOutList)
        board.lists = lists
        return {...state, [boardId]: board}
      }
      return state
    }
    default:
      return state
  }
}