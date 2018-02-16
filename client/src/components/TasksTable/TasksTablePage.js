import React, { Component } from 'react';
import { connect } from 'react-redux';
import UpsertTaskDialog from './UpsertTaskDialog';
import TasksTable from './TasksTable'
import { DeleteAction } from './ActionDialogs/ActionDialog'
import { getAllTasks } from '../../actions/taskActions'

class TasksTablePage extends Component {
    constructor(){
        super()
      
        this.state = {
            showAddNewTaskDialog: false
        };
      }
    
    componentDidMount() {
        this.props.dispatch(getAllTasks());
     } 
      
    closeOnClickHandler(){
        this.setState({ showAddNewTaskDialog: false });
    }
      
    addTaskOnClickHandler(){
        this.setState({ showAddNewTaskDialog: true });
    }

    render() {
        const upsertTaskDialog = (<UpsertTaskDialog 
                                    task={{}}
                                    show={this.state.showAddNewTaskDialog}
                                    onClickHandler={this.addTaskOnClickHandler.bind(this)}
                                    closeOnClickHandler={this.closeOnClickHandler.bind(this)}
                                />)     
        // const deleteDialog = (<)                                                   
        return (
                <div>
                    <button onClick={this.addTaskOnClickHandler.bind(this)}>Click</button>
                    {upsertTaskDialog}
                    <TasksTable items={this.props.tasks}/>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    tasks: state.tasksReducer.tasks,
});

export default connect(mapStateToProps)(TasksTablePage);