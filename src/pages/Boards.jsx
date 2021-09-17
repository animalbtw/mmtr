import * as React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {createBoard} from "../store/actions/boardActions";
import st from '../assets/styles/board.module.css'

const Boards = (props) => {
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
  console.log(props.boardOrder)
  return (
    <div className={st.wrapper}>
      <div className={st.wrapper_createForm}>
        <div className={st.container_actions}>
          <h4>Создайте доску</h4>
          <div>
            <input
              className={st.action_input}
              autoFocus
              onKeyDown={e => handleSubmitEnter(e)}
              type="text"
              placeholder={'Названиие доски'}
              value={boardHeader}
              onChange={e => setBoardHeader(e.target.value)}
            />
          </div>
          <div className={st.action_wrapperBtn}>
            <button className={st.action_button} onClick={e => handleSubmit(e)}>Создать</button>
          </div>
        </div>
      </div>
      <div className={st.wrapper_boardList}>
        <h3>Ваши доски:</h3>
        <div className={st.boardList_container}>
          {
            props.boardOrder.length <= 0 ? (
              <div>
                Создайте первую доску
              </div>
            ) : (
              <>
                {
                  props.boardOrder.map(boardId => {
                    const board = props.boards[boardId]
                    return (
                      <Link
                        key={boardId}
                        className={st.boardList_item_title}
                        to={`/my_board/${boardId}`}>
                        <div
                          className={st.wrapper_boardList_item}>
                          {board.title}
                        </div>
                      </Link>
                    )
                  })
                }
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  boardOrder: state.boardOrder
})

export default connect(mapStateToProps)(Boards);
