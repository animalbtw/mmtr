import * as React from 'react';
import {connect} from "react-redux";
import {sort} from "../store/actions/listActions";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import TrList from "../components/TrList";
import TrCreate from "../components/TrCreate";
import {setActiveBoard} from "../store/actions/boardActions";

const MyBoard = (props) => {
  React.useEffect(() => {
    const {id} = props.match.params
    props.dispatch(setActiveBoard(id))
  }, [])

  const onDragEnd = result => {
    const {destination, source, draggableId, type} = result
    if (!destination) {
      return
    }
    props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ))
  }

  const {id} = props.match.params
  const board = props.boards[id]
  const listOrder = board.lists
  if(!board) {
    return (
      <div>
        Досок нет
      </div>
    )
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <h3>{board.title}</h3>
      </div>
      <Droppable
        droppableId="all-lists"
        direction="horizontal"
        type="list">
        {
          provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {
                listOrder.map((listId, index) => {
                  const list = props.lists[listId]
                  if (list) {
                    const listRecords = list.records.map((recordId) => props.records[recordId])
                    return (
                      <TrList
                        listId={list.id}
                        key={list.id}
                        title={list.title}
                        records={listRecords}
                        index={index}
                      />
                    )
                  }
                })
              }
              {provided.placeholder}
              <TrCreate list/>
            </div>
          )
        }
      </Droppable>
    </DragDropContext>
  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  lists: state.lists,
  records: state.records,
});

export default connect(mapStateToProps)(MyBoard);
