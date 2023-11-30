import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import { FilmProcess, LoadStatuses, NameSpace } from '../../types/state';
import { getListOfFilms } from '../api-actions/get-actions/get-actions';
import { InitialOpenFilmData } from '../../types/open-film-data';

export const initialState: FilmProcess = {
  isFilmListLoading: LoadStatuses.undefined,
  openFilmData: InitialOpenFilmData,
  filmsList: [],
  filmsByGenre: [],
  genre: 'All genres',
};

export const filmProcess = createSlice({
  name: NameSpace.film,
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    changeListFilmsByGenre: (state) => {
      if(state.genre === 'All genres'){
        state.filmsByGenre = state.filmsList;
      } else{
        state.filmsByGenre = state.filmsList.filter((film) => film.genre === state.genre);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getListOfFilms.pending, (state) => {
        state.isFilmListLoading = LoadStatuses.started;
      })
      .addCase(getListOfFilms.rejected, (state) => {
        state.isFilmListLoading = LoadStatuses.undefined;
      })
      .addCase(getListOfFilms.fulfilled, (state, action) => {
        state.filmsList = action.payload;
        state.filmsByGenre = action.payload;
        state.isFilmListLoading = LoadStatuses.ended;
      });
  }
});

export const {changeGenre, changeListFilmsByGenre} = filmProcess.actions;
