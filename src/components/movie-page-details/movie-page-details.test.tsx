import { render, screen } from '@testing-library/react';
import { makeFakeOpenFilmData } from '../../utils/mocks';
import MoviePageDetails from './movie-page-details';

describe('Component: MoviePageDetails', () => {
  it('should render correct', () => {
    const activeFilm = makeFakeOpenFilmData();

    const expectedTextDirector = /Director/i;
    const expectedTextStarring = /Starring/i;
    const expectedTextRunTime = /Run Time/i;
    const expectedTextGenre = /Genre/i;
    const expectedTextReleased = /Released/i;

    render(<MoviePageDetails activeFilm={activeFilm}/>);

    expect(screen.getByText(expectedTextDirector)).toBeInTheDocument();
    expect(screen.getByText(expectedTextStarring)).toBeInTheDocument();
    expect(screen.getByText(expectedTextRunTime)).toBeInTheDocument();
    expect(screen.getByText(expectedTextGenre)).toBeInTheDocument();
    expect(screen.getByText(expectedTextReleased)).toBeInTheDocument();
  });
});
