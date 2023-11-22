import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthorizationStatuses, LoadStatuses, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { Film } from '../../types/film-data';
import { changeAuthStatus, setCommentsFilm, setCurrentFilmData, setListFilms, setListFilmsLoadingStatus, setSimilarFilms, setUserData } from '../action';
import { UserData } from '../../types/user-data';
import { FilmComment, OpenFilmData } from '../../types/open-film-data';

export const checkAuthorization = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async (_arg, {dispatch, extra: api}) => {
      const {data: userData} = await api.get<UserData>('/login');
      localStorage.setItem('token', JSON.stringify(userData.token));
      dispatch(setUserData(userData));
      dispatch(changeAuthStatus(AuthorizationStatuses.authorized));
    },
  );

export const getFilmById = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'films/getFilmById',
    async (id, {dispatch, extra: api}) => {
      dispatch(setListFilmsLoadingStatus(LoadStatuses.started));
      const {data: filmData} = await api.get<OpenFilmData>(`/films/${id}`);
      dispatch(setListFilmsLoadingStatus(LoadStatuses.ended));
      dispatch(setCurrentFilmData(filmData));
    },
  );

export const getListOfFilms = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'films/get-films',
    async (_arg, {dispatch, extra: api}) => {
      dispatch(setListFilmsLoadingStatus(LoadStatuses.started));
      const {data: listFilms} = await api.get<Film[]>('/films');
      dispatch(setListFilmsLoadingStatus(LoadStatuses.ended));
      dispatch(setListFilms(listFilms));
      dispatch(getFilmById(listFilms[0].id));
    },
  );


export const getSimilarFilms = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'films/getSimilarFilms',
    async (id, {dispatch, extra: api}) => {
      dispatch(setListFilmsLoadingStatus(LoadStatuses.started));
      const {data: similarFilmData} = await api.get<Film[]>(`/films/${id}/similar`);
      dispatch(setListFilmsLoadingStatus(LoadStatuses.ended));
      dispatch(setSimilarFilms(similarFilmData));
    },
  );

export const getFilmComments = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'films/getFilmComments',
    async (id, {dispatch, extra: api}) => {
      dispatch(setListFilmsLoadingStatus(LoadStatuses.started));
      const {data: commentsFilm} = await api.get<FilmComment[]>(`/comments/${id}`);
      dispatch(setListFilmsLoadingStatus(LoadStatuses.ended));
      dispatch(setCommentsFilm(commentsFilm));
    },
  );

