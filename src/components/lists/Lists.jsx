import * as React from 'react';
import RecordCreate from "../records/RecordCreate";
import Record from "../records/Record";
import st from '../../assets/styles/lists.module.css'
import {Droppable} from "react-beautiful-dnd";

const Lists = ({list, listId, listRecords, index}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className={st.lists}>
      <Droppable droppableId={listId} direction="vertical" index={index}>
        {
          provided => (
            <div
              className={st.wrapper}>
              <h4 className={st.header}>
                {list.listHeader}
              </h4>
              <div>
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={st.list}>
                  {
                    listRecords.map((rec, index) => (
                      <Record
                        key={rec.id}
                        listId={listId}
                        rec={rec}
                        index={index}
                      />
                    ))
                  }
                  {provided.placeholder}
                </div>
                <div className={st.action}>
                  {
                    open ? (
                      <RecordCreate
                        onClose={() => setOpen(false)}
                        listId={listId}
                      />
                    ) : (
                      <button
                        className={st.btn}
                        onClick={() => setOpen(true)}>
                        Создать
                      </button>
                    )
                  }
                </div>
              </div>
            </div>
          )
        }
      </Droppable>
    </div>
  );
};

export default Lists;
