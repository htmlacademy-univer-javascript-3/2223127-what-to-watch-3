import { OpenFilmData } from '../../types/open-film-data';

type MoviePageOverviewProps = {
  activeFilm: OpenFilmData;
};

function MoviePageOverview({activeFilm}: MoviePageOverviewProps) {

  const rating = activeFilm.rating;
  const numberOfRatings = activeFilm.scoresCount;
  const description = activeFilm.description;
  const director = activeFilm.director;

  function getRatingName(){
    if(rating > 8) {
      return 'VeryGood';
    } else if(rating > 5) {
      return 'Good';
    } else{
      return 'Bad';
    }
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingName()}</span>
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
            {activeFilm.starring.join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
}

export default MoviePageOverview;
