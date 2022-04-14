import { timer, interval, from } from "rxjs";
import { map } from 'rxjs/operators';


const source$ = from([1,2,3,4]);

source$
.pipe(map(val => val * 2))
.subscribe(val => {
  console.log(val);
});