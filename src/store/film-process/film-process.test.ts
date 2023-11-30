import { InitialOpenFilmData } from '../../types/open-film-data';
import { LoadStatuses } from '../../types/state';
import { makeFakeFilmData } from '../../utils/mocks';
import { changeGenre, changeListFilmsByGenre, filmProcess } from './film-process';


describe('FilmProcess slice', () => {

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isFilmListLoading: LoadStatuses.started,
      openFilmData: InitialOpenFilmData,
      filmsList: [],
      filmsByGenre: [],
      genre: 'action',};

    const result = filmProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isFilmListLoading: LoadStatuses.undefined,
      openFilmData: InitialOpenFilmData,
      filmsList: [],
      filmsByGenre: [],
      genre: 'All genres',};

    const result = filmProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change genre with "changeGenre" action', () => {
    const initialState = {
      isFilmListLoading: LoadStatuses.undefined,
      openFilmData: InitialOpenFilmData,
      filmsList: [],
      filmsByGenre: [],
      genre: 'All genres',};
    const expectedGenre = 'action';

    const result = filmProcess.reducer(initialState, changeGenre(expectedGenre));

    expect(result.genre).toEqual(expectedGenre);
  });

  it('should change list films by genre with "changeListFilmsByGenre" action', () => {
    const initialState = {
      isFilmListLoading: LoadStatuses.undefined,
      openFilmData: InitialOpenFilmData,
      filmsList: new Array(100).fill(null).map(() => makeFakeFilmData()),
      filmsByGenre: [],
      genre: 'Fantasy',};
    const expectedList = initialState.filmsList.filter((film) => film.genre === initialState.genre);

    const result = filmProcess.reducer(initialState, changeListFilmsByGenre());

    expect(result.filmsByGenre).toEqual(expectedList);
  });

  it('should set default list films by genre with "changeListFilmsByGenre" with "All genres" action', () => {
    const initialState = {
      isFilmListLoading: LoadStatuses.undefined,
      openFilmData: InitialOpenFilmData,
      filmsList: new Array(100).fill(null).map(() => makeFakeFilmData()),
      filmsByGenre: [],
      genre: 'All genres',};

    const result = filmProcess.reducer(initialState, changeListFilmsByGenre());

    expect(result.filmsByGenre).toEqual(initialState.filmsList);
  });
});
