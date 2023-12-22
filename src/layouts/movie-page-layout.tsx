import { Link, Outlet, useParams } from 'react-router-dom';
import ListOfFilmCards from '../components/list-of-film-card/list-of-film-cards';
import { useEffect } from 'react';
import { OpenFilmData } from '../types/open-film-data';
import { useAppDispatch, useAppSelector } from '../hooks';
import Header from '../components/header/header';
import { AuthorizationStatuses, LoadStatuses } from '../types/state';
import { getFilmById, getFilmComments, getSimilarFilms } from '../store/api-actions/get-actions/get-actions';
import { SimilarFilms, getIsOpenFilmLoading } from '../store/open-film-process/selector';
import LoadingScreen from '../components/loading-screen/loading-screen';

type MoviePageLayoutProps = {
    activeFilm: OpenFilmData;
    isAuth: AuthorizationStatuses;
    numberFavoriteFilms: number;
    changeFavorite: () => void;
  };

function MoviePageLayout({activeFilm, isAuth, numberFavoriteFilms, changeFavorite}: MoviePageLayoutProps) {
  const isLoading = useAppSelector(getIsOpenFilmLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLoading]);
  const params = useParams();
  const pageId = params.id || activeFilm.id;

  useEffect(() => {
    if(pageId !== activeFilm.id){
      dispatch(getFilmById(pageId));
      dispatch(getSimilarFilms(pageId));
      dispatch(getFilmComments(pageId));
      window.scrollTo(0, 0);
    }
  }, [dispatch, pageId, activeFilm]);

  const similarFilms = useAppSelector(SimilarFilms);

  const moviePageStyle = {
    backgroundColor: activeFilm.backgroundColor
  };
  const genre = activeFilm.genre;

  if(isLoading === LoadStatuses.started) {
    return (
      <LoadingScreen/>
    );
  }else{
    return (
      <>
        <section className="film-card film-card--full" style={moviePageStyle}>
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img
                src={activeFilm.backgroundImage}
                alt={activeFilm.name}
              />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header/>

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{activeFilm.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{genre}</span>
                  <span className="film-card__year">{activeFilm.released}</span>
                </p>

                <div className="film-card__buttons">
                  <Link to={`/player/${ activeFilm.id}`}
                    className="btn btn--play film-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </Link>
                  <Link onClick={changeFavorite} to="/mylist"
                    className="btn btn--list film-card__button"
                    data-testid='change-favorite'
                    type="button"
                  >
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref={activeFilm.isFavorite ? '#in-list' : '#add'}></use>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">{numberFavoriteFilms}</span>
                  </Link>
                  {isAuth === AuthorizationStatuses.authorized && <Link to={`/films/${ activeFilm.id }/review`} className="btn film-card__button">Add review</Link>}
                </div>
              </div>
            </div>
          </div>
          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img
                  src={activeFilm.posterImage}
                  alt={`${activeFilm.name} poster`}
                  width="218"
                  height="327"
                />
              </div>

              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li className="film-nav__item film-nav__item--active">
                      <Link to={`/films/${ activeFilm.id}`} className="film-nav__link">
                        Overview
                      </Link>
                    </li>
                    <li className="film-nav__item">
                      <Link to={`/films/${ activeFilm.id }/details`} className="film-nav__link">
                        Details
                      </Link>
                    </li>
                    <li className="film-nav__item">
                      <Link to={`/films/${ activeFilm.id }/reviews`} className="film-nav__link">
                        Reviews
                      </Link>
                    </li>
                  </ul>
                </nav>

                <Outlet/>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__films-list">
              <ListOfFilmCards numberFilmCardsVisible={4} filmList={similarFilms}/>
            </div>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default MoviePageLayout;
