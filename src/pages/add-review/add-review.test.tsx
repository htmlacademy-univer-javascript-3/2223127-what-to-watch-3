import { render, screen } from '@testing-library/react';
import { AuthorizationStatuses, UserProcess } from '../../types/state';
import { InitialUserData } from '../../types/user-data';
import { withHistory, withStore } from '../../utils/mock-components';
import AddReview from './add-review';
import { makeFakeOpenFilmData } from '../../utils/mocks';

describe('Component: AddReview', () => {
  it('should render correct if authorized', () => {

    const expectedText = /Post/i;
    const expectedLogoText = /WTW/i;

    const initialState: UserProcess = {
      authorizationStatus: AuthorizationStatuses.authorized,
      userData: InitialUserData,
      errorMessage: '',
    };

    const { withStoreComponent } = withStore(<AddReview isAuth={initialState.authorizationStatus} activeFilm={makeFakeOpenFilmData()} />, { USER: initialState });

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    expect(screen.queryByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(expectedLogoText)).toBeInTheDocument();
  });
});
