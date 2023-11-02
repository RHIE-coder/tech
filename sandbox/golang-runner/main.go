/* this file is not instruct how to use, while only for running */
package main

import "fmt"

func QuickSort(source []int) {
	start := 0
	end := len(source) - 1

	if start < end {
		pivot := Partition(source, start, end)
		QuickSort(source[start:pivot])
		if pivot < end {
			QuickSort(source[pivot+1 : end])
		}
	}

}

func Partition(source []int, start int, end int) int {
	pivot := start
	low := start + 1
	high := end

	for {

		for low <= end && source[low] < source[pivot] {
			low++
		}

		for high >= start && source[high] > source[pivot] {
			high--
		}

		if low < high {
			source[low], source[high] = source[high], source[low]
			low++
			high--
			continue
		}

		source[pivot], source[high] = source[high], source[pivot]
		break
	}

	return high
}

func main() {
	// source := []int{5, 4, 9, 7, 6, 2, 7, 4, 9, 2, 2, 7}
	source := []int{3, 9, 4, 7, 5, 0, 1, 6, 8, 2}
	// source := []int{4, 3, 1}
	// source := []int{5, 1, 3, 1, 1, 2, 1, 1}

	fmt.Println(source)
	QuickSort(source) // "source" call by reference
	fmt.Println(source)

}
