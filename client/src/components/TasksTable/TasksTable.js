import React from 'react';
import Text from '../Table/Dts/Text';
import Label from '../Table/Dts/Label';
import Table from '../Table/Table';
import Actions from '../Table/Dts/Actions/Actions';
import '../../css/exotic-table.css';


const tasksTablerowSchema = [{
    propName: "id",
    renderFunction: Text("ceco")
  },{
    propName: "name",
    renderFunction: Text("ceco")
  },{
    propName: "startTime",
    renderFunction: Text("ceco")
  },{
    propName: "isActive",
    renderFunction: Text("ceco")
  },{
    propName: "className",
    renderFunction: Text("ceco")
  },{
    propName: "lastExecuted",
    renderFunction: Text("ceco")
  },{
    propName: "lastExecutedStatus",
    renderFunction: Label({borderRadius: "82px", width: "100px"})
  },{
    propName: "username",
    renderFunction: Text("ceco")
  },{
    propName: "createdOn",
    renderFunction: Text("ceco")
  },{
    propName: "actions",
    renderFunction: Actions({marginLeft: "15px"})
  }];

const tasksTableColumnNames = [
    "Id",
    "Name",
    "Start time",
    "Active",
    "Class name",
    "Last Executed",
    "Status",
    "User",
    "Createdon",
    "Actions"
  ];

const createActions = (handlers) => ( {actions: [{
  label: "Activate",
  onClickHandler: () => handlers["activate"](),
  className: "glyphicon glyphicon-ok green"
  },{
  label: "Edit",
  onClickHandler: () => handlers["edit"](),
  className: "glyphicon glyphicon-check white"
  },{
  label: "Run",
  onClickHandler: () => handlers["run"](),
  className: "glyphicon glyphicon-play green"
  },{
  label: "Delete",
  onClickHandler: () => handlers["delete"](),
  className: "glyphicon glyphicon-trash red"
  },{
  label: "View Page",
  onClickHandler: () => handlers["view"](),
  className: "glyphicon glyphicon glyphicon-list-alt"
}]});




const TasksTable = ({items, handlers}) => {

  items = items.map((item) => Object.assign(item, createActions(handlers))); 

  return (
    <div>
      <Table
          items={items}
          rowSchema={tasksTablerowSchema}
          columnNames={tasksTableColumnNames}
          classNameTbl={"table exotic-table"}
          classNameRow={"tableRow"}
          onClickedRowHandler={() => console.log("Clicked Row")}
      />
    </div>
  )
}

export default TasksTable
