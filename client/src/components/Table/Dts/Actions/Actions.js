import React from 'react';
import Action from './Action';

const Actions = (style) => (actions) => {
    let index = 0;

    let actionsTds = actions.map((action) => Action(Object.assign({key: index++, style}, action)));

    return actionsTds;
};

export default Actions;
