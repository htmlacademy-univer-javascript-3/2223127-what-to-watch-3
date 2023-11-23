import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import { FilmProcess, LoadStatuses, NameSpace } from '../../types/state';
import { getFilmById, getFilmComments, getListOfFilms, getSimilarFilms } from '../api-actions/get-actions';
import { InitialOpenFilmData } from '../../types/open-film-data';
import { Film } from '../../types/film-data';
import { addComment } from '../api-actions/post-action';

const initialState: FilmProcess = {
  isFilmListLoading: LoadStatuses.undefined,
  openFilmData: InitialOpenFilmData,
  filmsList: [],
  filmsByGenre: [],
  similarFilms: [],
  filmComments: [],
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
    setListFilms: (state, action: PayloadAction<Film[]>) => {
      state.filmsByGenre = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getFilmById.pending || getListOfFilms.pending || getSimilarFilms.pending || getFilmComments.pending, (state) => {
        state.isFilmListLoading = LoadStatuses.started;
      })
      .addCase(getFilmById.rejected || getListOfFilms.rejected || getSimilarFilms.rejected || getFilmComments.rejected, (state) => {
        state.isFilmListLoading = LoadStatuses.undefined;
      })
      .addCase(getFilmById.fulfilled, (state, action) => {
        state.openFilmData = action.payload;
        state.isFilmListLoading = LoadStatuses.ended;
      })
      .addCase(getListOfFilms.fulfilled, (state, action) => {
        state.filmsList = action.payload;
        state.filmsByGenre = action.payload;
        state.isFilmListLoading = LoadStatuses.ended;
      })
      .addCase(getSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isFilmListLoading = LoadStatuses.ended;
      })
      .addCase(getFilmComments.fulfilled, (state, action) => {
        state.filmComments = action.payload;
        state.isFilmListLoading = LoadStatuses.ended;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.filmComments.push(action.payload);
      });
  }
});

export const {changeGenre, changeListFilmsByGenre, setListFilms} = filmProcess.actions;
