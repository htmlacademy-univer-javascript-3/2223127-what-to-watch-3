export type FilmData = {
    readonly filmName: string;
    readonly filmGenre: string;
    readonly filmReleased: number;
    readonly director: string;
    readonly filmMedia: FilmMedia;
    readonly overview: FilmOverview;
    readonly runTime: number;
}

type FilmMedia = {
    readonly filmPoster: string;
    readonly filmBackgroundImage: string;
    readonly filmBackgroundColor: string;
    readonly videoLink: string;
}

type FilmOverview = {
    readonly ratingScore: number;
    readonly numberOfRatings: number;
    readonly description: string;
}

export const FilmsData: {[key: string]: FilmData} = {
  '1': {
    filmName: 'Fantastic Beasts: The Crimes of Grindelwald',
    filmGenre: 'Fantasy',
    filmReleased: 2018,
    director: 'David Yates',
    runTime: 134,
    filmMedia: {
      filmPoster:'https://13.design.pages.academy/static/film/poster/Fantastic_Beasts.jpg',
      filmBackgroundImage:'https://13.design.pages.academy/static/film/background/Fantastic_Beasts.jpg',
      filmBackgroundColor: '#B6A99F',
      videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    },
    overview: {
      ratingScore: 3.4,
      numberOfRatings: 160757,
      description: 'In an effort to thwart Grindelwald\'s plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he\'s unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.',
    },
  },
  '2':{
    filmName: 'Bohemian Rhapsody',
    filmGenre: 'Drama',
    filmReleased: 2018,
    director: 'Bryan Singer',
    runTime: 134,
    filmMedia: {
      filmPoster:'https://13.design.pages.academy/static/film/poster/Bohemian_Rhapsody.jpg',
      filmBackgroundImage:'https://13.design.pages.academy/static/film/background/Bohemian_Rhapsody.jpg',
      filmBackgroundColor: '#929FA5',
      videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    },
    overview: {
      ratingScore: 6.1,
      numberOfRatings: 338903,
      description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.',
    },
  },
  '3':{
    filmName: 'Macbeth',
    filmGenre: 'Drama',
    filmReleased: 2015,
    director: 'Justin Kurzel',
    runTime: 113,
    filmMedia: {
      filmPoster:'https://13.design.pages.academy/static/film/poster/Macbeth.jpg',
      filmBackgroundImage:'https://13.design.pages.academy/static/film/background/Macbeth.jpg',
      filmBackgroundColor: '#F1E9CE',
      videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    },
    overview: {
      ratingScore: 3.3,
      numberOfRatings: 48798,
      description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.',
    },
  },
  '4':{
    filmName: 'Aviator',
    filmGenre: 'Drama',
    filmReleased: 2014,
    director: 'Martin Scorsese',
    runTime: 170,
    filmMedia: {
      filmPoster:'https://13.design.pages.academy/static/film/poster/Aviator.jpg',
      filmBackgroundImage:'https://13.design.pages.academy/static/film/background/Aviator.jpg',
      filmBackgroundColor: '#D6CDAF',
      videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    },
    overview: {
      ratingScore: 9.8,
      numberOfRatings: 307174,
      description: 'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
    },
  },
  '5':{
    filmName: 'We need to talk about Kevin',
    filmGenre: 'Drama',
    filmReleased: 2011,
    director: 'Lynne Ramsay',
    runTime: 112,
    filmMedia: {
      filmPoster:'https://13.design.pages.academy/static/film/poster/We_need_to_talk_about_Kevin.jpg',
      filmBackgroundImage:'https://13.design.pages.academy/static/film/background/We_need_to_talk_about_Kevin.jpg',
      filmBackgroundColor: '#E1DFDE',
      videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    },
    overview: {
      ratingScore: 3.8,
      numberOfRatings: 123240,
      description: 'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.',
    },
  },
  '6':{
    filmName: 'What We Do in the Shadows',
    filmGenre: 'Comedy',
    filmReleased: 2019,
    director: 'Jemaine Clement',
    runTime: 30,
    filmMedia: {
      filmPoster:'https://13.design.pages.academy/static/film/poster/What-We-Do-in-the-Shadows.jpg',
      filmBackgroundImage:'https://13.design.pages.academy/static/film/background/What-We-Do-in-the-Shadows.jpg',
      filmBackgroundColor: '#A39E81',
      videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    },
    overview: {
      ratingScore: 7.2,
      numberOfRatings: 6173,
      description: 'A look into the daily (or rather, nightly) lives of three vampires who\'ve lived together for over 100 years, in Staten Island.',
    },
  },
  '7':{
    filmName: 'The Revenant',
    filmGenre: 'Action',
    filmReleased: 2015,
    director: 'Alejandro G. Iñárritu',
    runTime: 156,
    filmMedia: {
      filmPoster:'https://13.design.pages.academy/static/film/poster/Revenant.jpg',
      filmBackgroundImage:'https://13.design.pages.academy/static/film/background/Revenant.jpg',
      filmBackgroundColor: '#92918B',
      videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    },
    overview: {
      ratingScore: 4,
      numberOfRatings: 618498,
      description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
    },
  },
  '8':{
    filmName: 'Johnny English',
    filmGenre: 'Comedy',
    filmReleased: 2003,
    director: 'Peter Howitt',
    runTime: 88,
    filmMedia: {
      filmPoster:'https://13.design.pages.academy/static/film/poster/Johnny_English.jpg',
      filmBackgroundImage:'https://13.design.pages.academy/static/film/background/Johnny_English.jpg',
      filmBackgroundColor: '#F0DBA2',
      videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    },
    overview: {
      ratingScore: 10,
      numberOfRatings: 136843,
      description: 'After a sudden attack on the MI5, Johnny English, Britain\'s most confident yet unintelligent spy, becomes Britain\'s only spy.',
    },
  }
} as const;
