import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthorizationStatuses, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { UserData } from '../../types/user-data';
import { changeAuthStatus, redirectToRoute, setUserData } from '../action';

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
