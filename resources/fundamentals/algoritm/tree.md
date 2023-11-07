# Tree

리스트나 연결리스트로 표현
 - 연결리스트 추천

## - 구성요소

 - 노드(node)
 - 간선(edge) : 부모 노드와 자식 노드를 연결하는 선

## - node

 - 루트노드(Root)
 - 형제노드(Sibling)
 - 조상노드(Ancestor)
 - 서브트리(SubTree): 부모 노드와 연결된 간선을 끊었을 때 생성되는 트리
 - 자손노드(Descendent)

## - 차수(degree)
 - 노드에 연결된 자식 노드의 수
 - 차수가 없는 노드를 단말 노드라고 함(leaf node)

## - 높이(or 레벨)
 - 트리의 높이(트리에 있는 높이 중에서 가장 큰 값)

# Binary Tree

모든 노드들이 2개의 서브트리를 갖음

## - 포화 이진 트리(Full Binary Tree)

모든 레벨의 노드가 포화 상태로 있는 이진트리
 - 모든 노드들은 left child/right child 모두 갖음

## - 완전 이진 트리(Complete Binary Tree)


## - 편향 이진 트리(Skewed Binary Tree)

 - 오른쪽, 왼쪽 편향 이진 트리

## - 순회 방법(traversal)
 - V(root), L(Left SubTree), R(Right SubTree)
 - 전위 순회(Preorder traversal): VLR
 - 중위 순회(Inorder traversal): LVR
 - 후위 순회(Postorder traversal): LRV

# 이진 탐색 트리(Binary Search Tree)

# Heap

Heap 메모리와는 다른 말임

완전 이진 트리에 있는 노드 중에서 키 값이 가장 큰 노드나 키값이 가장 작은 노드를 찾기 위해서 만든 자료구조

우선순위 큐 구현 가능