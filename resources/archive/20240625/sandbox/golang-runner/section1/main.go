package main

import "fmt"

func main() {

	scopeList := []int{5, 4, 1, 9, 7, 6, 3, 2, 7, 4, 9, 2, 2, 7, 0}
	for i := 0; i < len(scopeList); i++ {
		for j := i + 1; j < len(scopeList); j++ {
			if scopeList[i] < scopeList[j] {
				scopeList[i], scopeList[j] = scopeList[j], scopeList[i]
			}
		}
	}
	fmt.Println(scopeList)
}
