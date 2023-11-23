
import { Film } from '../../types/film-data';
import { FilmComment, OpenFilmData } from '../../types/open-film-data';
import { LoadStatuses, NameSpace, State} from '../../types/state';

export const getFilmComments = (state: Pick<State, NameSpace.film>): FilmComment[] => state[NameSpace.film].filmComments;
export const getFilmsByGenre = (state: Pick<State, NameSpace.film>): Film[] => state[NameSpace.film].filmsByGenre;
export const getFilmList = (state: Pick<State, NameSpace.film>): Film[] => state[NameSpace.film].filmsList;
export const getGenre = (state: Pick<State, NameSpace.film>): string => state[NameSpace.film].genre;
export const getIsLoading = (state: Pick<State, NameSpace.film>): LoadStatuses => state[NameSpace.film].isFilmListLoading;
export const getOpenFilmData = (state: Pick<State, NameSpace.film>): OpenFilmData => state[NameSpace.film].openFilmData;
export const SimilarFilms = (state: Pick<State, NameSpace.film>): Film[] => state[NameSpace.film].similarFilms;
