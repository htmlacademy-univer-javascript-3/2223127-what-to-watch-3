import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-components';
import { withStore } from '../../utils/mock-components';
import Header from './header';
import { AuthorizationStatuses, UserProcess } from '../../types/state';
import { InitialUserData } from '../../types/user-data';

describe('Component: HeaderSignIn', () => {
  it('should render correct if unauthorized', () => {

    const expectedText = /T/i;

    const initialState: UserProcess = {
      authorizationStatus: AuthorizationStatuses.notAuthorized,
      userData: InitialUserData,
      errorMessage: '',
    };

    const { withStoreComponent } = withStore(<Header />, {USER: initialState});

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render correct if authorized', () => {

    const expectedText = /Sign out/i;

    const initialState: UserProcess = {
      authorizationStatus: AuthorizationStatuses.authorized,
      userData: InitialUserData,
      errorMessage: '',
    };

    const { withStoreComponent } = withStore(<Header />, {USER: initialState});

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
