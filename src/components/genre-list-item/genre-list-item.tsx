type GenreListItemProps = {
    genre: string;
    onClickGenre: (genre: string) => void;
};

function GenreListItem({genre, onClickGenre}: GenreListItemProps) {
  return (
    <li onClick={() => onClickGenre(genre)} className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">
        {genre}
      </a>
    </li>
  );
}

export default GenreListItem;
