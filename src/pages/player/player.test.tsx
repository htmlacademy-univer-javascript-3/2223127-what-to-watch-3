import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-components';
import Player from './player';

describe('Component: MainPage', () => {
  it('should render correct if authorized', () => {
    const expectedMessage = /Exit/i;

    const preparedComponent = withHistory(<Player videoLink="" videoPoster=""/>);

    render(preparedComponent);
    expect(screen.queryByText(expectedMessage)).toBeInTheDocument();
  });
});
