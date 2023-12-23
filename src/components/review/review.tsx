type ReviewProps = {
    description: string;
    author: string;
    date: string;
    rating: number;
  };

function Review({ description, author, date, rating }: ReviewProps) {
  const convertedDate = date.split('T')[0].split('-');

  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {description}
        </p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">
            {`${month[Number(convertedDate[1]) - 1]} ${convertedDate[2]}, ${convertedDate[0]}`}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
