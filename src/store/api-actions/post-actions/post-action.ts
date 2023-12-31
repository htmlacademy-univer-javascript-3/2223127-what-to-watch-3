import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../../types/state';
import { AxiosInstance } from 'axios';
import { UserData } from '../../../types/user-data';
import { redirectToRoute } from '../../action';
import { FilmComment } from '../../../types/open-film-data';
import { Film } from '../../../types/film-data';
import { getFilmById } from '../get-actions/get-actions';

export const loginAction = createAsyncThunk<UserData, {email: string; password: string}, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async (data, {dispatch, extra: api}) => {
      const {data: userData} = await api.post<UserData>('/login', data);
      localStorage.setItem('token', JSON.stringify(userData.token));
      dispatch(redirectToRoute('/'));
      return userData;
    },
  );

export const addComment = createAsyncThunk<FilmComment, {filmId: string; comment: string; rating: number}, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'film/addComment',
    async (data, {dispatch, extra: api}) => {
      const {data: commentData} = await api.post<FilmComment>(`/comments/${data.filmId}`, {comment: data.comment, rating: data.rating});
      dispatch(redirectToRoute(`/films/${data.filmId}/reviews`));
      return commentData;
    },
  );

export const changeFavoriteStatus = createAsyncThunk<void, {filmId: string; status: number}, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'film/changeFavoriteStatus',
    async (data, {dispatch, extra: api}) => {
      await api.post<Film>(`/favorite/${data.filmId}/${data.status}`);
      if(data.status === 1){
        dispatch(getFilmById(data.filmId));
        dispatch(redirectToRoute('/mylist'));
      }
    },
  );
