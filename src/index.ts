import { Observable, of, combineLatest, from } from 'rxjs';
import { fromEvent } from 'rxjs';
import { delay, mergeMap, map, merge, filter, pluck } from 'rxjs/operators';
import { allMovies, allTvShows } from './movies';
import { Media } from './model';

const a = [1, 2, 3, 4, 5, 6];
const b = ['a', 'b', 'c', 'd', 'e', 'f'];

let streamA = of(a);
let streamB = of(b);

const combined$ = combineLatest(streamA, streamB);
combined$.subscribe(val => displayItem(val));

const movies$ = from(allMovies);
const tvShows$ = from(allTvShows);

movies$.subscribe(movie => {
  displayMedia(movie);
});

tvShows$.subscribe(tv => {
  displayMedia(tv);
});

// when extracting a single property and not doing some sort of projection i.e. reshaping the output object, best to use pluck than map
movies$
  .pipe(
    pluck('name'),
    filter((x: string) => {
      return x.toLowerCase() !== 'goodfellas';
    })
  )
  .subscribe(m => {
    if (m) {
      console.log(m);
    }
  });

function displayMedia(media: Media) {
  const movieInfo = `${media.name}. Type: ${media.mediaType}. Direcor: ${
    media.director.name
  }`;
  displayItem(movieInfo);
}

function displayItem(val: any) {
  var node = document.createElement('li');
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('list').prepend(node);
}
