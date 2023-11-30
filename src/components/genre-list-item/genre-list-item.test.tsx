import { render, screen } from '@testing-library/react';
import GenreListItem from './genre-list-item';

describe('Component: GenreListItem', () => {
  it('should render correct', () => {

    const genre = 'Action';

    function handleClick(id: string){
      return id;
    }

    render(
      <GenreListItem genre={genre} onClickGenre={(id: string)=>{
        handleClick(id);
      }}
      />);

    expect(screen.getByText(genre)).toBeInTheDocument();
  });
});
