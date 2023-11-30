import {createSlice} from '@reduxjs/toolkit';

import { FilmFavoriteProcess, LoadStatuses, NameSpace } from '../../types/state';
import { getFavoriteFilms } from '../api-actions/get-actions/get-actions';

const initialState: FilmFavoriteProcess = {
  isFilmListLoading: LoadStatuses.undefined,
  myList: [],
};

export const filmFavoriteProcess = createSlice({
  name: NameSpace.filmFavorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFavoriteFilms.pending, (state) => {
        state.isFilmListLoading = LoadStatuses.started;
      })
      .addCase(getFavoriteFilms.rejected, (state) => {
        state.isFilmListLoading = LoadStatuses.undefined;
      })
      .addCase(getFavoriteFilms.fulfilled, (state, action) => {
        state.myList = action.payload;
        state.isFilmListLoading = LoadStatuses.ended;
      });
  }
});
