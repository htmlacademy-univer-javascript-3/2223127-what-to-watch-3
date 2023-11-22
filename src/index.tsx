import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { FilmsData } from './mocks/films';
import { MyListFilms } from './mocks/myListFilms';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        filmsData={FilmsData}
        myListFilms={MyListFilms}
      />
    </Provider>
  </React.StrictMode>
);
