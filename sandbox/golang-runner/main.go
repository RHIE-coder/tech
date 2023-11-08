/* this file is not instruct how to use, while only for running */
package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func main() {
	reqToServer := func() {
		req, err := http.NewRequest("", "http://localhost:8000", body)
		if err != nil {
			panic(err)
		}
		req.Header.Set("Content-Type", "application/json")
		client := &http.Client{}
		fmt.Println("request!!")
		resp, err := client.Do(req)
		fmt.Println("response!!")
		if err != nil {
			panic(err)
		}
		defer resp.Body.Close()
		var data map[string]interface{}
		if err := json.NewDecoder(resp.Body).Decode(&data); err != nil {
			panic(err)
		}
		json.MarshalIndent(data, "", "  ")
		fmt.Println(data)
	}
	// GET 호출
	resp, err := http.Get("http://localhost:3000")
	if err != nil {
		panic(err)
	}

	defer resp.Body.Close()

	// 결과 출력
	data, err := io.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s\n", string(data))
}
