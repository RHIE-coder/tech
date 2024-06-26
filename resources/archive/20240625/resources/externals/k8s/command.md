# install
 - docker
 - kubectl
 - minikube (kubeadm, kops, KRIB, kubespray)

https://cloud.google.com/kubernetes-engine/docs/tutorials/guestbook?hl=ko

## minikube 확인

```cmd
kubectl version
minikube start
kubectl get po -A

kubectl create deployment hello-minikube --image=kicbase/echo-server:1.0
kubectl expose deployment hello-minikube --type=NodePort --port=8080
kubectl get services hello-minikube
minikube service hello-minikube

 # optional
minikube pause
minikube unpause
minikube stop
minikube delete
```

## kubectl 확인 (unstable)

```
kubectl get pod -o wide
kubectl run nginx-mh-pod --image=nginx
kubectl get services nginx-mh-pod
kubectl expose pod nginx-mh-pod --type=NodePort --port=80

kubectl create deployment dpy-nginx-mh --image=nginx
kubectl get services dpy-nginx-mh
kubectl expose deployment dpy-nginx-mh --type=NodePort --port=80

minikube service nginx-mh-pod
minikube service dpy-nginx-mh

kubectl delete pod nginx-mh-pod
kubectl delete deployment dpy-nginx-mh
kubectl delete service dpy-nginx-mh
kubectl delete service nginx-mh-pod
```

---
 - apiserver
 - cm
 - scheduler
---

## Pod Yaml

```yaml
apiVersion: v1 # v1, apps/v1(Deployment and Replicaset), batch/v1(Job object)
kind: Pod # 기본 Object: Namespace, Serivce, Pod, Volume / + Deployment, DaemonSet, ConfigMap, ReplicaSet, PV, PVC, StatefulSet
metadata:
    name: nginx # namespace안에서 무조건 유니크해야함
    labels:
        app.kubernetes.io/name: proxy # grouping - filtered by Selector
spec:
    containers:
        - name: nginx
            image: nginx:1.14.2
            ports:
            - containerPort: 80
            name: http-web-svc
```
```
kubectl apply -f 1-pod.yaml
kubectl get services
minikube service nginx-service
kubectl delete -f 1-pod.yaml
```

## ReplicaSet Yaml

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
    name: frontend
    labels:
        app: guestbook
        tier: frontend
spec:
    replicas: 3
    selector:
        matchLabels:
            tier: frontend
    template:
        metadata:
            labels:
                tier: frontend
        spec:
            containers:
                - name: php-redis
                  image: gcr.io/google_sample/gb-frontend:v3
```
```
kubectl get pods -l app=guestbook -l tier=frontend
```
```
kubectl replace -f replicaset.yml
kubectl scale --replica=3 -f replicaset.yml
kubectl scale --replica=3 rs/frontend
```

## Deployment Yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
    name: nginx-deployment
    annotations:
        author: "rhie"
        contact: "rhiemh@example.com"
    labels:
        app: nginx
spec:
    strategy:
        type: "RollingUpdate" # or "Recreate"
    replicas: 2
    selector:
        matchLabels:
            app: nginx
        template:
            metadata:
                labels:
                    app: nginx
            spec:
                containers:
                - name: nginx
                  image: nginx:1.22.1
                  ports:
                  - containerPort: 80
```
```
kubectl get rs
kubectl describe nginx-deployment
kubectl rollout status deployment nginx-deployment
kubectl rollout history deployment/nginx-deployment
kubectl rollout undo deployment nginx-deployment
```

# kube-proxy, CNI

# replicaSet 이점
# HPA 파드 수 조절
# Load Balancing
# ingress egress
# 배포 방식
# Helm
# istio

# 조합 ( Prometheus, Loki, Promtail, Grafana )

# 서킷 브레이커?