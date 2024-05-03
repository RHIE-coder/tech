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