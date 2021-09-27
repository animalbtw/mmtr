import * as React from 'react';
import {connect} from "react-redux";
import {add_list} from "../../store/actions/listActions";
import st from '../../assets/styles/itemCreate.module.css'

const ListCreate = (props) => {
  const [listTitle, setListTitle] = React.useState('')

  const createListEnterHandler = (e) => {
    if (listTitle) {
      if (e.key === 'Enter') {
        const {dispatch} = props
        dispatch(add_list(listTitle, props.currentBoard.id))
        setListTitle('')
      }
    }
  }

  const createListHandler = () => {
    if (listTitle) {
      const {dispatch} = props
      dispatch(add_list(listTitle, props.currentBoard.id))
      setListTitle('')
    }
  }

  return (
    <div className={st.wrapper}>
      <div className={st.actions}>
        <input
          className={st.input}
          autoFocus
          placeholder={'Название списка'}
          onKeyDown={e => createListEnterHandler(e)}
          value={listTitle}
          onChange={e => setListTitle(e.target.value)}
          type="text"
        />
        <button
          className={st.btn}
          onClick={() => createListHandler()}
        >
          Создать список
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentBoard: state.currentBoard
})

export default connect(mapStateToProps)(ListCreate);


