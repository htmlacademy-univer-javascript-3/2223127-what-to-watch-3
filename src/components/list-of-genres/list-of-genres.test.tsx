import { render, screen } from '@testing-library/react';
import { withStore } from '../../utils/mock-components';
import ListOfGenres from './list-of-genres';
import { FilmProcess, LoadStatuses } from '../../types/state';
import { InitialOpenFilmData } from '../../types/open-film-data';

describe('Component: ListOfGenres', () => {
  it('should render correct', () => {

    const expectedText = /All genres/i;

    const initialState: FilmProcess = {
      isFilmListLoading: LoadStatuses.undefined,
      openFilmData: InitialOpenFilmData,
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
        genre: 'Fantasy',
      },
      {
        id: '3',
        name: 'uwuman',
        previewImage: 'xd',
        previewVideoLink: 'xd',
        genre: 'Drama',
      },],
      filmsByGenre: [],
      genre: 'All genres',
    };

    const { withStoreComponent } = withStore(<ListOfGenres />, {FILM: initialState});

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText('Comedy')).toBeInTheDocument();
    expect(screen.getByText('Fantasy')).toBeInTheDocument();
    expect(screen.getByText('Drama')).toBeInTheDocument();
    expect(screen.queryByText('Action')).not.toBeInTheDocument();
  });
});
