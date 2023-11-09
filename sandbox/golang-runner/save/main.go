/* this file is not instruct how to use, while only for running */
package save

import (
	"fmt"
	"io"
	"net/http"
	"sync"
)

func SAVE_REQUEST_CODE() {
	req, _ := http.NewRequest("GET", "http://localhost:3000", nil)
	req.Header.Set("Content-Type", "application/json")
	client := &http.Client{}
	fmt.Println("request!!")
	resp, err := client.Do(req)
	fmt.Println("response!!")
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	// var data map[string]interface{}
	// if err := json.NewDecoder(resp.Body).Decode(&data); err != nil {
	// 	panic(err)
	// }
	// json.MarshalIndent(data, "", "  ")
	// fmt.Println(data)
	respBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	respString := string(respBytes)

	fmt.Println(respString)
}

func SAVE_CODE_2() {
	var wg sync.WaitGroup
	req, _ := http.NewRequest("GET", "http://localhost:3000", nil)
	req.Header.Set("Content-Type", "application/json")
	client := &http.Client{}

	for i := 1; i <= 20; i++ {
		wg.Add(1) // Increment the WaitGroup counter for each goroutine.
		go func(i int) {
			defer wg.Done() // Decrement the WaitGroup counter when the goroutine completes.
			fmt.Printf("request!! %d\n", i)
			resp, err := client.Do(req)
			// fmt.Printf("response!! %d\n", i)
			if err != nil {
				panic(err)
			}
			defer resp.Body.Close()
			respBytes, err := io.ReadAll(resp.Body)
			if err != nil {
				panic(err)
			}

			respString := string(respBytes)

			fmt.Println(respString)
		}(i)
	}
	// Wait for all goroutines to complete.
	wg.Wait()

	// All goroutines have finished.
	fmt.Println("All requests are complete.")
}
