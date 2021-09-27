import * as React from 'react';
import {useDispatch} from "react-redux";
import {isChecked} from "../../store/actions/recordActions";
import st from '../../assets/styles/record.module.css'
import {Draggable} from "react-beautiful-dnd";

const Record = ({rec, index}) => {
  const dispatch = useDispatch()

  const setIsChecked = () => {
    dispatch(isChecked(rec.id))
  }

  return (
    <Draggable
      draggableId={rec.id}
      index={index}
    >
      {
        (provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={st.wrapper}>
            <div className={rec.isComplete ? (st.header) : (st.completeHeader) }>
              {rec.text}
            </div>
            <div className={st.action}>
              <input
                className={st.input}
                type="checkbox"
                defaultChecked={rec.isComplete}
                onChange={e => setIsChecked(e)}
              />
            </div>
          </div>
        )
      }
    </Draggable>
  );
};

export default Record;