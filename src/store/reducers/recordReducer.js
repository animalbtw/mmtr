const initialState = {};

export const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_RECORD': {
      const { text, listId, id } = action.payload;
      const newRecord = {
        text,
        id: `r_${id}`,
        list: listId,
        isChecked: false
      };
      return { ...state, [`r_${id}`]: newRecord };
    }
    case 'RECORD_IS_ACTIVE': {
      const {recordId, isCheckedFlag} = action.payload
      state[recordId].isChecked = isCheckedFlag
      return {...state}
    }
    default:
      return state
  }
}