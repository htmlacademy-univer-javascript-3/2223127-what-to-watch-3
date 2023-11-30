import {combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from '../types/state';
import { userProcess } from './user-process/user-process';
import { filmProcess } from './film-process/film-process';
import { openFilmProcess } from './open-film-process/open-film-process';
import { filmFavoriteProcess } from './favorite-film-process/film-favorite-process';

export const rootReducer = combineReducers({
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.film]: filmProcess.reducer,
  [NameSpace.openFilm]: openFilmProcess.reducer,
  [NameSpace.filmFavorite]: filmFavoriteProcess.reducer,
});
