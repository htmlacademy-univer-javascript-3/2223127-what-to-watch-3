import MainPage from '../pages/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from '../pages/sign-in';
import MyList from '../pages/my-list';
import AddReview from '../pages/add-review';
import Player from '../pages/player';
import PageNotFound from '../pages/page-not-found';
import AuthChecker from './auth-checker';
import { FilmData, FilmsData } from '../mocks/films';
import { useEffect, useState } from 'react';
import MoviePageLayout from '../layouts/movie-page-layout';
import MoviePageOverview from './movie-page-overview';
import MoviePageDetails from './movie-page-details';
import MoviePageReview from './movie-page-review';
import { useAppSelector } from '../hooks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../types/state';
import { getListOfFilms } from '../store/api-actions/get-actions';
import LoadingScreen from './loading-screen';

type FilmDataProps = {
  filmsData: {[key: string]: FilmData};
  myListFilms: readonly { [key: string]: string}[];
  isAuth: boolean;
};

function App(props: FilmDataProps) {
  const dispatch = useDispatch<AppDispatch>();
  const filmList = useAppSelector((state) => state.filmsList);
  const isLoading = useAppSelector((state) => state.isFilmListLoading);
  const [activeFilm, setActiveFilm] = useState('1');

  useEffect(() => {
    dispatch(getListOfFilms());
  }, [dispatch]);

  function handleActiveFilm(filmId: string){
    setActiveFilm(filmId);
    window.scrollTo(0, 0);
  }

  if(isLoading){
    return (
      <LoadingScreen/>
    );
  }else{
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={
              <MainPage
                filmsData={props.filmsData}
                myListFilmsNumber={props.myListFilms.length}
                activeFilm={activeFilm}
                handleActiveFilm={handleActiveFilm}
              />
            }
            />
            <Route path="/login" element={<SignIn/>}></Route>
            <Route path="/mylist" element={
              <AuthChecker isAuth={props.isAuth}>
                <MyList
                  myListFilms={props.myListFilms}
                />
              </AuthChecker>
            }
            >
            </Route>
            <Route path="/films/:id" element={<MoviePageLayout miniListCards={filmList} filmsData={props.filmsData} activeFilm={activeFilm} myListFilmsNumber={props.myListFilms.length} handleActiveFilm={handleActiveFilm}/>}>
              <Route index element={<MoviePageOverview filmsData={props.filmsData} activeFilm={activeFilm}/>}/>
              <Route path="details" element={<MoviePageDetails filmsData={props.filmsData} activeFilm={activeFilm}/>}></Route>
              <Route path="reviews" element={<MoviePageReview activeFilm={activeFilm}/>}></Route>
            </Route>
            <Route path="/films/:id/review" element={<AddReview filmsData={props.filmsData} activeFilm={activeFilm}/>}></Route>
            <Route path="/player/:id" element={<Player videoLink={FilmsData[activeFilm].filmMedia.videoLink} videoPoster={FilmsData[activeFilm].filmMedia.filmBackgroundImage}/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
