import { Link } from 'react-router-dom';
import { FilmData } from '../mocks/films';
import ListOfFilmCards from '../components/list-of-film-cards';
import ListOfGenres from '../components/list-of-genres';
import { useAppSelector } from '../hooks';
import ShowMore from '../components/show-more';
import { useState } from 'react';

type FilmDataProps = {
  filmsData: {[key: string]: FilmData};
  myListFilmsNumber: number;
  activeFilm: string;
  handleActiveFilm: (filmId: string) => void;
};

function MainPage({filmsData, myListFilmsNumber, activeFilm, handleActiveFilm }: FilmDataProps) {
  const filmsByGenre = useAppSelector((state) => state.filmsByGenre);

  const [numberFilmCardsVisible, setCountFilmCardsVisible] = useState(8);

  function showMoreClickHandle(){
    setCountFilmCardsVisible(numberFilmCardsVisible + 8);
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={filmsData[activeFilm].filmMedia.filmBackgroundImage}
            alt={filmsData[activeFilm].filmName}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
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
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={filmsData[activeFilm].filmMedia.filmPoster}
                alt={`${filmsData[activeFilm].filmName }poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmsData[activeFilm].filmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmsData[activeFilm].filmGenre}</span>
                <span className="film-card__year">{filmsData[activeFilm].filmReleased}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  className="btn btn--play film-card__button"
                  type="button"
                  to={`player/${ activeFilm}`}
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
          <ListOfGenres/>
          <div className="catalog__films-list">
            <ListOfFilmCards filmList={filmsByGenre} handleActiveFilm={handleActiveFilm} numberFilmCardsVisible={numberFilmCardsVisible}/>
          </div>
          {numberFilmCardsVisible < filmsByGenre.length && <ShowMore onClickShowMore={showMoreClickHandle}/>}
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
