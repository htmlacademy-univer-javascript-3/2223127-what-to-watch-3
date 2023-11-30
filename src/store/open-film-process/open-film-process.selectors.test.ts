import { LoadStatuses, NameSpace } from '../../types/state';
import { makeFakeFilmComments, makeFakeFilmData, makeFakeOpenFilmData } from '../../utils/mocks';
import { SimilarFilms, getFilmComments, getIsOpenFilmLoading, getOpenFilmData } from './selector';


describe('OpenFilmProcess selectors', () => {
  const state = {
    [NameSpace.openFilm]: {
      isFilmListLoading: LoadStatuses.undefined,
      openFilmData: makeFakeOpenFilmData(),
      similarFilms: [makeFakeFilmData()],
      filmComments: [makeFakeFilmComments()]
    }
  };

  it('should return filmComments from state', () => {
    const { filmComments } = state[NameSpace.openFilm];
    const result = getFilmComments(state);
    expect(result).toEqual(filmComments);
  });

  it('should return isFilmListLoading from state', () => {
    const { isFilmListLoading } = state[NameSpace.openFilm];
    const result = getIsOpenFilmLoading(state);
    expect(result).toEqual(isFilmListLoading);
  });

  it('should return isFilmListLoading from state', () => {
    const { openFilmData } = state[NameSpace.openFilm];
    const result = getOpenFilmData(state);
    expect(result).toEqual(openFilmData);
  });

  it('should return similarFilms from state', () => {
    const { similarFilms } = state[NameSpace.openFilm];
    const result = SimilarFilms(state);
    expect(result).toEqual(similarFilms);
  });
});
