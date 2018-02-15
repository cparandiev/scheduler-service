import { Observable } from 'rxjs';

export const process = (action, {FULFILLED, REJECTED}) => action
            .map(processedData => ({type: FULFILLED, payload: processedData}))
            .catch(error => Observable.of({type: REJECTED, payload: error}));
