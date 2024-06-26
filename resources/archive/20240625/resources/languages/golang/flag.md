```golang
import "flag"
```
 - built-in

# 1. FlagSet을 통한 옵션 설정 (Recommended)

```go
package main

import (
	"flag"
	"fmt"
	"log"
	"os"
	"strconv"
)

func main() {
    // main name setting
	fs := flag.NewFlagSet("program name", flag.ExitOnError)

    // set argument way 1
	var modeArg string
	fs.StringVar(&modeArg, "mode", "dev", "select the program execution mode")

    // set argument way 2
	portArg := fs.Uint("port", 8080, "port number")

    // must parse flag
	err := fs.Parse(os.Args[1:])
        
	if err != nil {
		log.Fatalf("invalid command option: %v", err)
	}

    // get value
	fmt.Println(modeArg)
	fmt.Println(*portArg)

    // access to value
    portVal := fs.Lookup("port").Value.String()
	port, err := strconv.Atoi(portVal)

	if err != nil {
		log.Fatalf("fail to parse port number: %v", err)
	}

	if port > 65535 {
		log.Fatalf("invalid port number range(0-65535)")
	}
}
```

# 2. flag 모듈을 이용한 설정

```go
package main

import (
	"flag"
	"fmt"
	"log"
	"strconv"
)

func main() {
	// set argument way 1
	var modeArg string
	flag.StringVar(&modeArg, "mode", "dev", "select the program execution mode")

	// set argument way 2
	portArg := flag.Uint("port", 8080, "port number")

	// must parse flag
	flag.Parse()

	// get value
	fmt.Println(modeArg)
	fmt.Println(*portArg)

	// access to value
	portVal := flag.Lookup("port").Value.String()
	port, err := strconv.Atoi(portVal)

	if err != nil {
		log.Fatalf("fail to parse port number: %v", err)
	}

	if port > 65535 {
		log.Fatalf("invalid port number range(0-65535)")
	}
}

```