import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthorizationStatuses, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { UserData } from '../../types/user-data';
import { changeAuthStatus, redirectToRoute, setAddedComment, setUserData } from '../action';
import { FilmComment } from '../../types/open-film-data';

export const loginAction = createAsyncThunk<void, {email: string; password: string}, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async (data, {dispatch, extra: api}) => {
      const {data: userData} = await api.post<UserData>('/login', data);
      localStorage.setItem('token', JSON.stringify(userData.token));
      dispatch(setUserData(userData));
      dispatch(changeAuthStatus(AuthorizationStatuses.authorized));
      dispatch(redirectToRoute('/'));
    },
  );

export const addComment = createAsyncThunk<void, {filmId: string; comment: string; rating: number}, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/addComment',
    async (data, {dispatch, extra: api}) => {
      const {data: commentData} = await api.post<FilmComment>(`/comments/${data.filmId}`, {comment: data.comment, rating: data.rating});
      dispatch(setAddedComment(commentData));
      dispatch(redirectToRoute(`/films/${data.filmId}/reviews`));
    },
  );
