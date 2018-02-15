import React from 'react';

const Row = ({data, rowSchema}) => {
  let index = 0;

  let tds = rowSchema
    .map((item) => ( data[item.propName] !== undefined ? 
      (<td key={index++}>
        {item.renderFunction(data[item.propName])}
      </td>) : 
        (<td>
          none
        </td>)
      ));

  return tds;
};

export default Row;
