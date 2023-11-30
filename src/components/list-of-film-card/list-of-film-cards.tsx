import FilmCard from '../film-card/film-card';
import { Film } from '../../types/film-data';
import { useAppDispatch } from '../../hooks';
import { getFilmById, getFilmComments, getSimilarFilms } from '../../store/api-actions/get-actions/get-actions';

type ListOfFilmCardsProps = {
    filmList: Film[];
    numberFilmCardsVisible: number;
  };

function ListOfFilmCards({filmList, numberFilmCardsVisible}: ListOfFilmCardsProps) {
  const dispatch = useAppDispatch();

  function handleActiveFilm(filmId: string){
    dispatch(getFilmById(filmId));
    dispatch(getSimilarFilms(filmId));
    dispatch(getFilmComments(filmId));
    window.scrollTo(0, 0);
  }

  return (
    <>
      {filmList.map((film, i) => {
        if(i <= numberFilmCardsVisible - 1){
          return <FilmCard key={film.id} filmId={film.id} filmName={film.name} filmPreview={film.previewImage} previewVideoLink={film.previewVideoLink} handleActiveFilm={handleActiveFilm} />;
        }
      })}
    </>
  );
}

export default ListOfFilmCards;
