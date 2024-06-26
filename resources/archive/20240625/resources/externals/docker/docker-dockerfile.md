# build

```sh
docker build # Dockerfile --> image
```

# keywords

```sh
FROM
RUN # 이미지 빌드 순간 실행
CMD # 이미지로부터 컨테이너를 생성하여 최초로 실행할 때 수행, docker run 실행 시 변경 가능
LABEL # 이미지 정보
EXPOSE
ENV
ADD
COPY
ENTRYPOINT # CMD와 같음
VOLUME
USER
WORKDIR
ARG # dockerfile 안에서만 사용되는 변수
ONBUILD # 빌드 완료 후 시행
STOPSIGNAL # 시스템 콜 시그널 설정
HEALTHCHECK
SHELL
```

# 주의

Dockerfile 기반으로 docker build 명령을 내리면 Dockerfile을 포함하는 `디렉토리/**/*` 모두 docker 데몬으로 전송하기 때문에 속도를 위해 빈 디렉토리를 만드는 것이 좋다