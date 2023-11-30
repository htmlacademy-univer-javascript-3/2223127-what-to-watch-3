import {createSlice} from '@reduxjs/toolkit';

import { LoadStatuses, NameSpace, OpenFilmProcess } from '../../types/state';
import { getFilmById, getFilmComments, getSimilarFilms } from '../api-actions/get-actions/get-actions';
import { InitialOpenFilmData } from '../../types/open-film-data';
import { addComment } from '../api-actions/post-actions/post-action';

const initialState: OpenFilmProcess = {
  isFilmListLoading: LoadStatuses.undefined,
  openFilmData: InitialOpenFilmData,
  similarFilms: [],
  filmComments: [],
};

export const openFilmProcess = createSlice({
  name: NameSpace.openFilm,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFilmById.pending, (state) => {
        state.isFilmListLoading = LoadStatuses.started;
      })
      .addCase(getFilmById.rejected, (state) => {
        state.isFilmListLoading = LoadStatuses.undefined;
      })
      .addCase(getFilmById.fulfilled, (state, action) => {
        state.openFilmData = action.payload;
        state.isFilmListLoading = LoadStatuses.ended;
      })
      .addCase(getSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(getFilmComments.fulfilled, (state, action) => {
        state.filmComments = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.filmComments.push(action.payload);
      });
  }
});
