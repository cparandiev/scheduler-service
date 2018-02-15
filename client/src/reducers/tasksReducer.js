import { TASK_ACTIONS } from '../constants/TasksConstants';

const initialState = {
    tasks: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TASK_ACTIONS.GET_ALL_FULFILLED: {
            return {
                tasks: [...payload]
            }
        }
        default: {
            return {
                ...state
            };
        }
    }
};
