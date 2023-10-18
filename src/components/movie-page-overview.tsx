import { useOutletContext } from 'react-router-dom';
import { ActorsList } from '../mocks/actors';

function MoviePageOverview() {

  const [rating, ratingName, numberOfRatings, description, activeFilm, director]: [number, string, number, string, string, string] = useOutletContext();
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingName}</span>
          <span className="film-rating__count">{numberOfRatings} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>
          {description}
        </p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            {ActorsList[activeFilm].join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
}

export default MoviePageOverview;
