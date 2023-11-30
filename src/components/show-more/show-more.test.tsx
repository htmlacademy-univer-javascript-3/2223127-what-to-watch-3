import { render, screen } from '@testing-library/react';
import ShowMore from './show-more';

describe('Component: ShowMore', () => {
  it('should render correct', () => {
    const expectedText = /Show more/i;

    function handleClick(){
      return 1;
    }

    render(
      <ShowMore onClickShowMore={() => {
        handleClick();
      }}
      />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
