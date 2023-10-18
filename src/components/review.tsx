type ReviewProps = {
    description: string;
    author: string;
    date: Date;
    rating: number;
  };

const Month = {
  '1': 'January',
  '2': 'February',
  '3': 'March',
  '4': 'April',
  '5': 'May',
  '6': 'June',
  '7': 'July',
  '8': 'August',
  '9': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
};

function Review({ description, author, date, rating }: ReviewProps) {
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {description}
        </p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">
            {Month[month - 1 as unknown as keyof typeof Month]} {day}, {year}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;
