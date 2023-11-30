import { render, screen } from '@testing-library/react';
import NotFound from './page-not-found';

describe('Component: ShowMore', () => {
  it('should render correct', () => {
    const expectedText = /404 Not Found/i;

    render(<NotFound/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
