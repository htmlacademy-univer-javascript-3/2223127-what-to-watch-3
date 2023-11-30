
import { Film } from '../../types/film-data';
import { LoadStatuses, NameSpace, State} from '../../types/state';

export const getFilmsByGenre = (state: Pick<State, NameSpace.film>): Film[] => state[NameSpace.film].filmsByGenre;
export const getFilmList = (state: Pick<State, NameSpace.film>): Film[] => state[NameSpace.film].filmsList;
export const getGenre = (state: Pick<State, NameSpace.film>): string => state[NameSpace.film].genre;
export const getIsLoading = (state: Pick<State, NameSpace.film>): LoadStatuses => state[NameSpace.film].isFilmListLoading;
