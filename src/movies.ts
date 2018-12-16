import { Media, Gender, MediaType } from './model';

export const allMovies: Array<Media> = [
  {
    name: 'Goodfellas',
    mediaType: MediaType.Movie,
    director: {
      name: 'Martin Scorsese',
      gender: Gender.Male,
      dateOfBirth: new Date(1942, 11, 17)
    },
    releaseDate: new Date(1990, 10, 26),
    stars: [
      {
        name: 'Ray Liotta',
        gender: Gender.Male,
        dateOfBirth: new Date(1958, 12, 18)
      },
      {
        name: 'Robert De Niro',
        gender: Gender.Male,
        dateOfBirth: new Date(1943, 8, 17)
      },
      {
        name: 'Joe Pesci',
        gender: Gender.Male,
        dateOfBirth: new Date(1943, 2, 9)
      }
    ]
  },
  {
    name: 'Casino',
    mediaType: MediaType.Movie,
    director: {
      name: 'Martin Scorsese',
      gender: Gender.Male,
      dateOfBirth: new Date(1942, 11, 17)
    },
    releaseDate: new Date(1996, 2, 23),
    stars: [
      {
        name: 'Sharon Stone',
        gender: Gender.Female,
        dateOfBirth: new Date(1958, 3, 10)
      },
      {
        name: 'Robert De Niro',
        gender: Gender.Male,
        dateOfBirth: new Date(1943, 8, 17)
      },
      {
        name: 'Joe Pesci',
        gender: Gender.Male,
        dateOfBirth: new Date(1943, 2, 9)
      }
    ]
  },
  {
    name: 'Home Alone',
    mediaType: MediaType.Movie,
    director: {
      name: 'Chris Columbus',
      gender: Gender.Male,
      dateOfBirth: new Date(1958, 9, 10)
    },
    releaseDate: new Date(1990, 12, 7),
    stars: [
      {
        name: 'Macaulay Culkin',
        gender: Gender.Male,
        dateOfBirth: new Date(1980, 8, 26)
      },
      {
        name: 'Daniel Stern',
        gender: Gender.Male,
        dateOfBirth: new Date(1957, 8, 28)
      },
      {
        name: 'Joe Pesci',
        gender: Gender.Male,
        dateOfBirth: new Date(1943, 2, 9)
      }
    ]
  }
];

export const allTvShows: Array<Media> = [
  {
    name: 'Vinyl',
    mediaType: MediaType.Tv,
    director: {
      name: 'Martin Scorsese',
      gender: Gender.Male,
      dateOfBirth: new Date(1942, 11, 17)
    },
    releaseDate: new Date(2016, 2, 15),
    stars: [
      {
        name: 'Bobby Cannavale',
        gender: Gender.Male,
        dateOfBirth: new Date(1970, 5, 3)
      },
      {
        name: 'Paul Ben-Victor',
        gender: Gender.Male,
        dateOfBirth: new Date(1965, 7, 24)
      },
      {
        name: 'P.J. Byrne',
        gender: Gender.Male,
        dateOfBirth: new Date(1974, 12, 15)
      }
    ]
  },
  {
    name: 'Will & Grace',
    mediaType: MediaType.Tv,
    director: {
      name: 'David Kohan',
      gender: Gender.Male,
      dateOfBirth: new Date(1964, 4, 16)
    },
    releaseDate: new Date(2016, 2, 15),
    stars: [
      {
        name: 'Eric McCormack',
        gender: Gender.Male,
        dateOfBirth: new Date(1963, 4, 18)
      },
      {
        name: 'Debra Messing',
        gender: Gender.Female,
        dateOfBirth: new Date(1968, 8, 15)
      },
      {
        name: 'Bobby Cannavale',
        gender: Gender.Male,
        dateOfBirth: new Date(1970, 5, 3)
      }
    ]
  }
];
