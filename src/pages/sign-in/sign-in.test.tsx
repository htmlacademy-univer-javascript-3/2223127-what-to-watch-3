import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-components';
import { withStore } from '../../utils/mock-components';
import SignIn from './sign-in';
import { initialState } from '../../store/user-process/user-process';

describe('Component: SignIn', () => {
  it('should render correct', () => {
    const expectedEmailAddress = /Email address/i;
    const expectedPassword = /Password/i;
    const signInBtnId = 'sign-in-btn';

    const { withStoreComponent } = withStore(<SignIn/>, {USER: initialState});

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const signInBtnContainer = screen.getByTestId(signInBtnId);

    expect(screen.getByText(expectedEmailAddress)).toBeInTheDocument();
    expect(screen.getByText(expectedPassword)).toBeInTheDocument();
    expect(signInBtnContainer).toBeInTheDocument();
  });
});
