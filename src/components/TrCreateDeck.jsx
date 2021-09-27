import React from 'react';
import st from "../assets/styles/board.module.css";
import {createBoard} from "../store/actions/boardActions";
import {connect} from "react-redux";

const TrCreateDeck = (props) => {
  const [boardHeader, setBoardHeader] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (boardHeader) {
      props.dispatch(createBoard(boardHeader))
      setBoardHeader('')
    }
  }

  const handleSubmitEnter = (e) => {
    if (e.key === 'Enter') {
      if (boardHeader) {
        props.dispatch(createBoard(boardHeader))
        setBoardHeader('')
      }
    }
  }

  return (
    <div className={st.createForm}>
      <div className={st.actions}>
        <h4>Создайте доску</h4>
        <div>
          <input
            className={st.inputDeckName}
            autoFocus
            onKeyDown={e => handleSubmitEnter(e)}
            type="text"
            placeholder={'Названиие доски'}
            value={boardHeader}
            onChange={e => setBoardHeader(e.target.value)}
          />
        </div>
        <div className={st.wrapperBtn}>
          <button className={st.creatorButton} onClick={e => handleSubmit(e)}>Создать</button>
        </div>
      </div>
    </div>
  );
};

export default connect()(TrCreateDeck);
