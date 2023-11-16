import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { Film } from '../../types/film-data';
import { setListFilms, setListFilmsLoadingStatus } from '../action';

export const getListOfFilms = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'films/get-films',
    async (_arg, {dispatch, extra: api}) => {
      dispatch(setListFilmsLoadingStatus(true));
      const {data: listFilms} = await api.get<Film[]>('/films');
      dispatch(setListFilmsLoadingStatus(false));
      dispatch(setListFilms(listFilms));
    },
  );
