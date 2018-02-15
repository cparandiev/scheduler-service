import React from 'react';

const Action = ({key, label, glyphicon, onClickHandler}) => {
  return (
    <span key={key} title={label} className={glyphicon} onClick={onClickHandler}>
      label
    </span>
  );
};

export default Action;
