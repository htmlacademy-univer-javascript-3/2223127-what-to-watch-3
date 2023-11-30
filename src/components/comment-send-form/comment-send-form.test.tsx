import { render, screen } from '@testing-library/react';
import { withStore } from '../../utils/mock-components';
import CommentSendForm from './comment-send-form';
import { initialState } from '../../store/user-process/user-process';

describe('Component: CommentSendForm', () => {
  it('should render correct', () => {
    const expectedTextRating = /Rating/i;
    const expectedTextPost = /Post/i;

    const { withStoreComponent } = withStore(<CommentSendForm filmId={'123'} />, {USER: initialState});

    render(withStoreComponent);

    const ratingCountLabels = screen.queryAllByLabelText(expectedTextRating).length;

    expect(ratingCountLabels).toEqual(10);

    expect(screen.getByText(expectedTextPost)).toBeInTheDocument();
  });
});
