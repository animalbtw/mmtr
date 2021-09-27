import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import st from '../../assets/styles/boardsList.module.css'

const BoardsList = () => {
  const boards = useSelector(state => state.boards)
  const boardsOrder = useSelector(state => state.boardsOrder)

  if (boardsOrder.length === 0) {
    return (
      <div className={st.emptyDeckList}>
        Создайте первую доску
      </div>
    )
  }

  return (
    <div className={st.wrapper}>
      {
        boardsOrder.map(boardId => {
            const board = boards[boardId]
            return (
              <Link
                key={board.id}
                className={st.link}
                to={`/my_board/${board.id}`}>
                <div className={st.board}>
                  {
                    board.boardHeader
                  }
                </div>
              </Link>
            )
          }
        )
      }
    </div>
  );
};

export default BoardsList;
