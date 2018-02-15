import React, { Component } from 'react';
import { Dialog } from '../Common/Dialog'
import { Button } from 'react-bootstrap'
import UpsertTaskForm from './UpsertTaskForm'


const UpsertTaskDialog = ({ task, onClickHandler, closeOnClickHandler, show }) => {
        const title = task ? 'Update task' : 'Create new task';   
        const body = (<UpsertTaskForm task={task || {}} />)
        const buttons = (<div>    
                            <Button bsStyle='primary' onClick={onClickHandler}>Add</Button>
                            <Button onClick={closeOnClickHandler}>Close</Button>
                        </div>);

        return (
            <Dialog 
                title={title}
                body={body}
                buttons={buttons}
                show={show}
            />
        )        
}

export default UpsertTaskDialog;