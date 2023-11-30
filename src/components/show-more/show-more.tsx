type ShowMoreProps = {
    onClickShowMore: () => void;
}

function ShowMore({onClickShowMore}: ShowMoreProps) {
  return (
    <div onClick={onClickShowMore} className="catalog__more">
      <button className="catalog__button" type="button">
                Show more
      </button>
    </div>
  );
}

export default ShowMore;
