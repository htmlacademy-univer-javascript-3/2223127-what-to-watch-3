import MainPage from '../pages/main-page';
import {Route, Routes } from 'react-router-dom';
import SignIn from '../pages/sign-in';
import MyList from '../pages/my-list';
import AddReview from '../pages/add-review';
import Player from '../pages/player';
import PageNotFound from '../pages/page-not-found';
import AuthChecker from './auth-checker';
import { useEffect } from 'react';
import MoviePageLayout from '../layouts/movie-page-layout';
import MoviePageOverview from './movie-page-overview';
import MoviePageDetails from './movie-page-details';
import MoviePageReview from './movie-page-review';
import { useAppDispatch, useAppSelector } from '../hooks';
import { AuthorizationStatuses, LoadStatuses } from '../types/state';
import { getFavoriteFilms, getListOfFilms } from '../store/api-actions/get-actions';
import LoadingScreen from './loading-screen';
import HistoryRouter from '../history-route';
import browserHistory from './browser-history';
import { FavoriteFilms, getIsLoading, getOpenFilmData } from '../store/film-process/selector';
import { getAuthorizationStatus } from '../store/user-process/selector';
import { changeFavoriteStatus } from '../store/api-actions/post-action';

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);
  const isAuth = useAppSelector(getAuthorizationStatus);
  const activeFilm = useAppSelector(getOpenFilmData);
  const favoriteFilms = useAppSelector(FavoriteFilms);

  useEffect(() => {
    if(isAuth !== AuthorizationStatuses.undefined) {
      dispatch(getListOfFilms());
      dispatch(getFavoriteFilms());
    }
  }, [dispatch, isAuth]);

  function addFavoriteHandler(){
    if(activeFilm.isFavorite){
      dispatch(changeFavoriteStatus({filmId: activeFilm.id, status: 0}));
    } else{
      dispatch(changeFavoriteStatus({filmId: activeFilm.id, status: 1}));
    }
  }

  if(isLoading === LoadStatuses.started) {
    return (
      <LoadingScreen/>
    );
  }else{
    return (
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path="/">
            <Route index element={
              <MainPage
                activeFilm={activeFilm}
                numberFavoriteFilms={favoriteFilms.length}
                changeFavorite={addFavoriteHandler}
              />
            }
            />
            <Route path="/login" element={<SignIn/>}></Route>
            <Route path="/mylist" element={
              <AuthChecker isAuth={isAuth}>
                <MyList/>
              </AuthChecker>
            }
            >
            </Route>
            <Route path="/films/:id" element={<MoviePageLayout changeFavorite={addFavoriteHandler} isAuth={isAuth} activeFilm={activeFilm} numberFavoriteFilms={favoriteFilms.length}/>}>
              <Route index element={<MoviePageOverview activeFilm={activeFilm}/>}/>
              <Route path="details" element={<MoviePageDetails activeFilm={activeFilm}/>}></Route>
              <Route path="reviews" element={<MoviePageReview/>}></Route>
            </Route>
            <Route path="/films/:id/review" element={<AddReview isAuth={isAuth} activeFilm={activeFilm}/>}></Route>
            <Route path="/player/:id" element={<Player videoLink={activeFilm.videoLink} videoPoster={activeFilm.backgroundImage}/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
          </Route>
        </Routes>
      </HistoryRouter>
    );
  }
}

export default App;
