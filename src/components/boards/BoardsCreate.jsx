import * as React from 'react';
import {connect} from "react-redux";
import {add_board} from "../../store/actions/boardActions";
import st from '../../assets/styles/itemCreate.module.css'

const BoardsCreate = (props) => {
  const [boardHeader, setBoardHeader] = React.useState('')

  const createBoardEnterHandler = (e) => {
    if (boardHeader) {
      if (e.key === 'Enter') {
        const {dispatch} = props
        dispatch(add_board(boardHeader))
        setBoardHeader('')
      }
    }
  }

  const createBoardHandler = () => {
    if (boardHeader) {
      const {dispatch} = props
      dispatch(add_board(boardHeader))
      setBoardHeader('')
    }
  }

  return (
    <div className={st.wrapper}>
      <div className={st.actions}>
        <input
          placeholder={'Название доски...'}
          className={st.input}
          type="text"
          autoFocus
          value={boardHeader}
          onKeyDown={e => createBoardEnterHandler(e)}
          onChange={e => setBoardHeader(e.target.value)}
        />
        <button
          className={st.btn}
          onClick={() => createBoardHandler()}
        >
          Создать
        </button>
      </div>
    </div>
  );
};

export default connect()(BoardsCreate);
