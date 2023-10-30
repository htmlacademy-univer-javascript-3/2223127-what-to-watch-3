import {ChangeEvent, useState } from 'react';

function CommentSendForm() {
  const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setRatingForm] = useState(0);
  const [commentForm, setCommentForm] = useState('xd');

  function handleRating(evt: React.MouseEvent<HTMLInputElement>){
    setRatingForm(Number(evt.currentTarget.value));
  }

  function handleComment(evt: ChangeEvent<HTMLTextAreaElement>){
    setCommentForm(evt.currentTarget.value);
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {
              stars.reverse().map((star) => (
                <div key={star}>
                  <input
                    className="rating__input"
                    id={`star-${star}`}
                    type="radio"
                    name="rating"
                    value={star}
                    onClick={handleRating}
                  />
                  <label className="rating__label" htmlFor={`star-${star}`}>
                    Rating {star}
                  </label>
                </div>
              )
              )
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="comment"
            id="review-text"
            placeholder="Review text"
            onChange={handleComment}
            defaultValue={commentForm}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
                    Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentSendForm;
