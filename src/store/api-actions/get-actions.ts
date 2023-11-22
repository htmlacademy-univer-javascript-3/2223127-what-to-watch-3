import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthorizationStatuses, LoadStatuses, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { Film } from '../../types/film-data';
import { changeAuthStatus, setListFilms, setListFilmsLoadingStatus, setUserData } from '../action';
import { UserData } from '../../types/user-data';

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
    },
  );

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

