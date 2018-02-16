import React from 'react';
import Text from '../Table/Dts/Text';
import Label from '../Table/Dts/Label';
import Table from '../Table/Table';
import '../../css/exotic-table.css';

const tasksTablerowSchema = [{
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
    propName: "changedOn",
    renderFunction: Text("ceco")
  }];

const tasksTableColumnNames = [
    "Start time",
    "Active",
    "Class name",
    "Last Executed",
    "Status",
    "Change by",
    "Change on"
  ];


const TaskHistoryTable = ({items}) => {  
    return (
    <tr>
        <td>
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
        </td>
    </tr>
    )
  }
  
export default TaskHistoryTable
  