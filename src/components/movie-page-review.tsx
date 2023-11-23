import { useAppSelector } from '../hooks';
import { getFilmComments } from '../store/film-process/selector';
import Review from './review';

function MoviePageReview() {
  const reviews = useAppSelector(getFilmComments);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review, index) => index < reviews.length / 2 && <Review key={review.id} description={review.comment} author={review.user} date={review.date} rating={review.rating}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.map((review, index) => index >= reviews.length / 2 && <Review key={review.id} description={review.comment} author={review.user} date={review.date} rating={review.rating} />)}
      </div>
    </div>
  );
}

export default MoviePageReview;
