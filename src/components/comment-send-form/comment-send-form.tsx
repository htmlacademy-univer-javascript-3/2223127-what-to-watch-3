import {ChangeEvent, SyntheticEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addComment } from '../../store/api-actions/post-actions/post-action';
import { getErrorMessage } from '../../store/user-process/selector';

type CommentSendFormProps = {
  filmId: string;
}

function CommentSendForm({filmId}: CommentSendFormProps) {
  const dispatch = useAppDispatch();
  const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [rating, setRatingForm] = useState(0);
  const [commentForm, setCommentForm] = useState('');
  const errorMessageData = useAppSelector(getErrorMessage);

  function handleRating(evt: React.MouseEvent<HTMLInputElement>){
    setRatingForm(Number(evt.currentTarget.value));
  }

  function handleComment(evt: ChangeEvent<HTMLTextAreaElement>){
    setCommentForm(evt.currentTarget.value);
  }

  function handleSubmit(evt: SyntheticEvent){
    evt.preventDefault();
    dispatch(addComment({filmId: filmId, comment: commentForm, rating: rating}));
  }

  return (
    <div className="add-review">
      <form onSubmit={handleSubmit} action="#" className="add-review__form">
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
          {errorMessageData}
          <div className="add-review__submit">
            <button disabled={rating === 0 || commentForm.length < 50 || commentForm.length > 400} className="add-review__btn" type="submit">
                    Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentSendForm;
