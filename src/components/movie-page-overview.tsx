import { ActorsList } from '../mocks/actors';
import { FilmData } from '../mocks/films';

type MoviePageOverviewProps = {
  filmsData: {[key: string]: FilmData};
  activeFilm: string;
};

function MoviePageOverview({filmsData, activeFilm}: MoviePageOverviewProps) {

  const rating = filmsData[activeFilm].overview.ratingScore;
  const numberOfRatings = filmsData[activeFilm].overview.numberOfRatings;
  const description = filmsData[activeFilm].overview.description;
  const director = filmsData[activeFilm].director;

  let ratingName: string;
  if(rating > 8) {
    ratingName = 'VeryGood';
  } else if(rating > 5) {
    ratingName = 'Good';
  } else{
    ratingName = 'Bad';
  }

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
