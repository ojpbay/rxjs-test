import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';

var observable = Observable.create((observer: any) => {
  observer.next('Hello World!');
  observer.next('Hello Again!');
  observer.complete();
  observer.next('Bye');
});

observable.subscribe(
  (x: any) => logItem(x),
  (error: any) => logItem('Error: ' + error),
  () => logItem('Completed')
);

var mouseObservable$ = fromEvent(document.body, 'mousemove').subscribe(
  (e: any) => {
    logItem(`x:${e.pageX}, y:${e.pageY}`);
  }
);

function logItem(val: any) {
  var node = document.createElement('li');
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('list').prepend(node);
}
