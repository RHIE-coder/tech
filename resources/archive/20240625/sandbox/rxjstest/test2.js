import {
    Observable,
    from,
    asyncScheduler,
    mergeMap,
    concatAll,
    of,
} from 'rxjs';

import Axios from 'axios'

// const observable = new Observable((subscriber)=>{
//     const result = Axios({
//         method: 'get',
//         url: 'https://dummyjson.com/products/1',
//     })

//     result.then(res=>{
//         subscriber.next(res.data);
//         subscriber.complete();
//     })
// })
/////////////////////////////////////////////////////////////
// async function* request10times(numFrom) {
//     let start = numFrom;
//     for(let i = start; i < start + 10; ++i) {
//         const result = await Axios({
//             method: 'get',
//             url: `https://dummyjson.com/products/${i}`,
//         })
    
//         yield result.data;
//     }
// }

// const iterator = request10times(1);
// const result = from(iterator)

// result.subscribe(console.log)
/////////////////////////////////////////////////////////////

const urls = []
let result;

for(let i = 1; i <= 50; ++i) {
    urls.push(`https://jsonplaceholder.typicode.com/posts/${i}`);
}

// Axios를 사용하여 HTTP GET 요청을 보내는 함수
function fetchUrl(url) {
    return Axios.get(url);
}

// Observable을 생성하여 요청을 관리하고, 각 요청을 Axios를 사용하여 보냄
from(urls).pipe(
    mergeMap((url)=>fetchUrl(url)),
).pipe(
    concatAll(),
).subscribe(console.log)
// .subscribe(res => console.log(res.data))