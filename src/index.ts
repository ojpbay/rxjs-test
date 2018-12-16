import { Observable, of, combineLatest, from } from 'rxjs';
import { fromEvent } from 'rxjs';
import { delay, mergeMap, map } from 'rxjs/operators';
import { allMovies, allTvShows } from './movies';
import { Media } from './model';

const a = [1, 2, 3, 4, 5, 6];
const b = ['a', 'b', 'c', 'd', 'e', 'f'];

let streamA = of(a);
let streamB = of(b);

const combined$ = combineLatest(streamA, streamB);
combined$.subscribe(val => logItem(val));

const movies$ = from(allMovies);
const tvShows$ = from(allTvShows);

movies$.subscribe(movie => {
  logMedia(movie);
});

tvShows$.subscribe(tv => {
  logMedia(tv);
});

function logMedia(media: Media) {
  const movieInfo = `${media.name}. Type: ${media.mediaType}. Direcor: ${
    media.director.name
  }`;
  logItem(movieInfo);
}

function logItem(val: any) {
  var node = document.createElement('li');
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('list').prepend(node);
}
