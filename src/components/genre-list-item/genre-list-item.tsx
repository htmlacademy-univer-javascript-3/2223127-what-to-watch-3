type GenreListItemProps = {
    genre: string;
    currentGenre: string;
    onClickGenre: (genre: string) => void;
};

function GenreListItem({genre, currentGenre, onClickGenre}: GenreListItemProps) {
  return (
    <li onClick={() => onClickGenre(genre)} className={currentGenre === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
      <a href="#" className="catalog__genres-link">
        {genre}
      </a>
    </li>
  );
}

export default GenreListItem;
