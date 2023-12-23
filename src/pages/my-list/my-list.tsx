import { Link } from 'react-router-dom';
import { logout } from '../../store/api-actions/delete-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ListOfFilmCards from '../../components/list-of-film-card/list-of-film-cards';
import { useEffect } from 'react';
import { getFavoriteFilms } from '../../store/api-actions/get-actions/get-actions';
import { FavoriteFilms, getIsFavoriteFilmsLoading } from '../../store/favorite-film-process/selector';
import { LoadStatuses } from '../../types/state';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { getUserData } from '../../store/user-process/selector';

function MyList() {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(FavoriteFilms);
  const isLoading = useAppSelector(getIsFavoriteFilmsLoading);
  const userData = useAppSelector(getUserData);

  useEffect(() => {
    dispatch(getFavoriteFilms());
  }, [dispatch]);

  if(isLoading === LoadStatuses.started){
    return (
      <LoadingScreen/>
    );
  }else{
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">
            My list <span className="user-page__film-count">{favoriteFilms.length}</span>
          </h1>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src={userData.avatarUrl}
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <Link to={'/login'} onClick={() => {
                dispatch(logout());
              }} className="user-block__link"
              >Sign out
              </Link>
            </li>
          </ul>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">
            <ListOfFilmCards filmList={favoriteFilms} numberFilmCardsVisible={100}/>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default MyList;
