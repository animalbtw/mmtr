import uuid from 'react-uuid'

export const add_record = (listId, text) => {
  return {
    type: 'ADD_RECORD',
    payload: {
      id: uuid(),
      text,
      listId,
      isComplete: true
    }
  }
}

export const isChecked = (recordId) => {
  return {
    type: 'COMPLETE_RECORD',
    payload: {recordId}
  }
}