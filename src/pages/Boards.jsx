import * as React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {createBoard} from "../store/actions/boardActions";

const Boards = (props) => {
  const [boardHeader, setBoardHeader] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.dispatch(createBoard(boardHeader))
    setBoardHeader('')
  }

  return (
    <div>
      <div>
        {
          props.boardOrder.map(boardId => {
            const board = props.boards[boardId]
            return (
              <Link key={boardId} to={`/my_board/${boardId}`}>
                {board.title}
              </Link>
            )
          })
        }
      </div>
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <h4>Создайте доску</h4>
          <div>
            <input
              type="text"
              placeholder={'Названиие доски'}
              value={boardHeader}
              onChange={e => setBoardHeader(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  boardOrder: state.boardOrder
})

export default connect(mapStateToProps)(Boards);
