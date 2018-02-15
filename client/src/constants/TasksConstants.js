import {url} from './HttpConstants';

export const TASK_URLS = {
    GET_ALL: `${url}/api/DSTScheduler/`
}

export const TASK_ACTIONS = {
    GET_ALL: 'GET_ALL_ACTIONS',
    GET_ALL_FULFILLED: 'GET_ALL_ACTIONS_FULFILLED',
    GET_ALL_REJECTED: 'GET_ALL_ACTIONS_REJECTED'
}