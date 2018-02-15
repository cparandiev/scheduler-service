import { Observable } from 'rxjs';
import { get } from '../../data/fakeData';
import { TASK_ACTIONS, TASK_URLS } from '../../constants/TasksConstants';
import { getAllTasksFulfilled, getAllTasksRejected } from '../../actions/taskActions'

export const getResourcesNames = action$ =>
  action$.ofType(TASK_ACTIONS.GET_ALL)
    .flatMap(action => 
        get(`${TASK_URLS.GET_ALL}`)
    )
    .map(processedData =>{ console.log(processedData); return getAllTasksFulfilled(processedData)})
    .catch(error =>
        Observable.of(getAllTasksRejected(error)));
