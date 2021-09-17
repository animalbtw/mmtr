import * as React from 'react';
import {connect} from "react-redux";
import {sort} from "../store/actions/listActions";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import TrList from "../components/TrList";
import TrCreate from "../components/TrCreate";
import {setActiveBoard} from "../store/actions/boardActions";
import st from '../assets/styles/myboard.module.css'

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
      <div className={st.wrapper}>
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
                className={st.lists}
                {...provided.droppableProps}
                ref={provided.innerRef}>
                <div className={st.lists_item}>
                {
                  listOrder.map((listId, index) => {
                    const list = props.lists[listId]
                    if (list) {
                      const listRecords = list.records.map((recordId) => props.records[recordId])
                      return (
                        <div className={st.list} key={list.id} >
                          <TrList
                            listId={list.id}
                            title={list.title}
                            records={listRecords}
                            index={index}
                          />
                        </div>
                      )
                    }
                  })
                }
                {provided.placeholder}
                <TrCreate list/>
                </div>
              </div>
            )
          }
        </Droppable>
      </div>
    </DragDropContext>
  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  lists: state.lists,
  records: state.records,
});

export default connect(mapStateToProps)(MyBoard);
