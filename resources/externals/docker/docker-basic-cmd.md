# 기본 명령어

```sh
docker system info # docker 실행 환경 확인
docker system df # docker 디스크 이용 상황
docker system prun # 불필요한 이미지/컨테이너 삭제
docker login
docker logout
docker search <name>

docker image pull <image_name>
docker image push <image_name>
dcoker image ls <repo_name>
docker image tag
docker image rm <image_name>
docker image prune # 사용하지 않는 이미지 삭제
docker image import # tar --> container
docker image save # image --> tar
docker image load # tar --> image

docker container run
docker container start
docker container stop
docker container rm
docker container stats
docker container pause
docker container unpause
docker container attach # 나올 때 ctrl+P ctrp+Q
docker container exec # 가동 중인 컨테이너에서 프로세스 실행
docker container top # 가동 컨테이너의 프로세스 확인
docker container port # 가동 컨테이너의 포트 전송 확인
docker container rename
docker container cp
docker container commit # container --> image
docker container export # container --> tar
docker 

docker network ls
ddcker network create
docker network connect <network> <container>
docker network disconnect
docker network inspect
docker network rm
docker network prune
```