export const setCurrentBoard = (state = null, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_BOARD': {
      return action.payload
    }
    default:
      return state
  }
}