export const currentBoardReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_BOARD': {
      return action.payload
    }
    default:
      return state
  }
}