import React from 'react';
import Text from '../Table/Dts/Text';
import Label from '../Table/Dts/Label';
import Table from '../Table/Table';
import Actions from '../Table/Dts/Actions/Actions';

const HomePage = () => {
  let data = [{
    name: "Gosho",
    age: 19,
    actions: [{
      label: "clickMeLabel",
      onClickHandler: () => console.log('Clicked!!!')
    }]

  },{
    name: "Pesho",
    age: 23,
    address: "some address"
  }];
  
  let rowSchema = [{
    propName: "name",
    renderFunction: Text("ceco"),
  },{
    propName: "age",
    renderFunction: Text("ceco")
  },{
    propName: "address",
    renderFunction: Label("glyphicon glyphicon-envelope")
  },{
    propName: "actions",
    renderFunction: Actions
  }]

  let columnNames = [
    "username",
    "age",
    "address",
    "actions"
  ]

  return (
    <div>
      <Table items={data} rowSchema={rowSchema} columnNames={columnNames}/>  
    </div>
  )
}

export default HomePage
