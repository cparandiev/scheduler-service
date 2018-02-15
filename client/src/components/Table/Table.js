import React from 'react';
import Row from './Row';

const Table = ({columnNames, items, rowSchema, classNameTbl, classNameRow, onClickedRowHandler}) => {
    let index = 0;

    let thead = columnNames.map((name) => (
        <th key={name}> {name} </th>)
    );

    let tbody = items.map((item) => (
        <tr key={index++} className={classNameRow} onClick={onClickedRowHandler}>
            <Row data={item} rowSchema={rowSchema}/>
        </tr>
    ));

    return (
        <table className={classNameTbl}>
            <thead>
                <tr>
                    {thead}
                </tr>
            </thead>
            <tbody>
                {tbody}
            </tbody>            
        </table>
    );
};

export default Table;
