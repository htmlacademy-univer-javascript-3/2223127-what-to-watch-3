import { InitialOpenFilmData } from '../../types/open-film-data';
import { LoadStatuses } from '../../types/state';
import { openFilmProcess } from './open-film-process';


describe('OpenFilmProcess slice', () => {

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isFilmListLoading: LoadStatuses.started,
      openFilmData: InitialOpenFilmData,
      similarFilms: [],
      filmComments: [], };

    const result = openFilmProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isFilmListLoading: LoadStatuses.undefined,
      openFilmData: InitialOpenFilmData,
      similarFilms: [],
      filmComments: [], };

    const result = openFilmProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });
});
