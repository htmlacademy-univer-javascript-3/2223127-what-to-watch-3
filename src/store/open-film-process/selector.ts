
import { Film } from '../../types/film-data';
import { FilmComment, OpenFilmData } from '../../types/open-film-data';
import { LoadStatuses, NameSpace, State} from '../../types/state';

export const getFilmComments = (state: Pick<State, NameSpace.openFilm>): FilmComment[] => state[NameSpace.openFilm].filmComments;
export const getIsOpenFilmLoading = (state: Pick<State, NameSpace.openFilm>): LoadStatuses => state[NameSpace.openFilm].isFilmListLoading;
export const getOpenFilmData = (state: Pick<State, NameSpace.openFilm>): OpenFilmData => state[NameSpace.openFilm].openFilmData;
export const SimilarFilms = (state: Pick<State, NameSpace.openFilm>): Film[] => state[NameSpace.openFilm].similarFilms;
