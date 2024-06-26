# Installing the Elastic Stack
 - [INDEX](https://www.elastic.co/guide/en/elastic-stack/8.14/installing-elastic-stack.html)
 - [Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/8.14/docker.html)

```sh
docker run --name elasticsearch --net elastic -d \
-p 9200:9200 -p 9300:9300 \
-e "discovery.type=single-node" \
docker.elastic.co/elasticsearch/elasticsearch:7.17.11


docker run --name kibana --net elastic -d \
-p 5601:5601 \
-e "ELASTICSEARCH_HOSTS=http://elasticsearch:9200" \
docker.elastic.co/kibana/kibana:7.17.11
```

```
name: filebeat-lodis-be

filebeat.inputs:

- type: filestream

  id: lodis-be-log-ingest

  enabled: true

  paths:
	  # 변경: 로그파일 설정 
    - /var/log/[로그파일명].log

  # 수집하는 line 
  include_lines:  [' REQ > ', ' RES > ', ' ERR > ', ' LOG > ']

  # multiline pattern 처리
  parsers:
    - multiline:
        type: pattern
        pattern: '^\[(TRACE|DEBUG|INFO|WARN|ERROR).*\] [0-9]+/[0-9]+/[0-9]+ [0-9]+:[0-9]+:[0-9]+\.[0-9]+'
        negate: true
        match: after

 # 변경
output.logstash:
    hosts: [ "100.20.2.55:1844" ]
``` 