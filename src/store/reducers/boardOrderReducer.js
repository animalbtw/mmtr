import uuid from 'react-uuid';

export const boardOrderReducer = (state=[], action) => {
  switch (action.type) {
    case 'CREATE_BOARD': {
      const {id} = action.payload
      return [...state, `b_${id}`]
    }
    default:
      return state
  }
}