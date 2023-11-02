# Exhaustive Search (완전 탐색)
 - Brute-force or Generate-and-Test 기법
 - 모든 경우의 수 테스트

# Greedy Algorithm (탐욕 알고리즘)
 - 여러 경우 중 하나를 셜정해야 할 때마다 그 순간에 최적이라고 생각되는 것을 선택해 나가는 방식으로 진행하여 최종적인 해답에 도달함
 - 각 선택의 시점에서 이루어지는 결정은 지역적으로는 최적이지만, 그것들을 계속 수집하여 최종적인 해답을 만들었다고 하여, 그것이 최적이라는 보장은 없음
 - 일반적으로 머리속에 떠오르는 생각을 검증없이 바로 구현하면 Greedy 접근이 됨
 - 부분적으로 집합을 고르고 해를 고름
 - 다른 새로운 집합을 고르고 검증 

# Sort (정렬)
 - 대표 정렬 방식
   - Bubble Sort
     - O(n<sup>2</sup>): 코딩이 가장 쉬움
   - Counting Sort
     - O(n+k): n이 비교적 작을 때 가능
   - Selection Sort
     - O(n<sup>2</sup>): 교환의 회수가 버블, 삽입정렬보다 작음
   - Quick Sort
     - O(n log n) ~ O(n<sup>2</sup>): 최악일 수도 있지만 평균적으로는 가장 빠름
   - Insert Sort
     - O(n<sup>2</sup>): n의 개수가 작을 때 효과적
   - Merge Sort
     - O(n log n): 연결 리스트의 경우 가장 효율적인 방식

## - Bubble Sort
 - 인접한 두 개의 원소를 대소비교하여 끝에서부터 정렬 완료됨

```go
package main

import "fmt"

func main() {
	source := []int{5, 4, 1, 9, 7, 6, 3, 2, 7, 4, 9, 2, 2, 7, 0}
	j := 1
	for cnt := 0; cnt < len(source)-1; cnt++ {
		for i := 0; i < len(source)-j; i++ {
			if source[i] > source[i+1] {
				tmp := source[i]
				source[i] = source[i+1]
				source[i+1] = tmp
			}
		}
		j++
	}

	fmt.Println(source) // [0 1 2 2 2 3 4 4 5 6 7 7 7 9 9]
}
```

## - Counting Sort
 - 각 숫자의 갯수를 세고 정렬 

```golang
package main

import "fmt"

func main() {
	source := []int{5, 4, 9, 7, 6, 2, 7, 4, 9, 2, 2, 7}
	counts := make([]int, len(source))

	fmt.Println(source) // [5 4 9 7 6 2 7 4 9 2 2 7]
	for i := 0; i < len(source); i++ {
		counts[source[i]]++
	}

	fmt.Println(counts) // [0 0 3 0 2 1 1 3 0 2 0 0]

	paddingPoint := -1
	for i := len(counts) - 1; i >= 0; i-- {
		if counts[i] != 0 {
			break
		}
		paddingPoint = i
	}

	if paddingPoint != -1 {
		counts = counts[0:paddingPoint]
	}

	fmt.Println(counts) // [0 0 3 0 2 1 1 3 0 2]
	countRef := make([]int, len(counts))

	countRef[0] = counts[0]
	for i := 1; i < len(counts); i++ {
		countRef[i] = countRef[i-1] + counts[i]
	}
	fmt.Println(countRef) // [0 0 3 3 5 6 7 10 10 12]

	output := make([]int, len(source))
	for i := len(source) - 1; i >= 0; i-- {
		inputIndex := &countRef[source[i]]
		*inputIndex--
		output[*inputIndex] = source[i]
	}
	fmt.Println(countRef) // [0 0 0 3 3 5 6 7 10 10]
	fmt.Println(output)   // [2 2 2 4 4 5 6 7 7 7 9 9]
}
```

## - Selection Sort

```golang
package main

import "fmt"

func main() {
	source := []int{5, 4, 9, 7, 6, 2, 7, 4, 9, 2, 2, 7}

	for i := 0; i < len(source); i++ {
		for k := i + 1; k < len(source); k++ {
			if source[i] > source[k] {
				tmp := source[i]
				source[i] = source[k]
				source[k] = tmp
			}
		}
	}
	fmt.Println(source) // [2 2 2 4 4 5 6 7 7 7 9 9]
}
```
## - Quick Sort

```golang

```

## - Insert Sort

```golang

```

## - Merge Sort

```golang

```
