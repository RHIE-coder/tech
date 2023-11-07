# Brute-force

```golang
package main

import "fmt"

// apple(4) / banana(3)
const src1 = "appleapaapplebananapple appbananapple bannbannanabanana"

// AB(9)
const src2 = "ABAABABBABAABAABABAABAAB"

func BruteForce(origin string, pattern string) {

	count := 0
	isMatch := false

	for i := 0; i < len(origin)-len(pattern)+1; i++ {
		for j := 0; j < len(pattern); j++ {
			if origin[j+i] != pattern[j] {
				break
			}

			if j == len(pattern)-1 {
				isMatch = true
			}
		}

		if isMatch {
			count++
			isMatch = false
		}
	}

	fmt.Println(count)
}

func main() {

	const pattern1_1 = "apple"
	const pattern1_2 = "banana"
	const pattern2 = "AB"

	BruteForce(src1, pattern1_1)
	BruteForce(src1, pattern1_2)
	BruteForce(src2, pattern2)
}
```

# KMP(Kruth-Morris-Pratt)

```golang
```

# Boyer-Moore

```golang
```

# Rabin Karp

해싱을 사용해서 문자열에서 특정 패턴과 일치하는지 찾아주는 알고리즘

```golang
```