import { AuthorizationStatuses } from '../../types/state';
import { InitialUserData } from '../../types/user-data';
import { setErrorMessage, userProcess } from './user-process';


describe('UserProcess slice', () => {

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatuses.authorized,
      userData: InitialUserData,
      errorMessage: 'error', };

    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatuses.undefined,
      userData: InitialUserData,
      errorMessage: '', };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set error message with "setErrorMessage" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatuses.undefined,
      userData: InitialUserData,
      errorMessage: '', };
    const expectedError = 'error';

    const result = userProcess.reducer(initialState, setErrorMessage(expectedError));

    expect(result.errorMessage).toEqual(expectedError);
  });
});
