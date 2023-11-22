import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film-data';
import { AuthorizationStatuses, LoadStatuses } from '../types/state';
import { UserData } from '../types/user-data';

export const redirectToRoute = createAction<string>('user/redirectToRoute');

export const changeGenre = createAction<{genre: string}>('changeGenre');

export const changeListFilmsByGenre = createAction('filterFilmsByGenre');

export const setListFilms = createAction<Film[]>('film/setFilms');

export const setListFilmsLoadingStatus = createAction<LoadStatuses>('data/setFilmListLoadingStatus');

export const setUserData = createAction<UserData>('user/setUserData');

export const changeAuthStatus = createAction<AuthorizationStatuses>('user/changeAuthStatus');

export const setErrorMessage = createAction<string>('request/setErrorMessage');
