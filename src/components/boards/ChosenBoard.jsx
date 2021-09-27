import * as React from 'react';
import Lists from "../lists/Lists";
import {useDispatch, useSelector} from "react-redux";
import st from '../../assets/styles/chosenBoard.module.css'
import {DragDropContext} from "react-beautiful-dnd";
import {dndFromListToList, dndInsideList} from "../../store/actions/listActions";


const ChosenBoard = ({listsOrder}) => {
  const lists = useSelector(state => state.lists)
  const records = useSelector(state => state.records)
  const dispatch = useDispatch()

  const onDragEnd = result => {
    const {destination, source, draggableId} = result
    if (!destination) {
      return
    }
    if (source.droppableId !== destination.droppableId) {
      dispatch(dndFromListToList(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      ))
    }
    if (source.index !== destination.index &&
      source.droppableId === destination.droppableId) {
      dispatch(dndInsideList(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      ))
    }
  }

  return (
    <DragDropContext
      onDragEnd={result => onDragEnd(result)}
    >
      <div className={st.wrapper}>
        {
          listsOrder.map((listId, index) => {
              const list = lists[listId]
              if (list) {
                const listRecords = list.records.map((recordId) => records[recordId])
                return (
                  <div key={listId}>
                    <Lists
                      key={list.id}
                      list={list}
                      listId={list.id}
                      listRecords={listRecords}
                      index={index}
                    />
                  </div>
                )
              }
            }
          )
        }
      </div>
    </DragDropContext>
  );
};

export default ChosenBoard;