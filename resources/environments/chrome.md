# 개발 도중 브라우저 캐시로 URL이 최신화되지 않는다면?

```js
fetch('/cached-route').then(()=>window.location.reload(true));
```