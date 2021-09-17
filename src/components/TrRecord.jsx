import * as React from 'react';
import {Draggable} from "react-beautiful-dnd";
import {connect} from "react-redux";
import {recordIsActive} from "../store/actions/recordActions";
import st from '../assets/styles/trrecord.module.css'
import {createList} from "../store/actions/listActions";

const TrRecord = (props) => {
  const [isCheckedFlag, setIsCheckedFlag] = React.useState(props.records[props.id].isChecked)

  React.useEffect(() => {
    const {dispatch} = props
    dispatch(recordIsActive(props.id, isCheckedFlag))
  }, [isCheckedFlag])


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
            <div className={st.wrapper_box}>
              <input
                type="checkbox"
                onChange={e => setIsCheckedFlag(e.target.checked)}
                defaultChecked={props.records[props.id].isChecked}
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
