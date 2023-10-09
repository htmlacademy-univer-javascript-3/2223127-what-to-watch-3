import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

const SelectedFilmSettings = {
  FilmName: 'The Grand Budapest Hotel',
  FilmGenre: 'Drama',
  FilmYear: 2014,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      filmName={SelectedFilmSettings.FilmName}
      filmGenre={SelectedFilmSettings.FilmGenre}
      filmYear={SelectedFilmSettings.FilmYear}
    />
  </React.StrictMode>
);
