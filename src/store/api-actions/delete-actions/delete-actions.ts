import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../../types/state';
import { AxiosInstance } from 'axios';

export const logout = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/logout',
    async (_arg, {extra: api}) => {
      await api.delete('/logout');
      localStorage.removeItem('token');
    },
  );
