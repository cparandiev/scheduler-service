import React from 'react';
import { FormGroup, FormControl, InputGroup, ControlLabel, Glyphicon } from 'react-bootstrap';

export const Input = ({controlId, input, value, glyph, handleClick, options, placeholder, type, right, label}) => {
    const control =  !options 
                    ? (<FormControl {...input} defaultValue={value} placeholder={placeholder} type={type || 'text'} />)
                    :(
                    <FormControl componentClass="select" placeholder="select">
                        {options.map((option, index) => {
                            const {value, displayValue, selected} = option;
                            return (<option key={index} value={value} selected={selected}>{displayValue || value}</option>);
                        })}
                    </FormControl>
                    );

    const render = glyph 
                 ? (
                    <InputGroup>
                        {right && control }
                        <InputGroup.Addon onClick={handleClick}>
                            <Glyphicon glyph={glyph} />
                        </InputGroup.Addon>
                        {!right && control }
                    </InputGroup>) 
                : (control);

    return (
        <FormGroup controlId={controlId}>
            {label && <ControlLabel>{label}</ControlLabel>}
            {render}  
        </FormGroup>
    );
}
