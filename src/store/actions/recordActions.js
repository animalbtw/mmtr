import uuid from 'react-uuid';

export const createRecord = (text, listId) => {
  const id = uuid()
  return {
    type: 'CREATE_RECORD',
    payload: { text, listId, id }
  }
}

export const recordIsActive = (recordId, isCheckedFlag) => {
  return {
    type: 'RECORD_IS_ACTIVE',
    payload: {
      recordId,
      isCheckedFlag
    }
  }
}