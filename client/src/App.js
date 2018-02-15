import React, { Component } from 'react';
import Router from './routes/Router'
import TasksTablePage from './components/TasksTable/TasksTablePage';
import './css/main.css';

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
