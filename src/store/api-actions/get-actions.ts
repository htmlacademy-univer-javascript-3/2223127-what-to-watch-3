import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { Film } from '../../types/film-data';
import { UserData } from '../../types/user-data';
import { FilmComment, OpenFilmData } from '../../types/open-film-data';

export const checkAuthorization = createAsyncThunk<UserData, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async (_arg, {extra: api}) => {
      const {data: userData} = await api.get<UserData>('/login');
      return userData;
    },
  );

export const getFilmById = createAsyncThunk<OpenFilmData, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'films/getFilmById',
    async (id, {extra: api}) => {
      const {data: filmData} = await api.get<OpenFilmData>(`/films/${id}`);
      return filmData;
    },
  );

export const getListOfFilms = createAsyncThunk<Film[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'films/getFilms',
    async (_arg, {dispatch, extra: api}) => {
      const {data: listFilms} = await api.get<Film[]>('/films');
      dispatch(getFilmById(listFilms[0].id));
      return listFilms;
    },
  );


export const getSimilarFilms = createAsyncThunk<Film[], string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'films/getSimilarFilms',
    async (id, {extra: api}) => {
      const {data: similarFilmData} = await api.get<Film[]>(`/films/${id}/similar`);
      return similarFilmData;
    },
  );

export const getFilmComments = createAsyncThunk<FilmComment[], string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'films/getFilmComments',
    async (id, {extra: api}) => {
      const {data: commentsFilm} = await api.get<FilmComment[]>(`/comments/${id}`);
      return commentsFilm;
    },
  );

export const getFavoriteFilms = createAsyncThunk<Film[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'films/getFavoriteFilms',
    async (_arg, {extra: api}) => {
      const {data: favoriteFilms} = await api.get<Film[]>('/favorite');
      return favoriteFilms;
    },
  );

