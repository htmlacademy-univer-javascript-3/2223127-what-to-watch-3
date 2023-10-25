import { Link, Outlet, useParams } from 'react-router-dom';
import { FilmData } from '../mocks/films';
import { MoreLikeFilmList } from '../mocks/more-like-this';
import ListOfFilmCards from '../components/list-of-film-cards';
import { useEffect } from 'react';

type MoviePageLayoutProps = {
    filmsData: {[key: string]: FilmData};
    activeFilm: string;
    myListFilmsNumber: number;
    handleActiveFilm: (filmId: string) => void;
  };

function MoviePageLayout({filmsData, activeFilm, myListFilmsNumber, handleActiveFilm}: MoviePageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const params = useParams();
  const prodId = params.id || '0';
  handleActiveFilm(prodId);

  const moviePageStyle = {
    backgroundColor: filmsData[activeFilm].filmMedia.filmBackgroundColor
  };

  return (
    <>
      <section className="film-card film-card--full" style={moviePageStyle}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={filmsData[activeFilm].filmMedia.filmBackgroundImage}
              alt={filmsData[activeFilm].filmName}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width="63"
                    height="63"
                  />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmsData[activeFilm].filmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmsData[activeFilm].filmGenre}</span>
                <span className="film-card__year">{filmsData[activeFilm].filmReleased}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${ activeFilm}`}
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to="/mylist"
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{myListFilmsNumber}</span>
                </Link>
                <Link to={`/films/${ activeFilm }/review`} className="btn film-card__button">
                        Add review
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={filmsData[activeFilm].filmMedia.filmPoster}
                alt={`${filmsData[activeFilm].filmName }poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <Link to={`/films/${ activeFilm}`} className="film-nav__link">
                        Overview
                    </Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={`/films/${ activeFilm }/details`} className="film-nav__link">
                        Details
                    </Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={`/films/${ activeFilm }/reviews`} className="film-nav__link">
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
            <ListOfFilmCards filmList={MoreLikeFilmList} handleActiveFilm={handleActiveFilm}/>
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

export default MoviePageLayout;
