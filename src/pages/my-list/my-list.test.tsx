import { render, screen } from "@testing-library/react";
import { AuthorizationStatuses, FilmFavoriteProcess, LoadStatuses, OpenFilmProcess, UserProcess } from "../../types/state";
import { InitialUserData } from "../../types/user-data";
import { withHistory, withStore } from "../../utils/mock-components";
import { makeFakeFilmComments, makeFakeOpenFilmData } from "../../utils/mocks";
import { InitialOpenFilmData } from "../../types/open-film-data";
import { initialState } from "../../store/film-process/film-process";
import MyList from "./my-list";

describe('Component: MainPage', () => {
    it('should render correct if authorized', () => {
      const expectedMessage = /Catalog/i
      const expectedMyList = /My list/i
  
      const initialState1: UserProcess = {
        authorizationStatus: AuthorizationStatuses.authorized,
        userData: InitialUserData,
        errorMessage: '',
      };

      const initialStateFavorite: FilmFavoriteProcess = {
        isFilmListLoading: LoadStatuses.undefined,
        myList: [],
      };
  
      const { withStoreComponent } = withStore(<MyList/>, { USER: initialState1, FAVORITE: initialStateFavorite });
  
      const preparedComponent = withHistory(withStoreComponent);
  
      render(preparedComponent);
      expect(screen.queryByText(expectedMessage)).toBeInTheDocument();
      expect(screen.queryByText(expectedMyList)).toBeInTheDocument();
    });
  });