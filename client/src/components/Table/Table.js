import React from 'react';
import Row from './Row';

const Table = ({columnNames, items, rowSchema}) => {
    let index = 0;

    let thead = columnNames.map((name) => (
        <td key={name}> {name} </td>)
    );

    let tbody = items.map((item) => (
        <tr key={index++}>
            <Row data={item} rowSchema={rowSchema}/>
        </tr>
    ));

    return (
        <table>
            <tr>
                {thead}
            </tr>
                {tbody}
        </table>
    );
};

export default Table;
