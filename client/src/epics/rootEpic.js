import { combineEpics } from 'redux-observable';
import { getResourcesNames } from './taskEpics'

export const rootEpic = combineEpics(getResourcesNames);

export default rootEpic;
