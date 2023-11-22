import { Link } from 'react-router-dom';

function HeaderSignIn() {
  return (
    location.pathname === '/login' ?
      <h1 className="page-title user-page__title">Sign in</h1>
      :
      <div className="user-block">
        <Link to={'/login'} className="user-block__link">Sign in</Link>
      </div>
  );
}

export default HeaderSignIn;
