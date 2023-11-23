import {combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from '../types/state';
import { userProcess } from './user-process/user-process';
import { filmProcess } from './film-process/film-process';

export const rootReducer = combineReducers({
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.film]: filmProcess.reducer,
});
