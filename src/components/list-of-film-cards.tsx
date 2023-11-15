import { useEffect, useRef, useState } from 'react';
import FilmCard from './film-card';
import { Film } from '../types/film-data';

type ListOfFilmCardsProps = {
    filmList: Film[];
    handleActiveFilm: (filmId: string) => void;
    numberFilmCardsVisible?: number;
  };

function ListOfFilmCards({filmList, handleActiveFilm, numberFilmCardsVisible}: ListOfFilmCardsProps) {
  const [hoverFilm, setHoverFilmId] = useState('');
  const hoverFilmRef = useRef(hoverFilm);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if(hoverFilmRef.current !== '') {
      timer = setTimeout(() =>{
        setHoverFilmId(hoverFilmRef.current);
      }, 1000);
    } else{
      setHoverFilmId(hoverFilmRef.current);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isHover]);

  function handleHoverCardId(id: string, checker: boolean){
    setHoverFilmId(hoverFilmRef.current);
    if(checker){
      hoverFilmRef.current = id;
    } else{
      hoverFilmRef.current = '';
    }
    setIsHover(!isHover);
  }

  return (
    <>
      {filmList.map((film, i) => {
        if(!numberFilmCardsVisible){
          return <FilmCard key={film.id} filmId={film.id} hoverFilm={hoverFilm} filmName={film.name} filmPreview={film.previewImage} previewVideoLink={film.previewVideoLink} setHoverCardId={handleHoverCardId} handleActiveFilm={handleActiveFilm} />;
        } else if(i <= numberFilmCardsVisible - 1){
          return <FilmCard key={film.id} filmId={film.id} hoverFilm={hoverFilm} filmName={film.name} filmPreview={film.previewImage} previewVideoLink={film.previewVideoLink} setHoverCardId={handleHoverCardId} handleActiveFilm={handleActiveFilm} />;
        }
      })}
    </>
  );
}

export default ListOfFilmCards;
