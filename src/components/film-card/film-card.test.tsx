import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-components';
import FilmCard from './film-card';

describe('Component: CardsBlock', () => {
  it('should render correct', () => {

    const smallFilmCardImageId = 'small-film-card-image';

    const filmName = 'Garfield';

    function handleClick(id: string){
      return id;
    }

    const preparedComponent = withHistory(
      <FilmCard filmName={filmName} filmPreview={'xd'} filmId={'123'} previewVideoLink={'xd'} handleActiveFilm={(id: string)=>{
        handleClick(id);
      }}
      />);

    render(preparedComponent);

    const smallFilmCardImageContainer = screen.getByTestId(smallFilmCardImageId);

    expect(smallFilmCardImageContainer).toBeInTheDocument();
    expect(screen.getByText(filmName)).toBeInTheDocument();
  });
});
