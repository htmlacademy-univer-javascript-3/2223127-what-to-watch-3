import { LoadStatuses, NameSpace } from '../../types/state';
import { makeFakeFilmData, makeFakeOpenFilmData } from '../../utils/mocks';
import { getFilmList, getFilmsByGenre, getGenre, getIsLoading } from './selector';


describe('FilmProcess selectors', () => {
  const state = {
    [NameSpace.film]: {
      isFilmListLoading: LoadStatuses.undefined,
      openFilmData: makeFakeOpenFilmData(),
      filmsList: [makeFakeFilmData()],
      filmsByGenre: [makeFakeFilmData()],
      genre: 'action'
    }
  };

  it('should return filmsByGenre from state', () => {
    const { filmsByGenre } = state[NameSpace.film];
    const result = getFilmsByGenre(state);
    expect(result).toEqual(filmsByGenre);
  });

  it('should return filmsList from state', () => {
    const { filmsList } = state[NameSpace.film];
    const result = getFilmList(state);
    expect(result).toEqual(filmsList);
  });

  it('should return genre from state', () => {
    const { genre } = state[NameSpace.film];
    const result = getGenre(state);
    expect(result).toEqual(genre);
  });

  it('should return isFilmListLoading from state', () => {
    const { isFilmListLoading } = state[NameSpace.film];
    const result = getIsLoading(state);
    expect(result).toEqual(isFilmListLoading);
  });
});
