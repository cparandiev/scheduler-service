import React from 'react';
import { Dialog } from './Dialog';

export default ({title, show, closeOnClickHandler, onClickHandler}) => 
    const buttons = (<div>    
                        <Button bsStyle='primary' onClick={onClickHandler}>Yes</Button>
                        <Button onClick={closeOnClickHandler}>No</Button>
                    </div>);

    return (
        <Dialog 
            title={title}
            buttons={buttons}
            show={show}
        />
    )
}