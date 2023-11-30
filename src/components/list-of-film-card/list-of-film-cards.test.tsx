import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-components';
import { withStore } from '../../utils/mock-components';
import ListOfFilmCards from './list-of-film-cards';
import { makeFakeFilmData } from '../../utils/mocks';

describe('Component: ListOfFilmCards', () => {
  it('should render correct when numberCardsVisible default = 8', () => {
    const filmList = new Array(10).fill(null).map(() => makeFakeFilmData());

    const numberFilmCardsVisible = 8;

    const { withStoreComponent } = withStore(<ListOfFilmCards filmList={filmList} numberFilmCardsVisible={numberFilmCardsVisible}/>, {});

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(filmList[numberFilmCardsVisible - 1].name)).toBeInTheDocument();
  });

  it('should render correct when numberCardsVisible > filmList', () => {
    const filmList = new Array(10).fill(null).map(() => makeFakeFilmData());

    const numberFilmCardsVisible = 16;

    const { withStoreComponent } = withStore(<ListOfFilmCards filmList={filmList} numberFilmCardsVisible={numberFilmCardsVisible}/>, {});

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(filmList[filmList.length - 1].name)).toBeInTheDocument();
  });
});
