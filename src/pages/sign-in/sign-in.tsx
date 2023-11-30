import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions/post-actions/post-action';
import { getErrorMessage } from '../../store/user-process/selector';

function SignIn() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const errorMessageData = useAppSelector(getErrorMessage);

  function emailHandle(evt: ChangeEvent<HTMLInputElement>) {
    setEmail(evt.target.value);
  }

  function passwordHandle(evt: ChangeEvent<HTMLInputElement>) {
    setPassword(evt.target.value);
  }

  function formSubmit(evt: SyntheticEvent){
    evt.preventDefault();
    dispatch(loginAction({email: email, password: password}));
  }

  return (
    <div className="user-page">
      <Header/>
      <div className="sign-in user-page__content">
        <form onSubmit={formSubmit} action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={emailHandle}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                  Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={passwordHandle}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                  Password
              </label>
            </div>
          </div>
          {errorMessageData}
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" data-testId={'sign-in-btn'}>
                Sign in
            </button>
          </div>
        </form>
      </div>

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

export default SignIn;
