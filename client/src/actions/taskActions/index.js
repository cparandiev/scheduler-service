import { TASK_ACTIONS } from '../../constants/TasksConstants';

export const getAllTasks = () => ({
    type: TASK_ACTIONS.GET_ALL.ACTION,
    payload: { }
});

export const addTask = () => ({
    type: TASK_ACTIONS.GET_ALL,
    payload: { }
});
