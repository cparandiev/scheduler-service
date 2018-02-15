import React from 'react';
import { Input } from '../Common/Input'

export default ({task}) => {    
    const options =  [{value: 'Hour'}, {value: 'Day'}, {value: 'Week'}, {value: 'Month'}];
    if(task.timePeriod){
        options[task.timePeriod.period].selected = true;
    }

    return (
        <form>
            <Input 
                controlId='test'
                label='Name:'
                glyph='user'
                value={task.name}
            />
            <Input 
                controlId='Class Name:'
                label='Class Name::'
                glyph='file'
                value={task.className}
            />
            <Input 
                controlId='Тime Period Value:'
                label='Тime Period Value:'
                glyph='time'
                value={task.timePeriod && task.timePeriod.value}
            />
            <Input            
                controlId='Page Url:'
                label='Page Url:'
                glyph='search'
                value={task.url}
            />
            <Input            
                controlId='Time Period:'
                label='Time Period:'
                glyph='calendar'
                options={options}
            />
        </form>
    )
}