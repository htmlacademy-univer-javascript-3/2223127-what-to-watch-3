import {name, internet, image, commerce, finance, datatype, random, helpers,} from 'faker';
import { InitialUserData, UserData } from '../types/user-data';
import { FilmComment, InitialOpenFilmData, OpenFilmData } from '../types/open-film-data';
import { Film } from '../types/film-data';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { AuthorizationStatuses, LoadStatuses, State } from '../types/state';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  USER: { authorizationStatus: AuthorizationStatuses.authorized,
    userData: InitialUserData,
    errorMessage: '',},
  FILM: { isFilmListLoading: LoadStatuses.undefined,
    openFilmData: {
      id: '1',
      name: 'Garfield',
      posterImage: 'xd',
      backgroundImage: 'xd',
      backgroundColor: 'xd',
      videoLink: 'xd',
      description: 'xd',
      rating: 5,
      scoresCount: 10,
      director: 'xd',
      starring: [],
      runTime: 120,
      genre: 'Comedy',
      released: '2004',
      isFavorite: true,
    },
    filmsList: [{
      id: '1',
      name: 'Garfield',
      previewImage: 'xd',
      previewVideoLink: 'xd',
      genre: 'Comedy',
    },
    {
      id: '2',
      name: 'blabla',
      previewImage: 'xd',
      previewVideoLink: 'xd',
      genre: 'Drama',
    }],
    filmsByGenre: [],
    genre: 'All genres', },
  FAVORITE: { isFilmListLoading: LoadStatuses.undefined,
    myList: [],},
  OPENFILM: {
    isFilmListLoading: LoadStatuses.undefined,
    openFilmData: InitialOpenFilmData,
    similarFilms: [],
    filmComments: [],
  },
  ...initialState ?? {},
});

export const makeFakeUserData = (): UserData => ({
  name: name.firstName(),
  avatarUrl: image.imageUrl(),
  email: internet.email(),
  token: ''
} as UserData);

export const makeFakeOpenFilmData = (): OpenFilmData => ({
  id: random.alpha({count: 10}),
  name: name.title(),
  posterImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: internet.color(),
  videoLink: internet.url(),
  description: commerce.productDescription(),
  rating: Number(finance.amount(1, 10, 0)),
  scoresCount: Number(finance.amount(1, 100, 0)),
  director: name.firstName(),
  starring: datatype.array(3),
  runTime: Number(finance.amount(1, 100, 0)),
  genre: random.alpha({count: 10}),
  released: finance.amount(1, 100, 0),
  isFavorite: datatype.boolean(),
} as OpenFilmData);

export const makeFakeFilmData = (): Film => ({
  id: random.alpha({count: 10}),
  name: name.title(),
  previewImage: image.imageUrl(),
  previewVideoLink: internet.url(),
  genre: helpers.randomize(['All genres',
    'Fantasy',
    'Drama',
    'Comedy',
    'Action',
    'Thriller',
    'Crime',
    'Adventure']),
} as Film);

export const makeFakeFilmComments = (): FilmComment => ({
  id: random.alpha({count: 10}),
  comment: random.alpha({count: 10}),
  date: String(datatype.datetime()),
  rating: Number(finance.amount(1, 10, 0)),
  user: name.firstName(),
} as FilmComment);
