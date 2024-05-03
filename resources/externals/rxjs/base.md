# `Observable`

 - basic usage

```js
import {
    Observable,
} from 'rxjs';

const observable = new Observable((subscriber)=>{
    subscriber.next(11);
    subscriber.next(22);
    subscriber.next(33);

    setTimeout(()=>{
        subscriber.next(44);
        subscriber.complete();
    }, 1000)
});

console.log('just before subscribe');
console.log(' --- first --- ')
observable.subscribe({
    next(x) {
        console.log('got value: ' + x);
    },
    error(err) {
        console.error('something wrong occurred: ' + err);
    },
    complete() {
        console.log('done');
    }
})

console.log(' --- second --- ')
observable.subscribe({
    next(x) {
        console.log('got value: ' + x);
    },
    error(err) {
        console.error('something wrong occurred: ' + err);
    },
    complete() {
        console.log('done');
    }
})

console.log('just after subscribe');

/*
just before subscribe
 --- first --- 
got value: 11
got value: 22
got value: 33
 --- second --- 
got value: 11
got value: 22
got value: 33
just after subscribe
got value: 44
done
got value: 44
done
*/
```

 - unsubscribing

```js
import {
    Observable,
} from 'rxjs';

const observable = new Observable((subscriber)=>{
    subscriber.next(11);
    subscriber.next(22);
    subscriber.next(33);

    setTimeout(()=>{
        subscriber.next(44);
    }, 1000)

    const intervalId = setInterval(()=>{
        subscriber.next('hi ~');
    }, 1000);

    return function unsubscibe() {
        clearInterval(intervalId);
    }
});

console.log('just before subscribe');
const subscription = observable.subscribe(console.log);

setTimeout(()=>{
    console.log('invoke unsubscibe');
    subscription.unsubscribe();
}, 3500)

console.log('just after subscribe');

/*  
just before subscribe
11
22
33
just after subscribe
44
hi ~
hi ~
hi ~
invoke unsubscibe
*/
```

 - unsubscibe pattern without using `rxjs`

```js
function subscribe(subscriber) {
    subscriber.next(11);
    subscriber.next(22);
    subscriber.next(33);

    setTimeout(()=>{
        subscriber.next(44);
    }, 1000)

    const intervalId = setInterval(()=>{
        subscriber.next('hi ~');
    }, 1000);

    return () => {
        clearInterval(intervalId);
    }
}

console.log('just before subscribe');
const unsubscribe = subscribe({
    next: (x) => { console.log(x) }
});

setTimeout(()=>{
    console.log('invoke unsubscribe');
    unsubscribe();
}, 3500)

console.log('just after subscribe');

/*
just before subscribe
11
22
33
just after subscribe
44
hi ~
hi ~
hi ~
invoke unsubscribe
*/
```

# `Observer`

```js
import {
    Observable,
} from 'rxjs';

const observer = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
}

const observable = new Observable((subscriber)=>{
    subscriber.next(10);
    subscriber.next(20);
    subscriber.next(30);
});

observable.subscribe(observer);
observable.subscribe(observer);

/*
Observer got a next value: 10
Observer got a next value: 20
Observer got a next value: 30
Observer got a next value: 10
Observer got a next value: 20
Observer got a next value: 30
*/
```

# `Subject`

```js
import {
  Subject
} from 'rxjs'

const subject = new Subject();

console.log('just before declaring subject.subscribe')

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
})

console.log('just after declaring subject.subscribe')

console.log(`next(1) before`)
subject.next(1);
console.log(`next(1) after`)

/*
just before declaring subject.subscribe
just after declaring subject.subscribe
next(1) before
observerA: 1
next(1) after
*/
```

## BehaviorSubject

개인적으로 `StateSubject`가 더 직관적인 이름이 아닌가 생각함

```js
import {
  BehaviorSubject,
} from 'rxjs'

const subject = new BehaviorSubject(0);

console.log('just before declaring subject.subscribe')

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
})

console.log('just after declaring subject.subscribe')

console.log(`next(1) before`)
subject.next(1);
console.log(`next(1) after`)
console.log(`next(2) before`)
subject.next(2);
console.log(`next(2) after`)

console.log('just before declaring subject.subscribe 2')

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
})

console.log('just after declaring subject.subscribe 2')

console.log(`next(3) before`)
subject.next(3);
console.log(`next(3) after`)
/*
just before declaring subject.subscribe
observerA: 0
just after declaring subject.subscribe
next(1) before
observerA: 1
next(1) after
next(2) before
observerA: 2
next(2) after
just before declaring subject.subscribe 2
observerB: 2
just after declaring subject.subscribe 2
next(3) before
observerA: 3
observerB: 3
next(3) after
*/
```

## ReplaySubject

```js
import {
  ReplaySubject,
} from 'rxjs'

const subject = new ReplaySubject(3);

console.log('just before declaring subject.subscribe')

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
})

console.log('just after declaring subject.subscribe')

console.log(`next(1) before`);
subject.next(1);
console.log(`next(1) after`);
console.log(`next(2) before`);
subject.next(2);
console.log(`next(2) after`);
console.log(`next(3) before`);
subject.next(3);
console.log(`next(3) after`);
console.log(`next(4) before`);
subject.next(4);
console.log(`next(4) after`);

console.log('just before declaring subject.subscribe 2')

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
})

console.log('just after declaring subject.subscribe 2')

console.log(`next(5) before`)
subject.next(5);
console.log(`next(5) after`)


/*
just before declaring subject.subscribe
observerA: 0
just after declaring subject.subscribe
next(1) before
observerA: 1
next(1) after
next(2) before
observerA: 2
next(2) after
just before declaring subject.subscribe 2
observerB: 2
just after declaring subject.subscribe 2
next(3) before
observerA: 3
observerB: 3
next(3) after
*/
```

```js
import {
  ReplaySubject,
} from 'rxjs'

const subject = new ReplaySubject(100, 500); // buffer, windowTime(buffer saving time)

console.log('| just before declaring subject.subscribe')

subject.subscribe({
  next: (v) => {
    console.log('| observerA next ~')
    console.log(`observerA: ${v}`)
    console.log('| ~ observerA next')
  }
})

console.log('| just after declaring subject.subscribe')

console.log('| just before set interval')
let i = 1;
setInterval(() => subject.next(i++), 200);
console.log('| just after set interval')

setTimeout(() => {
  console.log("--------- ~")
  subject.subscribe(v => {
    console.log('| observerB next ~')
    console.log(`observerB: ${v}`)
    console.log('| ~ observerB next')
  })
  console.log("~ ---------")
}, 1000)

/*
| just before declaring subject.subscribe
| just after declaring subject.subscribe
| just before set interval
| just after set interval
| observerA next ~
observerA: 1
| ~ observerA next
| observerA next ~
observerA: 2
| ~ observerA next
| observerA next ~
observerA: 3
| ~ observerA next
| observerA next ~
observerA: 4
| ~ observerA next
--------- ~
| observerB next ~
observerB: 3
| ~ observerB next
| observerB next ~
observerB: 4
| ~ observerB next
~ ---------
| observerA next ~
observerA: 5
| ~ observerA next
| observerB next ~
observerB: 5
| ~ observerB next
| observerA next ~
observerA: 6
| ~ observerA next
| observerB next ~
observerB: 6
| ~ observerB next
| observerA next ~
observerA: 7
| ~ observerA next
| observerB next ~
observerB: 7
| ~ observerB next
| observerA next ~
observerA: 8
| ~ observerA next
| observerB next ~
observerB: 8
| ~ observerB next

    ...
    ...
    ...

*/
```

## AsyncSubject

```js
import {
  AsyncSubject,
} from 'rxjs';

const subject = new AsyncSubject();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
})

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
})

subject.next(5);
subject.complete();

/*
observerA: 5
observerB: 5
*/
```

```js
import {
  Observable,
  asyncScheduler,
} from 'rxjs'
import { observeOn } from 'rxjs/operators'

const intervalLikeDelayMS = 1000;

function task(state) {
  console.log(`task: value = ${state}`);
  const newState = state * 2;
  this.schedule(newState, intervalLikeDelayMS);
}

const delayMS = 3000
const initVal = 2

asyncScheduler.schedule(
  task,
  delayMS,
  initVal,
)

/*
* 3초 기다린후... 
task: value = 2
* 이제 1초마다...
task: value = 4
task: value = 8
task: value = 16
task: value = 32
task: value = 64
task: value = 128
task: value = 256
task: value = 512
*/
```

# `Scheduler`

```js
import {
  Observable,
  asyncScheduler,
} from 'rxjs'
import { observeOn } from 'rxjs/operators'

const observable = new Observable((proxyObserver)=>{
  proxyObserver.next(1);
  proxyObserver.next(2);
  proxyObserver.next(3);
  proxyObserver.complete();
}).pipe(
  observeOn(asyncScheduler),
);

console.log(' | before subscribe')
observable.subscribe({
  next(x) {
    console.log('got value: ' + x) 
  },
})
console.log(' | after subscribe')

/*
 | before subscribe
 | after subscribe
got value: 1
got value: 2
got value: 3
*/
```

```js
import {
  asyncScheduler,
} from 'rxjs'

const intervalLikeDelayMS = 1000;

function task(state) {
  console.log(`task: value = ${state}`);
  const newState = state * 2;
  this.schedule(newState, intervalLikeDelayMS);
}

const delayMS = 3000
const initVal = 2

asyncScheduler.schedule(
  task,
  delayMS,
  initVal,
)

/*
* 3초 기다린후... 
task: value = 2
* 이제 1초마다...
task: value = 4
task: value = 8
task: value = 16
task: value = 32
task: value = 64
task: value = 128
task: value = 256
task: value = 512
*/
```





# `Operator`

## Creation

### - bindCallback

```js
import {
  bindCallback,
} from 'rxjs'

const someFunc = (n, s, cb) => {
  cb(n, s, {prop: 'val'})
}

const boundSomeFunc = bindCallback(someFunc)

boundSomeFunc(5, 'sthparam').subscribe(([a, b, c])=>{
  console.log(a, b, c) // 5 sthparam {prop: 'val'}
})
```

