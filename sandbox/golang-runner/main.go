/* this file is not instruct how to use, while only for running */
package main

import "fmt"

type Box struct {
	Name string
	Desc string
}

func main() {
	a := new(int)
	fmt.Println(a)

	b := make(map[string]Box)
	fmt.Println(&b)
}
