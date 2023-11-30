import { render, screen } from '@testing-library/react';
import { makeFakeOpenFilmData } from '../../utils/mocks';
import MoviePageOverview from './movie-page-overview';

describe('Component: MoviePageDetails', () => {
  it('should render correct by rating', () => {
    const activeFilm = makeFakeOpenFilmData();

    activeFilm.rating = 5;

    const expectedTextRatings = /ratings/i;
    const expectedTextDirector = /Director:/i;

    render(<MoviePageOverview activeFilm={activeFilm}/>);

    expect(screen.getByText(expectedTextDirector)).toBeInTheDocument();
    expect(screen.getByText(expectedTextRatings)).toBeInTheDocument();
    expect(screen.getByText('Bad')).toBeInTheDocument();
  });
});
