export const boardsOrderReducer = (state= [], action) => {
  switch (action.type) {
    case 'ADD_BOARD': {
      const {id} = action.payload
      return [...state, id]
    }
    default:
      return state
  }
}