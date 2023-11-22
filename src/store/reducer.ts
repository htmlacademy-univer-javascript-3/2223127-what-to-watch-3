import { createReducer } from '@reduxjs/toolkit';
import { changeAuthStatus, changeGenre, changeListFilmsByGenre, setAddedComment, setCommentsFilm, setCurrentFilmData, setErrorMessage, setListFilms, setListFilmsLoadingStatus, setSimilarFilms, setUserData } from './action';
import { Film } from '../types/film-data';
import { AuthorizationStatuses, LoadStatuses } from '../types/state';
import { InitialUserData, UserData } from '../types/user-data';
import { FilmComment, InitialOpenFilmData, OpenFilmData } from '../types/open-film-data';

type InitialState = {
  errorMessage: string;
  genre: string;
  isFilmListLoading: LoadStatuses;
  filmsList: Film[];
  filmsByGenre: Film[];
  authorizationStatus: AuthorizationStatuses;
  userData: UserData;
  openFilmData: OpenFilmData;
  similarFilms: Film[];
  filmComments: FilmComment[];
}

const initialState: InitialState = {
  errorMessage: '',
  authorizationStatus: AuthorizationStatuses.undefined,
  userData: InitialUserData,
  genre: 'All genres',
  isFilmListLoading: LoadStatuses.undefined,
  filmsList: [],
  filmsByGenre: [],
  openFilmData: InitialOpenFilmData,
  similarFilms: [],
  filmComments: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setErrorMessage, (state, action) => {
      state.errorMessage = action.payload;
    })
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
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(changeAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setCurrentFilmData, (state, action) => {
      state.openFilmData = action.payload;
    })
    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(setCommentsFilm, (state, action) => {
      state.filmComments = action.payload;
    })
    .addCase(setAddedComment, (state, action) => {
      state.filmComments.push(action.payload);
    });
});
