import { render, screen } from '@testing-library/react';
import Review from './review';
import { makeFakeFilmComments } from '../../utils/mocks';

describe('Component: Review', () => {
  it('should render correct', () => {
    const review = makeFakeFilmComments();

    render(<Review description={review.comment} author={review.user} date={review.date} rating={review.rating}/>);

    expect(screen.getByText(review.comment)).toBeInTheDocument();
    expect(screen.getByText(review.user)).toBeInTheDocument();
    expect(screen.getByText(review.rating)).toBeInTheDocument();
  });
});
