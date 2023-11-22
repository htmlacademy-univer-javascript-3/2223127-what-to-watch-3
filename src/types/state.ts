import {store} from '../store/index.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export enum LoadStatuses {
    undefined = 'undefined',
    started = 'started',
    ended = 'ended'
}

export enum AuthorizationStatuses {
    undefined = 'undefined',
    authorized = 'authorized',
    notAuthorized = 'not authorized'
}
