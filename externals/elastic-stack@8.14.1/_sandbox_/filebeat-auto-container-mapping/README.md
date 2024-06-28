https://docs.docker.com/engine/api/sdk/

https://docs.docker.com/engine/api/v1.46/

## UNIX Socket 요청

```sh
curl --unix-socket /var/run/docker.sock http://localhost/info | jq

curl --unix-socket /var/run/docker.sock http://localhost/containers/json | jq
```

docker inspect --format '{{.LogPath}}' eth-pos-dev-geth-1
