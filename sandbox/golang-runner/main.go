/* this file is not instruct how to use, while only for running */
package main

// apple(4) / banana(3)
const src1 = "appleapaapplebananapple appbananapple bannbannanabanana"

// AB(9)
const src2 = "ABAABABBABAABAABABAABAAB"

func KMP(origin string, pattern string) {

}

func main() {

	const pattern1_1 = "apple"
	const pattern1_2 = "banana"
	const pattern2 = "AB"

	KMP(src1, pattern1_1)
	KMP(src1, pattern1_2)
	KMP(src2, pattern2)
}
