import * as React from 'react';
import {Draggable} from "react-beautiful-dnd";
import {connect} from "react-redux";
import {recordIsActive} from "../store/actions/recordActions";

const TrRecord = (props) => {
  const [isCheckedFlag, setIsCheckedFlag] = React.useState(false)

  React.useEffect(() => {
    const {dispatch} = props
    dispatch(recordIsActive(props.id, isCheckedFlag))
  }, [isCheckedFlag])

  return (
    <Draggable draggableId={props.id} index={props.index}>
      {
        provided => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
            <div>
              {props.text}
            </div>
            <div>
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
