import { LoadStatuses } from '../../types/state';
import { filmFavoriteProcess } from './film-favorite-process';


describe('FilmProcess slice', () => {

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isFilmListLoading: LoadStatuses.started,
      myList: [],};

    const result = filmFavoriteProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isFilmListLoading: LoadStatuses.undefined,
      myList: [],};

    const result = filmFavoriteProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });
});
