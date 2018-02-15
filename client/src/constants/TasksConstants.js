import {url} from './HttpConstants';

export const TASK_URLS = {
    GET_ALL: `${url}/api/DSTScheduler/`
}

export const TASK_ACTIONS = {
    GET_ALL:{
        ACTION: 'GET_ALL_ACTIONS',
        FULFILLED: `${this.ACTION}_FULFILLED`,
        REJECTED: `${this.ACTION}_REJECTED`
    },
}