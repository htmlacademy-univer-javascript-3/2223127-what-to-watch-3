import { useOutletContext } from 'react-router-dom';
import { ActorsList } from '../mocks/actors';

function MoviePageDetails() {

  const [director, time, genre, released, activeFilm]: [string, number, string, number, string] = useOutletContext();
  const hourse = Math.floor(time / 60);
  const minutes = time - hourse * 60;

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
          <span className="film-card__details-value">{hourse !== 0 && `${hourse }h`} {minutes}m</span>
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
