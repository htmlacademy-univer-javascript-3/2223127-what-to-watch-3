import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film-data';

export const changeGenre = createAction<{genre: string}>('changeGenre');

export const changeListFilmsByGenre = createAction('filterFilmsByGenre');

export const setListFilms = createAction<Film[]>('film/setFilms');

export const setListFilmsLoadingStatus = createAction<boolean>('data/setFilmListLoadingStatus');
