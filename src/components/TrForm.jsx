import * as React from 'react';
import {createList} from "../store/actions/listActions";
import {connect} from "react-redux";
import {createRecord} from "../store/actions/recordActions";
import st from '../assets/styles/form.module.css'

const TrForm = ({list, closeForm, text, onChange, children, dispatch, setText, listId}) => {

  const handleCreateEnter = (e) => {
    if (e.key === 'Enter') {
      if (list) {
        dispatch(createList(text))
        setText('')
      } else {
        dispatch(createRecord(text, listId))
        setText('')
      }
    }
  }

  return (
    <div className={st.wrapper}>
      <div>
        <input
          className={st.input}
          onKeyDown={e => handleCreateEnter(e)}
          autoFocus
          value={text}
          onChange={e => onChange(e)}
          type="text"/>
      </div>
      <div className={st.btns}>
        {children}
        <button className={st.buttonClose} onMouseDown={closeForm}>Закрыть</button>
      </div>
    </div>
  );
};

export default connect()(TrForm);
