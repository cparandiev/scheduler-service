import React, { Component } from 'react';
import UpsertTaskDialog from './UpsertTaskDialog';

class TasksTablePage extends Component {
    constructor(){
        super()
      
        this.state = {
            showAddNewTaskDialog: false
        };
      }
      
    closeOnClickHandler(){
        this.setState({ showAddNewTaskDialog: false });
    }
      
    addTaskOnClickHandler(){
        this.setState({ showAddNewTaskDialog: true });
    }

    render() {
        const upsertTaskDialog = (<UpsertTaskDialog 
                                    show={this.state.showAddNewTaskDialog}
                                    onClickHandler={this.addTaskOnClickHandler.bind(this)}
                                    closeOnClickHandler={this.closeOnClickHandler.bind(this)}
                                />)
        return (
                <div>
                    <button onClick={this.addTaskOnClickHandler.bind(this)}>Click</button>
                    {upsertTaskDialog}
                </div>
        );
    }
}

export default TasksTablePage;