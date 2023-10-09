import MainPage from '../pages/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from '../pages/sign-in';
import MyList from '../pages/my-list';
import MovePage from '../pages/move-page';
import AddReview from '../pages/add-review';
import Player from '../pages/player';
import PageNotFound from '../pages/page-not-found';
import AuthChecker from './auth-checker';

type FilmDataProps = {
  filmName: string;
  filmGenre: string;
  filmYear: number;
  filmList: readonly { [key: string]: string}[];
  isAuth: boolean;
};

function App(props: FilmDataProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            <MainPage
              filmName={props.filmName}
              filmGenre={props.filmGenre}
              filmYear={props.filmYear}
              filmList={props.filmList}
            />
          }
          >
          </Route>
          <Route path="/login" element={<SignIn/>}></Route>
          <Route path="/mylist" element={
            <AuthChecker isAuth={props.isAuth}>
              <MyList/>
            </AuthChecker>
          }
          >
          </Route>
          <Route path="/films">
            <Route path="/films/:id" element={<MovePage/>}>
              <Route path="/films/:id/review" element={<AddReview/>}></Route>
            </Route>
          </Route>
          <Route path="/player/:id" element={<Player/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
