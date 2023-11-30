import { AuthorizationStatuses, NameSpace } from '../../types/state';
import { makeFakeUserData } from '../../utils/mocks';
import { getAuthorizationStatus, getErrorMessage, getUserData } from './selector';


describe('UserProcess selectors', () => {
  const state = {
    [NameSpace.user]: {
      authorizationStatus: AuthorizationStatuses.undefined,
      userData: makeFakeUserData(),
      errorMessage: '',
    }
  };

  it('should return authorizationStatus from state', () => {
    const { authorizationStatus } = state[NameSpace.user];
    const result = getAuthorizationStatus(state);
    expect(result).toBe(authorizationStatus);
  });

  it('should return userData from state', () => {
    const { userData } = state[NameSpace.user];
    const result = getUserData(state);
    expect(result).toEqual(userData);
  });

  it('should return errorMessage from state', () => {
    const { errorMessage } = state[NameSpace.user];
    const result = getErrorMessage(state);
    expect(result).toBe(errorMessage);
  });
});
