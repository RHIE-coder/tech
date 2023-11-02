/* this file is not instruct how to use, while only for running */
package main

import (
	"fmt"
)

func MergeSort(origin []int) {
	sharedTempArr := make([]int, len(origin))
	mergeSort(origin, sharedTempArr, 0, len(origin)-1)
}

func mergeSort(origin []int, tmp []int, start int, end int) {
	if start < end { // except 1 length
		mid := start + (end-start)/2 // decrease overflow danger
		mergeSort(origin, tmp, start, mid)
		mergeSort(origin, tmp, mid+1, end)
		merge(origin, tmp, start, mid, end)
	}

}

func merge(origin []int, tmp []int, start int, mid int, end int) {
	for i := start; i <= end; i++ {
		tmp[i] = origin[i]
	}

	idxL := start
	idxR := mid + 1
	idxOrigin := start

	// one of them will be all selected
	for idxL <= mid && idxR <= end {
		if tmp[idxL] <= tmp[idxR] {
			origin[idxOrigin] = tmp[idxL]
			idxL++
		} else {
			origin[idxOrigin] = tmp[idxR]
			idxR++
		}
		idxOrigin++
	}

	for idxL <= mid {
		origin[idxOrigin] = tmp[idxL]
		idxL++
		idxOrigin++
	}

	for idxR <= end {
		origin[idxOrigin] = tmp[idxR]
		idxR++
		idxOrigin++
	}

}

func main() {
	source := []int{5, 4, 9, 7, 6, 2, 7, 4, 9, 2, 2, 7}
	// source := []int{3, 9, 4, 7, 5, 0, 1, 6, 8, 2}
	// source := []int{4, 3, 1}
	// source := []int{1, 3, 1}
	// source := []int{5, 1, 3, 1, 2, 1, 1}

	fmt.Println(source)
	MergeSort(source)
	fmt.Println(source)
}
