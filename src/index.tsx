import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { FilmList, IsAuth } from './data';
import { FilmsData } from './mocks/films';
import { MyListFilms } from './mocks/myListFilms';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      filmList={FilmList}
      filmsData={FilmsData}
      myListFilms={MyListFilms}
      isAuth={IsAuth}
    />
  </React.StrictMode>
);
