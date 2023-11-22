import { useNavigate } from 'react-router-dom';
import CommentSendForm from '../components/comment-send-form';
import { OpenFilmData } from '../types/open-film-data';
import { AuthorizationStatuses } from '../types/state';
import Header from '../components/header';
import { useEffect } from 'react';

type AddReviewProps = {
  activeFilm: OpenFilmData;
  isAuth: AuthorizationStatuses;
};

function AddReview({activeFilm, isAuth}: AddReviewProps) {
  const navigate = useNavigate();
  useEffect(() => {
    if(isAuth !== AuthorizationStatuses.authorized) {
      navigate('/');
    }
  });

  const moviePageStyle = {
    backgroundColor: activeFilm.backgroundColor
  };

  return (
    <section className="film-card film-card--full" style={moviePageStyle}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={activeFilm.backgroundImage}
            alt={activeFilm.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={activeFilm.posterImage}
            alt="The Grand Budapest Hotel poster"
            width="218"
            height="327"
          />
        </div>
        <CommentSendForm filmId={activeFilm.id}/>
      </div>
    </section>
  );
}

export default AddReview;
