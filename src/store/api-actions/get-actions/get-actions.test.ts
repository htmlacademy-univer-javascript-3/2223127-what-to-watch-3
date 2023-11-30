import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { AuthorizationStatuses, State } from '../../../types/state';
import { AppThunkDispatch, makeFakeUserData, extractActionsTypes, makeFakeOpenFilmData, makeFakeFilmData, makeFakeFilmComments } from '../../../utils/mocks';
import { checkAuthorization, getFavoriteFilms, getFilmById, getFilmComments, getListOfFilms, getSimilarFilms } from './get-actions';
import { api } from '../..';

describe('Async get actions', () => {
  const axios = api;
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ USER: { authorizationStatus: AuthorizationStatuses.undefined, userData: makeFakeUserData()}});
  });

  describe('checkAuthorizationAction', () => {
    it('should dispatch "checkAuthorization.pending" and "checkAuthorization.fulfilled" when server response 200', async () => {
      const mockUserData = makeFakeUserData();
      mockAxiosAdapter.onGet('/login').reply(200, mockUserData);

      await store.dispatch(checkAuthorization());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchQuestionsActionFulfilled = emittedActions.at(1) as ReturnType<typeof checkAuthorization.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        checkAuthorization.pending.type,
        checkAuthorization.fulfilled.type,
      ]);

      expect(fetchQuestionsActionFulfilled.payload)
        .toEqual(mockUserData);
    });

    it('should dispatch "checkAuthorization.rejected" when server response 401', async () => {
      mockAxiosAdapter.onGet('/login').reply(401);

      await store.dispatch(checkAuthorization());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthorization.pending.type,
        checkAuthorization.rejected.type,
      ]);
    });
  });

  describe('getFilmById', () => {
    it('should dispatch "getFilmById.pending" and "getFilmById.fulfilled" when server response 200', async () => {
      const mockOpenFilmData = makeFakeOpenFilmData();
      mockAxiosAdapter.onGet(`/films/${mockOpenFilmData.id}`).reply(200, mockOpenFilmData);

      await store.dispatch(getFilmById(mockOpenFilmData.id));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getFilmByIdFulfilled = emittedActions.at(1) as ReturnType<typeof getFilmById.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        getFilmById.pending.type,
        getFilmById.fulfilled.type,
      ]);

      expect(getFilmByIdFulfilled.payload)
        .toEqual(mockOpenFilmData);
    });

    it('should dispatch "getFilmById.rejected" when server response 404', async () => {
      const fakeId = '123';
      mockAxiosAdapter.onGet(`/films/${fakeId}`).reply(404);

      await store.dispatch(getFilmById(fakeId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        getFilmById.pending.type,
        getFilmById.rejected.type,
      ]);
    });
  });

  describe('getListOfFilms', () => {
    it('should dispatch "getFilmById.pending" and "getFilmById.fulfilled" when server response 200', async () => {
      const mockListOfFilms = new Array(100).fill(null).map(() => makeFakeFilmData());
      mockAxiosAdapter.onGet('/films').reply(200, mockListOfFilms);

      await store.dispatch(getListOfFilms());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getListOfFilmsFulfilled = emittedActions.at(2) as ReturnType<typeof getListOfFilms.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        getListOfFilms.pending.type,
        getFilmById.pending.type,
        getListOfFilms.fulfilled.type,
      ]);

      expect(getListOfFilmsFulfilled.payload)
        .toEqual(mockListOfFilms);
    });
  });

  describe('getSimilarFilms', () => {
    it('should dispatch "getSimilarFilms.pending" and "getSimilarFilms.fulfilled" when server response 200', async () => {
      const mockListOfFilms = new Array(10).fill(null).map(() => makeFakeFilmData());
      mockAxiosAdapter.onGet(`/films/${mockListOfFilms[0].id}/similar`).reply(200, mockListOfFilms);

      await store.dispatch(getSimilarFilms(mockListOfFilms[0].id));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getSimilarFilmsFulfilled = emittedActions.at(1) as ReturnType<typeof getSimilarFilms.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        getSimilarFilms.pending.type,
        getSimilarFilms.fulfilled.type,
      ]);

      expect(getSimilarFilmsFulfilled.payload)
        .toEqual(mockListOfFilms);
    });

    it('should dispatch "getSimilarFilms.pending" and "getSimilarFilms.rejected" when server response 404', async () => {
      const fakeId = '123';
      mockAxiosAdapter.onGet(`/films/${fakeId}/similar`).reply(404);

      await store.dispatch(getSimilarFilms(fakeId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        getSimilarFilms.pending.type,
        getSimilarFilms.rejected.type,
      ]);
    });
  });

  describe('getFilmComments', () => {
    it('should dispatch "getFilmComments.pending" and "getFilmComments.fulfilled" when server response 200', async () => {
      const mockListOfComments = new Array(10).fill(null).map(() => makeFakeFilmComments());
      const fakeId = '123';
      mockAxiosAdapter.onGet(`/comments/${fakeId}`).reply(200, mockListOfComments);

      await store.dispatch(getFilmComments(fakeId));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getFilmCommentsFulfilled = emittedActions.at(1) as ReturnType<typeof getFilmComments.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        getFilmComments.pending.type,
        getFilmComments.fulfilled.type,
      ]);

      expect(getFilmCommentsFulfilled.payload)
        .toEqual(mockListOfComments);
    });

    it('should dispatch "getFilmComments.pending" and "getFilmComments.rejected" when server response 404', async () => {
      const fakeId = '200';
      mockAxiosAdapter.onGet(`/films/${fakeId}/similar`).reply(404);

      await store.dispatch(getFilmComments(fakeId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        getFilmComments.pending.type,
        getFilmComments.rejected.type,
      ]);
    });
  });

  describe('getFavoriteFilms', () => {
    it('should dispatch "getFavoriteFilms.pending" and "getFavoriteFilms.fulfilled" when server response 200', async () => {
      const mockListOfFavoriteFilms = new Array(10).fill(null).map(() => makeFakeFilmData());
      mockAxiosAdapter.onGet('/favorite').reply(200, mockListOfFavoriteFilms);

      await store.dispatch(getFavoriteFilms());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getFavoriteFilmsFulfilled = emittedActions.at(1) as ReturnType<typeof getFavoriteFilms.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        getFavoriteFilms.pending.type,
        getFavoriteFilms.fulfilled.type,
      ]);

      expect(getFavoriteFilmsFulfilled.payload)
        .toEqual(mockListOfFavoriteFilms);
    });

    it('should dispatch "getFavoriteFilms.pending" and "getFavoriteFilms.rejected" when server response 401', async () => {
      mockAxiosAdapter.onGet('/favorite').reply(401);

      await store.dispatch(getFavoriteFilms());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        getFavoriteFilms.pending.type,
        getFavoriteFilms.rejected.type,
      ]);
    });
  });
});
