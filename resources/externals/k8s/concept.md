# Container Orchestration
 - Docker Swarm
 - MESOS
 - Nomad
 - Kubernetes

#### Cloud Services
 - EKS
 - AKS
 - GKE

#### Biz
 - Rancher
 - OpenShift

# Component
 - Node: Pod 관리
   - kublet: agent running in the each node, checking pod. 파드 담당 일진
   - kube-proxy: network proxy to carry out kube service concept. 파드 통신 담당
   - container runtime: (docker)
 - Cluster
 - Master
   - Control Plane
     - kube-apiserver
     - etcd
     - kube-scheduler
     - kube-controller-manager
     - cloud-controller-manager
 - Addons
   - DNS
   - Web UI
   - Container Resource Monitoring
   - Cluster-level Logging


## Services
 - NodePort
 - ClusterIP
 - LoadBalancer