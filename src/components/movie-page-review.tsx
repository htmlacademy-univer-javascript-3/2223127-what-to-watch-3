import { useOutletContext } from 'react-router-dom';
import { ReviewList } from '../mocks/review';
import Review from './review';

function MoviePageReview() {

  const [activeFilm]: [string] = useOutletContext();
  const reviews = ReviewList[activeFilm];
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review, index) => index < reviews.length / 2 && <Review key={review.id} description={review.review} author={review.reviewAuthor} date={review.reviewDate} rating={review.reviewRatingScore}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.map((review, index) => index >= reviews.length / 2 && <Review key={review.id} description={review.review} author={review.reviewAuthor} date={review.reviewDate} rating={review.reviewRatingScore} />)}
      </div>
    </div>
  );
}

export default MoviePageReview;
