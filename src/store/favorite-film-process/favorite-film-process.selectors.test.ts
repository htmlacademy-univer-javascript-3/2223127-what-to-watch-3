import { LoadStatuses, NameSpace } from '../../types/state';
import { makeFakeFilmData } from '../../utils/mocks';
import { FavoriteFilms, getIsFavoriteFilmsLoading } from './selector';


describe('FavoriteFilmProcess selectors', () => {
  const state = {
    [NameSpace.filmFavorite]: {
      isFilmListLoading: LoadStatuses.undefined,
      myList: [makeFakeFilmData()],
    }
  };

  it('should return isFilmListLoading from state', () => {
    const { isFilmListLoading } = state[NameSpace.filmFavorite];
    const result = getIsFavoriteFilmsLoading(state);
    expect(result).toEqual(isFilmListLoading);
  });

  it('should return myList from state', () => {
    const { myList } = state[NameSpace.filmFavorite];
    const result = FavoriteFilms(state);
    expect(result).toEqual(myList);
  });
});
