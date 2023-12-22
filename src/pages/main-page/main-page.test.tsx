import { render, screen } from '@testing-library/react';
import { AuthorizationStatuses, UserProcess } from '../../types/state';
import { InitialUserData } from '../../types/user-data';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeOpenFilmData } from '../../utils/mocks';
import MainPage from './main-page';
import { initialState } from '../../store/film-process/film-process';

describe('Component: MainPage', () => {
  it('should render correct if authorized', () => {
    const expectedLogoText = /WTW/i;
    const expectedMessage = /Catalog/i;
    const numberFavoriteFilms = 20;

    const initialState1: UserProcess = {
      authorizationStatus: AuthorizationStatuses.authorized,
      userData: InitialUserData,
      errorMessage: '',
    };

    const mockHandleClick = vi.fn();

    const { withStoreComponent } = withStore(<MainPage activeFilm={makeFakeOpenFilmData()} numberFavoriteFilms={numberFavoriteFilms} changeFavorite={mockHandleClick} />, { USER: initialState1, FILM: initialState });

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    expect(screen.queryByText(expectedLogoText)).toBeInTheDocument();
    expect(screen.queryByText(expectedMessage)).toBeInTheDocument();
    expect(screen.queryByText(numberFavoriteFilms)).toBeInTheDocument();
  });
});
