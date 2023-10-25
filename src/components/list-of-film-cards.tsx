import { useEffect, useRef, useState } from 'react';
import FilmCard from './film-card';

type ListOfFilmCardsProps = {
    filmList: readonly { [key: string]: string}[];
    handleActiveFilm: (filmId: string) => void;
  };

function ListOfFilmCards({filmList, handleActiveFilm}: ListOfFilmCardsProps) {
  const [hoverFilm, setHoverFilmId] = useState('');
  const hoverFilmRef = useRef(hoverFilm);
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let isNeedUpdate = true;
    if(hoverFilmRef.current !== '') {
      timer = setTimeout(() =>{
        setHoverFilmId(hoverFilmRef.current);
      }, 1000);
    } else{
      setHoverFilmId(hoverFilmRef.current);
    }

    return () => {
      clearTimeout(timer);
      isNeedUpdate = false;
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
      {filmList.map((film) => <FilmCard key={film.id} filmId={film.id} hoverFilm={hoverFilm} filmName={film.filmName} filmPreview={film.filmPreview} previewVideoLink={film.previewVideoLink} setHoverCardId={handleHoverCardId} handleActiveFilm={handleActiveFilm} />)}
    </>
  );
}

export default ListOfFilmCards;
