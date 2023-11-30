
import { Film } from '../../types/film-data';
import { LoadStatuses, NameSpace, State} from '../../types/state';

export const getIsFavoriteFilmsLoading = (state: Pick<State, NameSpace.filmFavorite>): LoadStatuses => state[NameSpace.filmFavorite].isFilmListLoading;
export const FavoriteFilms = (state: Pick<State, NameSpace.filmFavorite>): Film[] => state[NameSpace.filmFavorite].myList;
