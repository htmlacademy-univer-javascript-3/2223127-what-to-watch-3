import { Link } from 'react-router-dom';

type FilmCardProps = {
  filmName: string;
  filmPreview: string;
  filmId: string;
  setHoverCardId: (evt: React.MouseEvent<HTMLDivElement>) => void;
  deleteHoverCardId: () => void;
  handleActiveFilm: (filmId: string) => void;
};


function FilmCard({filmName, filmPreview, filmId, setHoverCardId, deleteHoverCardId, handleActiveFilm}: FilmCardProps) {
  return (
    <article id={filmId} onMouseEnter={setHoverCardId} onMouseLeave={deleteHoverCardId} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={filmPreview}
          alt={filmName}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link onClick={() => handleActiveFilm(filmId)} to={`/films/${ filmId}`} className="small-film-card__link">
          {filmName}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
