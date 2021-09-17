import * as React from 'react';
import {connect} from "react-redux";
import {Draggable, Droppable} from "react-beautiful-dnd";
import TrRecord from "./TrRecord";
import TrCreate from "./TrCreate";

const TrList = (props) => {
  return (
    <Draggable draggableId={props.listId} index={props.index}>
      {
        provided => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
            <Droppable droppableId={props.listId} type="record">
              {
                provided => (
                  <div>
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}>
                      <h4>{props.title}</h4>
                      {
                        props.records.map((rec, index) => (
                            <TrRecord
                              key={rec.id}
                              text={rec.text}
                              id={rec.id}
                              index={index}
                              listId={props.listId}/>
                          )
                        )
                      }
                      {provided.placeholder}
                      <TrCreate listId={props.listId} />
                    </div>
                  </div>
                )
              }
            </Droppable>
          </div>
        )
      }
    </Draggable>
  );
};

export default connect()(TrList);
