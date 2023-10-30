import { ActorsList } from '../mocks/actors';
import { FilmData } from '../mocks/films';

type MoviePageDetailProps = {
  filmsData: {[key: string]: FilmData};
  activeFilm: string;
};

function MoviePageDetails({filmsData, activeFilm}: MoviePageDetailProps) {

  const director = filmsData[activeFilm].director;
  const time = filmsData[activeFilm].runTime;
  const genre = filmsData[activeFilm].filmGenre;
  const released = filmsData[activeFilm].filmReleased;
  const hours = Math.floor(time / 60);
  const minutes = time - hours * 60;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">
                        Director
          </strong>
          <span className="film-card__details-value">
            {director}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">
                        Starring
          </strong>
          <span className="film-card__details-value">
            {ActorsList[activeFilm].join(',\n ')}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">
                        Run Time
          </strong>
          <span className="film-card__details-value">{hours !== 0 && `${hours }h`} {minutes}m</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">
                        Released
          </strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default MoviePageDetails;
