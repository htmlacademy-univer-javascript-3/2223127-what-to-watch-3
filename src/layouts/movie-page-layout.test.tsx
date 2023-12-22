import { render, screen } from '@testing-library/react';
import { AuthorizationStatuses, LoadStatuses, OpenFilmProcess, UserProcess } from '../types/state';
import { InitialUserData } from '../types/user-data';
import { withHistory, withStore } from '../utils/mock-components';
import MoviePageLayout from './movie-page-layout';
import { makeFakeFilmComments, makeFakeOpenFilmData } from '../utils/mocks';
import { InitialOpenFilmData } from '../types/open-film-data';
import userEvent from '@testing-library/user-event';

describe('Component: MoviePageLayout', () => {
  it('should render correct if unauthorized', async () => {

    const expectedText = /Add review/i;
    const numberFavoriteFilms = 20;

    const initialState: UserProcess = {
      authorizationStatus: AuthorizationStatuses.notAuthorized,
      userData: InitialUserData,
      errorMessage: '',
    };

    const initialState2: OpenFilmProcess = {
      isFilmListLoading: LoadStatuses.undefined,
      openFilmData: InitialOpenFilmData,
      similarFilms: [],
      filmComments: new Array(5).fill(null).map(() => makeFakeFilmComments()),
    };

    const mockHandleClick = vi.fn();

    const { withStoreComponent } = withStore(<MoviePageLayout activeFilm={makeFakeOpenFilmData()} isAuth={initialState.authorizationStatus} numberFavoriteFilms={numberFavoriteFilms} changeFavorite={mockHandleClick} />, {USER: initialState, OPENFILM: initialState2});

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    await userEvent.click(screen.getByTestId('change-favorite'));

    expect(mockHandleClick).toBeCalledTimes(1);
    expect(screen.queryByText(expectedText)).not.toBeInTheDocument();
    expect(screen.queryByText(numberFavoriteFilms)).toBeInTheDocument();
  });

  it('should render correct if authorized', () => {

    const expectedText = /Add review/i;

    const initialState: UserProcess = {
      authorizationStatus: AuthorizationStatuses.authorized,
      userData: InitialUserData,
      errorMessage: '',
    };

    const initialState2: OpenFilmProcess = {
      isFilmListLoading: LoadStatuses.undefined,
      openFilmData: InitialOpenFilmData,
      similarFilms: [],
      filmComments: new Array(5).fill(null).map(() => makeFakeFilmComments()),
    };

    const mockHandleClick = vi.fn();

    const { withStoreComponent } = withStore(<MoviePageLayout activeFilm={makeFakeOpenFilmData()} isAuth={initialState.authorizationStatus} numberFavoriteFilms={0} changeFavorite={mockHandleClick} />, {USER: initialState, OPENFILM: initialState2});

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.queryByText(expectedText)).toBeInTheDocument();
  });

  it('should render correct if loading', () => {

    const expectedText = /Loading .../i;

    const initialState: UserProcess = {
      authorizationStatus: AuthorizationStatuses.authorized,
      userData: InitialUserData,
      errorMessage: '',
    };

    const initialState2: OpenFilmProcess = {
      isFilmListLoading: LoadStatuses.started,
      openFilmData: InitialOpenFilmData,
      similarFilms: [],
      filmComments: new Array(5).fill(null).map(() => makeFakeFilmComments()),
    };

    const mockHandleClick = vi.fn();

    const { withStoreComponent } = withStore(<MoviePageLayout activeFilm={makeFakeOpenFilmData()} isAuth={initialState.authorizationStatus} numberFavoriteFilms={0} changeFavorite={mockHandleClick} />, {USER: initialState, OPENFILM: initialState2});

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.queryByText(expectedText)).toBeInTheDocument();
  });
});
