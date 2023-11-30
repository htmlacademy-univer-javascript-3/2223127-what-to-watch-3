import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../utils/mock-components';
import { makeFakeStore } from '../../utils/mocks';
import { render, screen } from '@testing-library/react';
import App from './app';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "WelcomeScreen" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const fakeStore = makeFakeStore();
    const { withStoreComponent } = withStore(withHistoryComponent, fakeStore);
    mockHistory.push('/');

    render(withStoreComponent);

    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });

  it('should render "login" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const fakeStore = makeFakeStore();
    const { withStoreComponent } = withStore(withHistoryComponent, fakeStore);
    mockHistory.push('/login');

    render(withStoreComponent);

    expect(screen.queryAllByText(/Sign in/i)[0]).toBeInTheDocument();
  });

  it('should render "mylist" when user navigate to "/mylist"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const fakeStore = makeFakeStore();
    const { withStoreComponent } = withStore(withHistoryComponent, fakeStore);
    mockHistory.push('/mylist');

    render(withStoreComponent);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it('should render "openFilm" when user navigate to "/films/:id"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const fakeStore = makeFakeStore();
    const { withStoreComponent } = withStore(withHistoryComponent, fakeStore);
    mockHistory.push('/films/1');

    render(withStoreComponent);

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it('should render "details" when user navigate to "/films/:id/details"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const fakeStore = makeFakeStore();
    const { withStoreComponent } = withStore(withHistoryComponent, fakeStore);
    mockHistory.push('/films/1/details');

    render(withStoreComponent);

    expect(screen.getByText(/Director/i)).toBeInTheDocument();
    expect(screen.getByText(/Run Time/i)).toBeInTheDocument();
    expect(screen.getByText(/Starring/i)).toBeInTheDocument();
    expect(screen.getByText(/Genre/i)).toBeInTheDocument();
    expect(screen.getByText(/Released/i)).toBeInTheDocument();
  });

  it('should render "reviews" when user navigate to "/films/:id/reviews"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const fakeStore = makeFakeStore();
    const { withStoreComponent } = withStore(withHistoryComponent, fakeStore);
    mockHistory.push('/films/1/reviews');

    render(withStoreComponent);
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it('should render "review" when user navigate to "/films/:id/review"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const fakeStore = makeFakeStore();
    const { withStoreComponent } = withStore(withHistoryComponent, fakeStore);
    mockHistory.push('/films/1/review');

    render(withStoreComponent);
    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });

  it('should render "player" when user navigate to "/player/:id"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const fakeStore = makeFakeStore();
    const { withStoreComponent } = withStore(withHistoryComponent, fakeStore);
    mockHistory.push('/player/1');

    render(withStoreComponent);
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
  });

  it('should render "page not found" when user navigate to undefined root', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const fakeStore = makeFakeStore();
    const { withStoreComponent } = withStore(withHistoryComponent, fakeStore);
    mockHistory.push('/undefined');

    render(withStoreComponent);
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
