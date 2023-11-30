import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre, changeListFilmsByGenre } from '../../store/film-process/film-process';
import { getFilmList } from '../../store/film-process/selector';
import GenreListItem from '../genre-list-item/genre-list-item';

function ListOfGenres() {
  const filmList = useAppSelector(getFilmList);

  function setUniqGenre(){
    const list: string[] = [];
    filmList.map((film) => {
      if(!list.includes(film.genre)){
        list.push(film.genre);
      }
    });
    return list;
  }


  const genreList = setUniqGenre();


  const dispatch = useAppDispatch();

  function handleGenreClick(genre: string){
    dispatch(changeGenre(genre));
    dispatch(changeListFilmsByGenre());
  }

  return (
    <ul className="catalog__genres-list">
      <li onClick={() => handleGenreClick('All genres')} className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">
                All genres
        </a>
      </li>
      {genreList.map((genre) => <GenreListItem key={genre} genre={genre} onClickGenre={handleGenreClick}/>)}
    </ul>
  );
}

export default ListOfGenres;
