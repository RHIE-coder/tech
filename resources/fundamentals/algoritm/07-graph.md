# Graph

`G = (V, E)`

 - Vertex정점 Set(Node)
 - Edge Set(링크 / 노드간의 연결 선)
 - degree 분지수(노드에 연결되어 있는 Edge 갯수, 개별마다 다름)
 - `edge = (4,5)` 노드 4와 5는 인접하다
 - Path(경로): 3->2->1->5
 - Cycle: 3->2->5->4->3
 - Direct Edge, Undirect Edge


## - 표현 방법

 - 인접 행렬(adjacency matrix)
 - 인접 리스트(adjacency list), Linked List

# 다익스트라(Dijkstra)

하나의 정점에서 출발했을 때 다른 모든 정점으로의 최단 경로를 구하는 알고리즘이다.

# 플로이드-워셜 알고리즘(Floyd-Warshall Algorithm)

모든 정점에서 다른 모든 정점으로의 최단 경로를 구하는 알고리즘이다.