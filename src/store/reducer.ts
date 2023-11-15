import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, changeListFilmsByGenre, setListFilms, setListFilmsLoadingStatus } from './action';
import { Film } from '../types/film-data';

type InitialState = {
  genre: string;
  isFilmListLoading: boolean;
  filmsList: Film[];
  filmsByGenre: Film[];
}

const initialState: InitialState = {
  genre: 'All genres',
  isFilmListLoading: false,
  filmsList: [],
  filmsByGenre: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      state.genre = genre;
    })
    .addCase(changeListFilmsByGenre, (state) => {
      if(state.genre === 'All genres'){
        state.filmsByGenre = state.filmsList;
      } else{
        state.filmsByGenre = state.filmsList.filter((film) => film.genre === state.genre);
      }
    })
    .addCase(setListFilms, (state, action) => {
      state.filmsList = action.payload;
      state.filmsByGenre = action.payload;
    })
    .addCase(setListFilmsLoadingStatus, (state, action) => {
      state.isFilmListLoading = action.payload;
    });
});
