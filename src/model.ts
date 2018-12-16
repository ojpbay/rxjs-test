export interface Media {
  name: string;
  releaseDate: Date;
  director: Person;
  stars: Array<Person>;
  mediaType: MediaType;
}

export interface Person {
  name: string;
  dateOfBirth?: Date;
  gender: Gender;
}

export enum MediaType {
  Movie = 'Movie',
  Tv = 'TV show'
}

export enum Gender {
  Male,
  Female
}
