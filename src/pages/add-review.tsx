import CommentSendForm from '../components/comment-send-form';
import { FilmData } from '../mocks/films';

type AddReviewProps = {
  filmsData: {[key: string]: FilmData};
  activeFilm: string;
};

function AddReview({filmsData, activeFilm}: AddReviewProps) {
  const moviePageStyle = {
    backgroundColor: filmsData[activeFilm].filmMedia.filmBackgroundColor
  };

  return (
    <section className="film-card film-card--full" style={moviePageStyle}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={filmsData[activeFilm].filmMedia.filmBackgroundImage}
            alt={filmsData[activeFilm].filmName}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">
                  {filmsData[activeFilm].filmName}
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img
            src={filmsData[activeFilm].filmMedia.filmPoster}
            alt="The Grand Budapest Hotel poster"
            width="218"
            height="327"
          />
        </div>
        <CommentSendForm/>
      </div>
    </section>
  );
}

export default AddReview;
