export type FilmReview = {
    readonly id: string;
    readonly review: string;
    readonly reviewRatingScore: number;
    readonly reviewAuthor: string;
    readonly reviewDate: Date;
}

export const ReviewList: {[key: string]: readonly FilmReview[]} =
    {
      '1': [{
        id: '1',
        review: 'This movie will change the way movies are made. Slow-mo, stills, black and white, and color were all used to brilliant effect.',
        reviewRatingScore: 5,
        reviewAuthor: 'Christina',
        reviewDate: new Date(2023, 9, 24)
      },
      {
        id: '2',
        review: 'A movie that will take you to another world full of emotions.',
        reviewRatingScore: 1,
        reviewAuthor: 'Kendall',
        reviewDate: new Date(2023, 9, 22)
      },
      ],

      '2': [{
        id: '1',
        review: 'soskc asdflkjsda;fljkas;dkfj;sldkjf;sjkdf;lsjkdf;lkjs;dfj;',
        reviewRatingScore: 7,
        reviewAuthor: 'asdfsadf',
        reviewDate: new Date(2023, 10, 17)
      },
      {
        id: '2',
        review: 'soskc asdflkjsda;fljkas;dkfj;sldkjf;sjkdf;lsjkdf;lkjs;dfj;',
        reviewRatingScore: 7,
        reviewAuthor: 'asdfsadf',
        reviewDate: new Date(2023, 10, 17)
      },
      {
        id: '3',
        review: 'soskc asdflkjsda;fljkas;dkfj;sldkjf;sjkdf;lsjkdf;lkjs;dfj;',
        reviewRatingScore: 7,
        reviewAuthor: 'asdfsadf',
        reviewDate: new Date(2023, 10, 17)
      },
      ],

      '3': [{
        id: '1',
        review: 'A movie that will take you to another world full of emotions.',
        reviewRatingScore: 3,
        reviewAuthor: 'Corey',
        reviewDate: new Date(2023, 9, 27)
      },
      ],

      '4': [],

      '5': [],

      '6': [{
        id: '1',
        review: 'Unfortunately we don\'t have a reliable way to tell the true ratings of a movie.',
        reviewRatingScore: 1,
        reviewAuthor: 'Emely',
        reviewDate: new Date(2023, 9, 26)
      },
      {
        id: '2',
        review: 'It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.',
        reviewRatingScore: 1,
        reviewAuthor: 'Max',
        reviewDate: new Date(2023, 9, 23)
      },
      ],

      '7': [{
        id: '1',
        review: 'soskc asdflkjsda;fljkas;dkfj;sldkjf;sjkdf;lsjkdf;lkjs;dfj;',
        reviewRatingScore: 7,
        reviewAuthor: 'asdfsadf',
        reviewDate: new Date(2023, 10, 17)
      },
      {
        id: '2',
        review: 'soskc asdflkjsda;fljkas;dkfj;sldkjf;sjkdf;lsjkdf;lkjs;dfj;',
        reviewRatingScore: 7,
        reviewAuthor: 'asdfsadf',
        reviewDate: new Date(2023, 10, 17)
      }
      ],

      '8': [{
        id: '1',
        review: 'It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.',
        reviewRatingScore: 1,
        reviewAuthor: 'Corey',
        reviewDate: new Date(2023, 9, 25)
      },
      {
        id: '2',
        review: 'I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.',
        reviewRatingScore: 7,
        reviewAuthor: 'Isaac',
        reviewDate: new Date(2023, 9, 24)
      },
      {
        id: '3',
        review: 'I personally found this movie to be boring. Definitely one of the most boring movies I\'ve ever seen.',
        reviewRatingScore: 8,
        reviewAuthor: 'Corey',
        reviewDate: new Date(2023, 9, 23)
      },
      {
        id: '4',
        review: 'tomba youmba lock this are most fera gdangl post this likdsf',
        reviewRatingScore: 10,
        reviewAuthor: 'asd',
        reviewDate: new Date(2023, 10, 17)
      },
      ],
    } as const;
