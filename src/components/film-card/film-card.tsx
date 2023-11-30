import { Link } from 'react-router-dom';
import VideoPlayer from '../videoplayer';
import { useState } from 'react';

type FilmCardProps = {
  filmName: string;
  filmPreview: string;
  filmId: string;
  handleActiveFilm: (filmId: string) => void;
  previewVideoLink: string;
};


function FilmCard({filmName, filmPreview, filmId, previewVideoLink, handleActiveFilm}: FilmCardProps) {
  const [isHover, setIsHover] = useState(false);
  let timer: NodeJS.Timeout;

  function handleHoverCardId() {
    timer = setTimeout(() =>{
      setIsHover(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }

  function handleHoverLeave() {
    clearTimeout(timer);
    setIsHover(false);
  }


  return (
    <article onMouseEnter={() => handleHoverCardId()} onMouseLeave={() => handleHoverLeave()} className="small-film-card catalog__films-card">
      <div className="small-film-card__image" data-testId='small-film-card-image'>
        <VideoPlayer filmPreview={filmPreview} isActive={isHover} previewVideoLink={previewVideoLink} />
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
