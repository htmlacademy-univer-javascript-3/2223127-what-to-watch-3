import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatuses } from '../../types/state';
import HeaderSignIn from '../header-sign-in/header-sign-in';
import { logout } from '../../store/api-actions/delete-actions/delete-actions';
import { getAuthorizationStatus } from '../../store/user-process/selector';

function Header() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(getAuthorizationStatus);
  const pageClass = location.pathname === '/login' ? 'user-page__head' : 'film-card_head';
  function unLoginHandler(){
    dispatch(logout());
  }


  return (
    <header className={`page-header ${pageClass}`}>
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {isAuth === AuthorizationStatuses.authorized ?
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
          <li className="user-block__item">
            <Link to={'/login'} onClick={unLoginHandler} className="user-block__link">Sign out</Link>
          </li>
        </ul>
        :
        <HeaderSignIn/>}
    </header>
  );
}

export default Header;
