import {store} from '../store/index.js';
import { Film } from './film-data.js';
import { FilmComment, OpenFilmData } from './open-film-data.js';
import { UserData } from './user-data.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export enum LoadStatuses {
    undefined = 'undefined',
    started = 'started',
    ended = 'ended'
}

export enum AuthorizationStatuses {
    undefined = 'undefined',
    authorized = 'authorized',
    notAuthorized = 'not authorized'
}

export enum NameSpace {
    user = 'USER',
    film = 'FILM',
    data = 'DATA',
    openFilm = 'OPENFILM',
    filmFavorite = 'FAVORITE',
}

export type UserProcess = {
    authorizationStatus: AuthorizationStatuses;
    userData: UserData;
    errorMessage: string;
  };

export type FilmProcess = {
    isFilmListLoading: LoadStatuses;
    openFilmData: OpenFilmData;
    filmsList: Film[];
    filmsByGenre: Film[];
    genre: string;
}

export type OpenFilmProcess = {
    isFilmListLoading: LoadStatuses;
    openFilmData: OpenFilmData;
    similarFilms: Film[];
    filmComments: FilmComment[];
}

export type FilmFavoriteProcess = {
    isFilmListLoading: LoadStatuses;
    myList: Film[];
}
