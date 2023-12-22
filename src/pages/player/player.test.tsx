import { render, screen } from "@testing-library/react";
import { AuthorizationStatuses, FilmFavoriteProcess, LoadStatuses, OpenFilmProcess, UserProcess } from "../../types/state";
import { InitialUserData } from "../../types/user-data";
import { withHistory, withStore } from "../../utils/mock-components";
import { makeFakeFilmComments, makeFakeOpenFilmData } from "../../utils/mocks";
import { InitialOpenFilmData } from "../../types/open-film-data";
import { initialState } from "../../store/film-process/film-process";
import Player from "./player";

describe('Component: MainPage', () => {
    it('should render correct if authorized', () => {
      const expectedMessage = /Exit/i
  
      const preparedComponent = withHistory(<Player videoLink="" videoPoster=""/>);
  
      render(preparedComponent);
      expect(screen.queryByText(expectedMessage)).toBeInTheDocument();
    });
  });