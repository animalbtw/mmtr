import uuid from 'react-uuid'

export const add_board = (boardHeader) => {
  return {
    type: 'ADD_BOARD',
    payload: {
      id: uuid(),
      boardHeader,
      lists: []
    }
  }
}

export const setCurrentBoard = (id) => {
  return {
    type: 'SET_CURRENT_BOARD',
    payload: id
  }
}