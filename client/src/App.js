import React, { Component } from 'react';
import Router from './routes/Router'
import TasksTablePage from './components/TasksTable/TasksTablePage';
import './css/main.css';

const task = {
  id: 1,
  name: "Test2",
  startTime: "2017-11-07T17:55:00",
  timePeriod: {
    "value": 10,
    "period": 2
  },
  isActive: false,
  className: "TestCommand",
  url: "test-command.html",
  lastExecuted: "2017-10-09T17:55:31",
  lastExecutedStatus: "Success",
  username: "roberto.a",
  createdOn: "2017-09-28T08:25:28.96",
  isDeleted: true
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
        <Router />
      </div>
    );
  }
}

export default App;
