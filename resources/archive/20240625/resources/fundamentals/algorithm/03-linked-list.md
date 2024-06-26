# 연결 리스트

 - Head - [Data-Link] - [Data-Link] - [Data-None]

```golang

```

# 이중 연결 리스트

 - [prev-data-next]
 - Head - [None-Data-Next]-[Prev-Data-Next]-[Prev-Data-None]

```golang

```

# Golang `container/list`

Doubly Linked List

 - https://pkg.go.dev/container/list@go1.21.3#List

```golang

import (
	"container/list"
	"fmt"
)

func PrintList(l *list.List) {
	fmt.Print("[ ")
	for e := l.Front(); e != nil; e = e.Next() {
		fmt.Print(e.Value)

		if e.Next() != nil {
			fmt.Print(" -> ")
		}
	}
	fmt.Println(" ]")
}

func main() {
	l := list.New()
	l.PushBack(10)
	pointA := l.PushBack(20)
	l.PushBack(30)
	pointB := l.PushBack(40)
	l.PushBack(50)

	PrintList(l) // [ 10 -> 20 -> 30 -> 40 -> 50 ]

	l.MoveBefore(pointA, pointB)

	PrintList(l) // [ 10 -> 30 -> 20 -> 40 -> 50 ]
}
```