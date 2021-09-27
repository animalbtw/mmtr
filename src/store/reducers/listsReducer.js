import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {}
const addList = createAction('ADD_LIST')
const addRecord = createAction('ADD_RECORD')
const dragRecordToList = createAction('DND_FROM_LIST_TO_LIST')
const dragRecordInsideList = createAction('DND_INSIDE')

export const listsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addList, (state, action) => {
      const {listHeader, id, boardId, records} = action.payload
      const newList = {
        id,
        listHeader,
        boardId,
        records
      }
      return {...state, [id]: newList}
    })

    .addCase(addRecord, (state, action) => {
      const {listId, id} = action.payload
      const list = state[listId]
      list.records.push(id)
    })

    .addCase(dragRecordToList, (state, action) => {
      const {
        droppableIdStart, // id of the list where dragging started
        droppableIdEnd, // id of the list where dragging ended
        droppableIndexEnd, // index in lists where item dropped
        droppableIndexStart, // index in lists where item taken
        draggableId, // id of item that dragged
      } = action.payload
      const listDragStarted = state[droppableIdStart]
      const listDragEnded = state[droppableIdEnd]
      const record = listDragStarted.records.splice(droppableIndexStart, 1)
      listDragEnded.records.splice(droppableIndexEnd, 0, ...record)
    })

    .addCase(dragRecordInsideList, (state, action) => {
      const {
        droppableIdStart,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId
      } = action.payload
      const listDragStarted = state[droppableIdStart]
      const record = listDragStarted.records.splice(droppableIndexStart, 1)
      listDragStarted.records.splice(droppableIndexEnd, 0, ...record)
    })
})


