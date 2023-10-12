import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { SelectedFilmSettings, FilmList, IsAuth } from './data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      filmName={SelectedFilmSettings.FilmName}
      filmGenre={SelectedFilmSettings.FilmGenre}
      filmYear={SelectedFilmSettings.FilmYear}
      filmList={FilmList}
      isAuth={IsAuth}
    />
  </React.StrictMode>
);
