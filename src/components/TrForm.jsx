import * as React from 'react';

const TrForm = ({closeForm, text, onChange, children}) => {
  return (
    <div>
      <div>
        <input
          value={text}
          onChange={e => onChange(e)}
          type="text"/>
      </div>
      <div>
        {children}
        <button onMouseDown={closeForm}>Закрыть</button>
      </div>
    </div>
  );
};

export default TrForm;
