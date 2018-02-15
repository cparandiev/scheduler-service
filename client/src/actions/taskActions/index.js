import { TASK_ACTIONS } from '../../constants/TasksConstants';

export const getAllTasks = () => ({
    type: TASK_ACTIONS.GET_ALL,
    payload: { }
});

export const getAllTasksFulfilled = (data) => ({
    type: TASK_ACTIONS.GET_ALL_FULFILLED,
    payload: data
})

export const getAllTasksRejected = (error) => ({
    type: TASK_ACTIONS.GET_ALL_REJECTED,
    payload: error
})

