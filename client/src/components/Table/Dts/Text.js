import React from 'react';

const Text = (className) => (text) => {
  return (
    <div className={className}>
        {text.toString()}
    </div>
  );
};

export default Text;

