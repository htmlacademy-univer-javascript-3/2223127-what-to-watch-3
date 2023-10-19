import { useState } from 'react';
import FilmCard from './film-card';

type ListOfFilmCardsProps = {
    filmList: readonly { [key: string]: string}[];
    handleActiveFilm: (filmId: string) => void;
  };

function ListOfFilmCards({filmList, handleActiveFilm}: ListOfFilmCardsProps) {
  const [hoverCardId, setHoverCardId] = useState('');

  hoverCardId.slice(0);

  function handleHoverCardId(evt: React.MouseEvent<HTMLDivElement>){
    setHoverCardId(evt.currentTarget.id);
  }

  function deleteHoverCardId(){
    setHoverCardId('');
  }

  return (
    <>
      {filmList.map((film) => <FilmCard key={film.id} filmId={film.id} filmName={film.filmName} filmPreview={film.filmPreview} setHoverCardId={handleHoverCardId} deleteHoverCardId={deleteHoverCardId} handleActiveFilm={handleActiveFilm} />)}
    </>
  );
}

export default ListOfFilmCards;
