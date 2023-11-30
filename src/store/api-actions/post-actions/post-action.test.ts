import MockAdapter from 'axios-mock-adapter';
import { api } from '../..';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AuthorizationStatuses, State } from '../../../types/state';
import { Action } from '@reduxjs/toolkit';
import { AppThunkDispatch, extractActionsTypes, makeFakeFilmComments, makeFakeUserData } from '../../../utils/mocks';
import thunk from 'redux-thunk';
import { addComment, changeFavoriteStatus, loginAction } from './post-action';
import { redirectToRoute } from '../../action';
import { getFilmById } from '../get-actions/get-actions';

describe('Async post actions', () => {
  const axios = api;
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ USER: { authorizationStatus: AuthorizationStatuses.undefined, userData: makeFakeUserData() } });
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending" and "loginAction.fulfilled" when server response 200', async () => {
      const email = 'email@example.com';
      const password = 'password1';
      const mockUserData = makeFakeUserData();
      mockAxiosAdapter.onPost('/login').reply(200, mockUserData);

      await store.dispatch(loginAction({ email: email, password: password }));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const loginActionFulfilled = emittedActions.at(2) as ReturnType<typeof loginAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        loginAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type,
      ]);

      expect(loginActionFulfilled.payload)
        .toEqual(mockUserData);
    });

    it('should dispatch "loginAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost('/login').reply(400);
      const email = '';
      const password = 'password';

      await store.dispatch(loginAction({ email: email, password: password }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.rejected.type,
      ]);
    });
  });

  describe('addComment', () => {
    it('should dispatch "addComment.pending" and "addComment.fulfilled" when server response 200', async () => {
      const filmId = '123';
      const comment = 'blablabla';
      const rating = 5;
      const mockComment = makeFakeFilmComments();
      mockAxiosAdapter.onPost(`/comments/${filmId}`).reply(200, mockComment);

      await store.dispatch(addComment({ filmId: filmId, comment: comment, rating: rating }));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const addCommentFulfilled = emittedActions.at(2) as ReturnType<typeof addComment.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        addComment.pending.type,
        redirectToRoute.type,
        addComment.fulfilled.type,
      ]);

      expect(addCommentFulfilled.payload)
        .toEqual(mockComment);
    });

    it('should dispatch "loginAction.rejected" when server response 400', async () => {
      const filmId = '123';
      const comment = 'blablabla';
      const rating = 25;
      mockAxiosAdapter.onPost(`/comments/${filmId}`).reply(400);

      await store.dispatch(addComment({ filmId: filmId, comment: comment, rating: rating }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        addComment.pending.type,
        addComment.rejected.type,
      ]);
    });

    it('should dispatch "loginAction.rejected" when server response 401', async () => {
      const filmId = '123';
      const comment = 'blablabla';
      const rating = 25;
      mockAxiosAdapter.onPost(`/comments/${filmId}`).reply(400);

      await store.dispatch(addComment({ filmId: filmId, comment: comment, rating: rating }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        addComment.pending.type,
        addComment.rejected.type,
      ]);
    });

    it('should dispatch "loginAction.rejected" when server response 404', async () => {
      const filmId = '123';
      const comment = 'blablabla';
      const rating = 25;
      mockAxiosAdapter.onPost(`/comments/${filmId}`).reply(400);

      await store.dispatch(addComment({ filmId: filmId, comment: comment, rating: rating }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        addComment.pending.type,
        addComment.rejected.type,
      ]);
    });
  });

  describe('changeFavoriteStatus', () => {
    it('should dispatch "changeFavoriteStatus.pending" and "changeFavoriteStatus.fulfilled" when server response 200 with "status = 0"', async () => {
      const filmId = '200';
      const status = 0;
      mockAxiosAdapter.onPost(`/favorite/${filmId}/${status}`).reply(200);

      await store.dispatch(changeFavoriteStatus({ filmId: filmId, status: status }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        changeFavoriteStatus.pending.type,
        changeFavoriteStatus.fulfilled.type,
      ]);
    });

    it('should dispatch "changeFavoriteStatus.pending" and "changeFavoriteStatus.fulfilled" when server response 201 with "status = 1"', async () => {
      const filmId = '200';
      const status = 1;
      mockAxiosAdapter.onPost(`/favorite/${filmId}/${status}`).reply(200);

      await store.dispatch(changeFavoriteStatus({ filmId: filmId, status: status }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        changeFavoriteStatus.pending.type,
        getFilmById.pending.type,
        redirectToRoute.type,
        changeFavoriteStatus.fulfilled.type,
      ]);
    });
  });
});
