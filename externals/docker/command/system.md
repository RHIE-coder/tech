# docker system df

 - `docker system df`

```
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          22        11        19.96GB   14.82GB (74%)
Containers      14        10        18.27MB   125.2kB (0%)
Local Volumes   36        15        1.549GB   97.77kB (0%)
Build Cache     185       0         11.42GB   11.42GB
```

 - `Images`.RECLAIMABLE: 현재 어떤 컨테이너에서도 참조하지 않는 이미지가 차지하는 디스크 공간. 삭제할 수 있는 공간.
 - `Containers`.RECLAIMABLE: 멈춰 있거나 중단된 컨테이너가 차지하는 디스크 공간. 삭제할 수 있는 공간.
 - `Local Volumes`.RECLAIMABLE: 현재 어떤 컨테이너에서도 사용하지 않는 볼륨이 차지하는 디스크 공간. 삭제할 수 있는 공간.
 - `Build Cache`: Docker 이미지 빌드 과정에서 생성된 캐시 데이터가 디스크에서 차지하는 공간. 빌드 캐시는 Docker가 이미 빌드된 레이어를 재사용하여 빌드 시간을 단축하는 데 사용.
    - .RECLAIMABLE: 현재 사용되지 않는 빌드 캐시 항목이 차지하는 디스크 공간. 삭제할 수 있는 공간.

# docker system prune

 - `docker system prune -f`