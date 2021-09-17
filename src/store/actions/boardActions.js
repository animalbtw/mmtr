import uuid from 'react-uuid';

export const createBoard = title => {
  return {
    type: 'CREATE_BOARD',
    payload: {
      title,
      id: uuid()
    }
  }
}

export const setActiveBoard = id => {
  return {
    type: 'SET_ACTIVE_BOARD',
    payload: id
  }
}

