import { Observable } from 'rxjs';

const tasks = [
    {
        id: 1,
        name: "Test4",
        startTime: "2017-11-07T17:55:00",
        timePeriod: {
          "value": 10,
          "period": 2
        },
        isActive: false,
        className: "TestCommand",
        url: "test-command.html",
        lastExecuted: "2017-10-09T17:55:31",
        lastExecutedStatus: "Success",
        username: "roberto.a",
        createdOn: "2017-09-28T08:25:28.96",
        isDeleted: true
      },
      {
        id: 2,
        name: "Test2",
        startTime: "2017-11-07T17:55:00",
        timePeriod: {
          "value": 10,
          "period": 2
        },
        isActive: false,
        className: "TestCommand",
        url: "test-command.html",
        lastExecuted: "2017-10-09T17:55:31",
        lastExecutedStatus: "Success",
        username: "roberto.a",
        createdOn: "2017-09-28T08:25:28.96",
        isDeleted: true
      },
      {
        id: 3,
        name: "Test2",
        startTime: "2017-11-07T17:55:00",
        timePeriod: {
          "value": 10,
          "period": 2
        },
        isActive: false,
        className: "TestCommand",
        url: "test-command.html",
        lastExecuted: "2017-10-09T17:55:31",
        lastExecutedStatus: "Success",
        username: "roberto.a",
        createdOn: "2017-09-28T08:25:28.96",
        isDeleted: true
      }
]
  


function performRequest(method, url) {
    let data;

    if (method === 'GET' && url.split('/').slice(-2)[0] === 'DSTScheduler') {
        data = tasks
    }

    return Observable.fromPromise(new Promise((resolve) => {
        setTimeout(() => resolve(data), 1000);
    }));
}

export const get = (url, data, locators, headers) =>
    performRequest('GET', url, data, locators, headers);

export const post = (url, data, locators, headers) =>
    performRequest('POST', url, data, locators, headers);

export const put = (url, data, locators, headers) =>
    performRequest('PUT', url, data, locators, headers);

export const del = (url, data, locators, headers) =>
    performRequest('DELETE', url, data, locators, headers);