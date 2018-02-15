import React from 'react';

const Label = (className) => (text) => {
  return (
    <span className={className}>
        {text}
    </span>
  );
};

export default Label;
