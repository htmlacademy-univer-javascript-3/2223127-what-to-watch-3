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
import { useAppSelector } from '../hooks';
import { useDispatch } from 'react-redux';
import { AppDispatch, AuthorizationStatuses, LoadStatuses } from '../types/state';
import { getFilmById, getFilmComments, getListOfFilms, getSimilarFilms } from '../store/api-actions/get-actions';
import LoadingScreen from './loading-screen';
import HistoryRouter from '../history-route';
import browserHistory from './browser-history';

type FilmDataProps = {
  myListFilms: readonly { [key: string]: string}[];
};

function App(props: FilmDataProps) {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useAppSelector((state) => state.isFilmListLoading);
  const isAuth = useAppSelector((state) => state.authorizationStatus);
  const activeFilm = useAppSelector((state) => state.openFilmData);

  useEffect(() => {
    if(isAuth !== AuthorizationStatuses.undefined) {
      dispatch(getListOfFilms());
    }
  }, [dispatch, isAuth]);

  function handleActiveFilm(id: string){
    dispatch(getFilmById(id));
    dispatch(getSimilarFilms(id));
    dispatch(getFilmComments(id));
    window.scrollTo(0, 0);
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
                myListFilmsNumber={props.myListFilms.length}
                activeFilm={activeFilm}
                handleActiveFilm={handleActiveFilm}
              />
            }
            />
            <Route path="/login" element={<SignIn/>}></Route>
            <Route path="/mylist" element={
              <AuthChecker isAuth={isAuth}>
                <MyList
                  myListFilms={props.myListFilms}
                />
              </AuthChecker>
            }
            >
            </Route>
            <Route path="/films/:id" element={<MoviePageLayout isAuth={isAuth} activeFilm={activeFilm} myListFilmsNumber={props.myListFilms.length} handleActiveFilm={handleActiveFilm}/>}>
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
