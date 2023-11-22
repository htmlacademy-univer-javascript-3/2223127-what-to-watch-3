import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthorizationStatuses, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { changeAuthStatus } from '../action';

export const logout = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'films/getFilmComments',
    async (_arg, {dispatch, extra: api}) => {
      await api.delete('/logout');
      dispatch(changeAuthStatus(AuthorizationStatuses.undefined));
    },
  );
