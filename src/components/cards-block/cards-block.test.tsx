import { render, screen } from '@testing-library/react';
import CardsBlock from './cards-block';
import { withStore } from '../../utils/mock-components';
import { initialState } from '../../store/film-process/film-process';

describe('Component: CardsBlock', () => {
  it('should render correct', () => {
    const catalogFilmListId = 'catalog-films-list';
    const { withStoreComponent } = withStore(<CardsBlock />, {FILM: initialState});

    render(withStoreComponent);
    const catalogFilmListContainer = screen.getByTestId(catalogFilmListId);

    expect(catalogFilmListContainer).toBeInTheDocument();
  });
});
