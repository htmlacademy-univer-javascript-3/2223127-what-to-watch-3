import { render, screen } from '@testing-library/react';
import { withStore } from '../../utils/mock-components';
import { makeFakeFilmComments } from '../../utils/mocks';
import MoviePageReview from './movie-page-review';
import { LoadStatuses, OpenFilmProcess } from '../../types/state';
import { InitialOpenFilmData } from '../../types/open-film-data';

describe('Component: MoviePageReview', () => {
  it('should render correct', () => {
    const initialState: OpenFilmProcess = {
      isFilmListLoading: LoadStatuses.undefined,
      openFilmData: InitialOpenFilmData,
      similarFilms: [],
      filmComments: new Array(5).fill(null).map(() => makeFakeFilmComments()),
    };

    const { withStoreComponent } = withStore(<MoviePageReview/>, {OPENFILM: initialState});

    render(withStoreComponent);

    expect(screen.getByText(initialState.filmComments[4].comment)).toBeInTheDocument();
  });
});
