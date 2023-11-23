import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { UserData } from '../../types/user-data';
import { redirectToRoute } from '../action';
import { FilmComment } from '../../types/open-film-data';

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
