import * as React from 'react';
import {Draggable} from "react-beautiful-dnd";
import {connect} from "react-redux";
import {recordIsActive} from "../store/actions/recordActions";
import st from '../assets/styles/trrecord.module.css'

const TrRecord = (props) => {

  const setIsChecked = () => {
    const {dispatch} = props
    dispatch(recordIsActive(props.id, props.isChecked))
  }

  return (
    <Draggable draggableId={props.id} index={props.index}>
      {
        provided => (
          <div
            className={st.wrapper}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
            <div>
              {props.text}
            </div>
            <div className={st.actionBox}>
              <input
                type="checkbox"
                onChange={(e) => setIsChecked(e)}
                defaultChecked={props.isChecked}
              />
            </div>
          </div>
        )
      }
    </Draggable>
  );
};

const mapStateToProps = state => ({
  records: state.records
})

export default connect(mapStateToProps)(TrRecord);
