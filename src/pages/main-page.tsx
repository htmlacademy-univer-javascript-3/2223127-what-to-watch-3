import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useEffect } from 'react';
import Header from '../components/header';
import { OpenFilmData } from '../types/open-film-data';
import { checkAuthorization } from '../store/api-actions/get-actions';
import { AuthorizationStatuses } from '../types/state';
import CardsBlock from '../components/cards-block';
import { getAuthorizationStatus } from '../store/user-process/selector';

type FilmDataProps = {
  myListFilmsNumber: number;
  activeFilm: OpenFilmData;
};

function MainPage({myListFilmsNumber, activeFilm }: FilmDataProps) {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if(authStatus !== AuthorizationStatuses.authorized){
      dispatch(checkAuthorization());
    }
  }, [dispatch, authStatus]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={activeFilm.backgroundImage}
            alt={activeFilm.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={activeFilm.posterImage}
                alt={`${activeFilm.posterImage} poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{activeFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{activeFilm.genre}</span>
                <span className="film-card__year">{activeFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  className="btn btn--play film-card__button"
                  type="button"
                  to={`player/${activeFilm.id}`}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link
                  className="btn btn--list film-card__button"
                  type="button"
                  to="/mylist"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{myListFilmsNumber}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <CardsBlock/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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

export default MainPage;
