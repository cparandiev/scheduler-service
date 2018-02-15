import React from 'react';
import Text from '../Table/Dts/Text';
import Label from '../Table/Dts/Label';
import Table from '../Table/Table';
import Actions from '../Table/Dts/Actions/Actions';
import '../../css/exotic-table.css';
import TasksTable from '../TasksTable/TasksTable';

const HomePage = () => {
  let data = [
    {
        id: 1,
        name: "Test2",
        startTime: "2017-11-07T17:55:00",
        timePeriod: {
          "value": 10,
          "period": 2
        },
        isActive: true,
        className: "TestCommand",
        url: "test-command.html",
        lastExecuted: "2017-10-09T17:55:31",
        lastExecutedStatus: "Success",
        username: "roberto.a",
        createdOn: "2017-09-28T08:25:28.96",
        isDeleted: true
      },
      {
        id: 2,
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
      },
      {
        id: 3,
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
];

  return (
    <div>
      <TasksTable items={data} />
    </div>
  );
};

export default HomePage;
