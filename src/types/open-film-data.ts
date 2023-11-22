export type OpenFilmData = {
    id: string;
    name: string;
    posterImage: string;
    backgroundImage: string;
    backgroundColor: string;
    videoLink: string;
    description: string;
    rating: number;
    scoresCount: number;
    director: string;
    starring: string[];
    runtime: number;
    genre: string;
    released: string;
    isFavorite: boolean;
}

export const InitialOpenFilmData: OpenFilmData = {
  id: '',
  name: '',
  posterImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [],
  runtime: 0,
  genre: '',
  released: '',
  isFavorite: false,
};

export type FilmComment = {
    id: string;
    comment: string;
    date: string;
    rating: number;
    user: string;
}
