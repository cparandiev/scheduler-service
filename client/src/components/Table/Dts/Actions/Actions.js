import React from 'react';
import Action from './Action';

const Actions = (actions) => {
    let index = 0;

    let actionsTds = actions.map((action) => Action(Object.assign({key: index++}, action)));

    return actionsTds;
};

export default Actions;
