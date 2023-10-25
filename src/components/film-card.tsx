import { Link } from 'react-router-dom';
import VideoPlayer from './videoplayer';

type FilmCardProps = {
  filmName: string;
  filmPreview: string;
  filmId: string;
  setHoverCardId: (id: string, checker: boolean) => void;
  handleActiveFilm: (filmId: string) => void;
  hoverFilm: string;
  previewVideoLink: string;
};


function FilmCard({filmName, filmPreview, filmId, hoverFilm, previewVideoLink, setHoverCardId, handleActiveFilm}: FilmCardProps) {
  return (
    <article onMouseEnter={() => setHoverCardId(filmId, true)} onMouseLeave={() => setHoverCardId(filmId, false)} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <VideoPlayer filmPreview={filmPreview} isActive={hoverFilm === filmId} previewVideoLink={previewVideoLink} />
      </div>
      <h3 className="small-film-card__title">
        <Link onClick={() => handleActiveFilm(filmId)} to={`/films/${filmId}`} className="small-film-card__link">
          {filmName}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
