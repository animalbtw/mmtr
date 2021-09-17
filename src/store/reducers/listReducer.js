const initialState = {};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_LIST': {
      const {title, id} = action.payload
      const newList = {
        title,
        id: `l_${id}`,
        records: []
      }
      return {...state, [`l_${id}`]: newList}
    }
    case 'CREATE_RECORD': {
      const { listId, id } = action.payload;
      const list = state[listId];
      console.log(list)
      list.records.push(`r_${id}`);
      return { ...state, [listId]: list };

    }
    case 'DRAG': {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        type
      } = action.payload;
      if (type === 'list') {
        return state
      }
      if (droppableIdStart === droppableIdEnd) {
        const list = state[droppableIdStart]
        const record = list.records.splice(droppableIndexStart, 1)
        list.records.splice(droppableIndexEnd, 0, ...record)
        return {...state, [droppableIndexStart]: list}
      }
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state[droppableIdStart]
        const listEnd = state[droppableIdEnd]
        const record = listStart.records.splice(droppableIndexStart, 1)
        listEnd.records.splice(droppableIndexEnd, 0, ...record)
        return {...state, [droppableIdStart]: listStart, [droppableIdEnd]: listEnd}
      }
      return state
    }
    default:
      return state
  }
}