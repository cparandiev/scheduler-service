import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers/rootReducer';
import { rootEpic } from '../epics/rootEpic';

const loggerMiddleware = createLogger();

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware, loggerMiddleware)));

export default store;
