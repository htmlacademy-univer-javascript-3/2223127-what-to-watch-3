import { MemoryHistory, createMemoryHistory } from 'history';
import { Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AuthChecker from './auth-checker';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import { AuthorizationStatuses } from '../../types/state';

describe('Component: PrivateRoute', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push('/mylist');
  });

  it('should render component for public route, when user not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    const preparedComponent = withHistory(
      <Routes>
        <Route path={'/login'} element={<span>{expectedText}</span>} />
        <Route path={'/mylist'} element={
          <AuthChecker isAuth={AuthorizationStatuses.notAuthorized}>
            <span>{notExpectedText}</span>
          </AuthChecker>
        }
        />
      </Routes>,
      mockHistory
    );
    const fakeStore = makeFakeStore();
    const { withStoreComponent } = withStore(preparedComponent, fakeStore);

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const expectedText = 'private route';
    const notExpectedText = 'public route';
    const preparedComponent = withHistory(
      <Routes>
        <Route path={'/login'} element={<span>{notExpectedText}</span>} />
        <Route path={'/mylist'} element={
          <AuthChecker isAuth={AuthorizationStatuses.authorized}>
            <span>{expectedText}</span>
          </AuthChecker>
        }
        />
      </Routes>,
      mockHistory
    );

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
