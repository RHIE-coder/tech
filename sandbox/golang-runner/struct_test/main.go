package main

import (
	"fmt"
)

type AAA struct {
	A string
	B string
}

type BBB struct {
	*AAA
}

type CCC struct {
	AAA
}

func main() {
	aa := AAA{"a", "b"}

	bb := aa

	cc := CCC{aa}

	fmt.Printf("%p\n", &aa)   //0x140000ba000
	fmt.Printf("%p\n", &bb)   //0x140000ba020
	fmt.Printf("%p\n", &aa.A) //0x140000ba000
	fmt.Printf("%p\n", &bb.A) //0x140000ba020
	fmt.Printf("%p\n", &aa.B) //0x140000ba010
	fmt.Printf("%p\n", &bb.B) //0x140000ba030
	fmt.Printf("%p\n", &cc)   //0x140000ba040
}
