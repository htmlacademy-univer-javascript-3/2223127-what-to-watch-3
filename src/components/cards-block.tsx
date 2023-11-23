import { useState } from 'react';
import { useAppSelector } from '../hooks';
import ListOfFilmCards from './list-of-film-cards';
import ListOfGenres from './list-of-genres';
import ShowMore from './show-more';
import { getFilmsByGenre } from '../store/film-process/selector';

function CardsBlock() {
  const filmsByGenre = useAppSelector(getFilmsByGenre);

  const [numberFilmCardsVisible, setCountFilmCardsVisible] = useState(8);

  function showMoreClickHandle(){
    setCountFilmCardsVisible(numberFilmCardsVisible + 8);
  }
  return (
    <>
      <ListOfGenres/>
      <div className="catalog__films-list">
        <ListOfFilmCards filmList={filmsByGenre} numberFilmCardsVisible={numberFilmCardsVisible}/>
      </div>
      {numberFilmCardsVisible < filmsByGenre.length && <ShowMore onClickShowMore={showMoreClickHandle}/>}
    </>
  );
}

export default CardsBlock;
