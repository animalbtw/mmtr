import * as React from 'react';
import TrForm from "./TrForm";
import {connect} from "react-redux";
import {createList} from "../store/actions/listActions";
import {createRecord} from "../store/actions/recordActions";

const TrCreate = (props) => {
  const [open, setOpen] = React.useState(false)
  const [text, setText] = React.useState('')

  const handleListCreate = () => {
    if (text) {
      props.dispatch(createList(text))
      setText('')
    }
  }
  const handleRecordCreate = () => {
    if (text) {
      props.dispatch(createRecord(text, props.listId))
      setText('')
    }
  }

  return (
    <div>
      {
        open ? (
          <TrForm
            text={text}
            onChange={e => setText(e.target.value)}
            closeForm={() => setOpen(false)}
          >
            <button
              onClick={props.list ? handleListCreate: handleRecordCreate}
            >
              {
                props.list ? 'Добавить список' : 'Добавить запись'
              }
            </button>
          </TrForm>
        ) : (
          <button onClick={() => setOpen(true)}>
            {
              props.list ? 'Добавить список' : 'Добавить запись'
            }
          </button>
        )
      }
    </div>
  );
};

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(TrCreate);
