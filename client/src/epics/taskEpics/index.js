import { get } from '../../data/fakeData';
import { TASK_ACTIONS, TASK_URLS } from '../../constants/TasksConstants';
import { getAllTasksFulfilled, getAllTasksRejected } from '../../actions/taskActions';
import { process } from '../epicsHelper';

export const getResourcesNames = action$ => {
    const { GET_ALL } = TASK_ACTIONS;
    const URL = TASK_URLS.GET_ALL
    const action = action$.ofType(GET_ALL.ACTION).flatMap(action => get(URL));
    
    return process(action, GET_ALL);      
}