import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-components';
import HeaderSignIn from './header-sign-in';

describe('Component: HeaderSignIn', () => {
  it('should render correct', () => {

    const expectedText = /Sign in/i;

    const preparedComponent = withHistory(<HeaderSignIn />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
