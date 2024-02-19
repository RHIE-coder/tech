 - docker-compose.yml

```sh
docker-compose || docker compose
  up
  ps
  logs
  run
  start
  stop
  restart
  pause
  unpause
  port
  config
  kill
  rm
  down # 여러 리소스 일괄 삭제
```

#### signal 종류

```sh
docker compose kill -s SIGINT
```

```
SIGHUP  프로그램 재시작
SIGINT  ctrl+c 키보드로 인터럽트
SIGQUIT 키보드에 의한 중지
SIGTERM 프로세스 정상 종료
SIGKILL 프로세스 강제 종료
SIGSTOP 프로세스 일시 정지
```

