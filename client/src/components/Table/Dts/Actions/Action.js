import React from 'react';

const onClickHandlerWithStopPropagation = (onClickHandler) => (e) => {
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
  onClickHandler(e);
}

const Action = ({key, label, className, onClickHandler, style}) => {
  
  return (
    <span key={key} title={label} className={className} onClick={onClickHandlerWithStopPropagation(onClickHandler)} style={style} />
  );
};

export default Action;
