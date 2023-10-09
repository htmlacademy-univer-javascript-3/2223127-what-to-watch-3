import MainPage from './main-page';

type FilmDataProps = {
  filmName: string;
  filmGenre: string;
  filmYear: number;
};

function App(props: FilmDataProps) {
  return (
    <MainPage
      filmName={props.filmName}
      filmGenre={props.filmGenre}
      filmYear={props.filmYear}
    />
  );
}

export default App;
