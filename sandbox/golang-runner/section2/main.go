package main

import (
	"container/list"
	"fmt"
)

type requestPolicy struct {
	limitCount  int
	secondScope int
}

func NewRequestPolicy(limitCount int, secondScope int) (*requestPolicy, error) {
	if secondScope <= 0 {
		return nil, fmt.Errorf("invalid second range, must be positive")
	}

	if limitCount <= 0 {
		return nil, fmt.Errorf("invalid limit count value, must be positive")
	}

	return &requestPolicy{
		limitCount:  limitCount,
		secondScope: secondScope,
	}, nil
}

func (policy *requestPolicy) GetSecondScope() int {
	return policy.secondScope
}

func (policy *requestPolicy) isInBoundary(cur *list.Element, onSecond int) bool {
	iCur, _ := cur.Value.(int)
	fmt.Printf("[[isInBoundary()]]iCur(%d), %d <= iCur <= %d ?? ", iCur, onSecond-policy.secondScope+1, onSecond) // TEST
	fmt.Println((onSecond-policy.secondScope+1 <= iCur && iCur <= onSecond))

	return (onSecond-policy.secondScope+1 <= iCur && iCur <= onSecond)
}

func (policy *requestPolicy) Parse(queue *list.List, onSecond int) bool {
	fmt.Printf("policy.limitCount {%d} >= queue.Len() {%d}\n", policy.limitCount, queue.Len()) // TEST
	if policy.limitCount >= queue.Len() {
		fmt.Println("Parse result is = True") // TEST
		return true
	}

	count := 0

	fmt.Println(" <<< Start Check Boundary Iteration >>> ") // TEST
	for cur := queue.Back(); policy.isInBoundary(cur, onSecond); cur = cur.Prev() {
		count++

		fmt.Printf("if count{%d} > policy.limitCount{%d}... then False\n", count, policy.limitCount) // TEST
		if count > policy.limitCount {
			fmt.Println("Parse result is = False")               // TEST
			fmt.Println(" >>> End Check Boundary Iteration <<<") // TEST
			return false
		}
	}
	fmt.Println(" >>> End Check Boundary Iteration <<<") // TEST

	fmt.Println("Parse result is = True") // TEST
	return true
}

type gateway struct {
	policy         []requestPolicy
	statusMessages map[int]string

	// key: domain name, value: queue of seconds
	secondLogs map[string]*list.List // doubly linked list,
}

func NewGateway() *gateway {
	return &gateway{
		policy:         []requestPolicy{},
		statusMessages: make(map[int]string),
		secondLogs:     make(map[string]*list.List),
	}
}

func (gw *gateway) AddPolicy(policy *requestPolicy) {
	gw.policy = append(gw.policy, *policy)
}

func (gw *gateway) AddStatus(code int, msg string) {
	gw.statusMessages[code] = msg
}

func (gw *gateway) ValidateIncomingRequest(domainName string, currentSecond int) string {

	fmt.Printf("ValidateIncomingRequest(%s, %d)\n", domainName, currentSecond) // TEST

	msgFormat := "{status: %d, message: %s}"
	var msg string

	if gw.secondLogs[domainName] == nil {
		gw.secondLogs[domainName] = list.New()
	}

	queue := gw.secondLogs[domainName]

	fmt.Print("Queue Before : ") // TEST
	printQueue(queue)            // TEST

	queue.PushBack(currentSecond)

	fmt.Print("Queue After  : ") // TEST
	printQueue(queue)            // TEST

	for i := 0; i < len(gw.policy); i++ {
		fmt.Printf("From Policy(limit:%d, range:%d)\n", gw.policy[i].limitCount, gw.policy[i].secondScope) // TEST
		if !gw.policy[i].Parse(queue, currentSecond) {
			code := 429
			msg = fmt.Sprintf(msgFormat, code, gw.statusMessages[code])
			break
		}
	}

	if msg == "" {
		code := 200
		msg = fmt.Sprintf(msgFormat, code, gw.statusMessages[code])
	}

	scopeList := []int{}

	for i := 0; i < len(gw.policy); i++ {
		scopeList = append(scopeList, gw.policy[i].GetSecondScope())
	}

	for i := 0; i < len(scopeList)-1; i++ {
		for j := i + 1; j < len(scopeList); j++ {
			if scopeList[i] < scopeList[j] {
				scopeList[i], scopeList[j] = scopeList[j], scopeList[i]
			}
		}
	}

	maxLimit := scopeList[0]

	fmt.Println("     --> start re-organize") // TEST
	fmt.Println("     max limit: ", maxLimit) // TEST
	fmt.Print("     queue target: ")
	printQueue(queue) // TEST

	removeList := []*list.Element{}
	for timeLogElem := queue.Front(); timeLogElem != nil; timeLogElem = timeLogElem.Next() {
		fmt.Println("     iteration...") // TEST
		time, _ := timeLogElem.Value.(int)
		fmt.Println("     time: ", time)                                                                                                      // TEST
		fmt.Printf("     time {%d} >= {%d}__(currentSecond{%d} - maxLimit{%d} + 1)", time, currentSecond-maxLimit+1, currentSecond, maxLimit) // TEST
		fmt.Print("     ")                                                                                                                    // TEST
		fmt.Println(time >= currentSecond-maxLimit+1)                                                                                         // TEST
		if time >= currentSecond-maxLimit+1 {
			fmt.Println("     break") // TEST
			break
		}

		removeList = append(removeList, timeLogElem)

	}
	fmt.Printf("     Before Remove Queue") // TEST
	printQueue(queue)                      // TEST
	fmt.Println("     removeList: ", removeList)
	for i := 0; i < len(removeList); i++ {
		fmt.Printf("     REMOVE = ")
		fmt.Println(removeList[i].Value)
		queue.Remove(removeList[i])
	}
	fmt.Printf("     After Remove Queue") // TEST
	printQueue(queue)                     // TEST

	fmt.Println("     --> end re-organize") // TEST

	return msg
}

// TEST
func printQueue(li *list.List) {
	fmt.Print("[ ")
	for elem := li.Front(); elem != nil; elem = elem.Next() {
		fmt.Print(elem.Value)

		if elem.Next() == nil {
			break
		}

		fmt.Print(" -> ")
	}
	fmt.Println(" ]")
}

// TEST
func (gw *gateway) pringAll() {
	fmt.Println("-------------------")
	for name, li := range gw.secondLogs {
		fmt.Printf("%s : ", name)
		printQueue(li)
	}
	fmt.Println("-------------------")
}

func getRequestStatus(requests []string) []string {
	policyLimit2In5, err := NewRequestPolicy(2, 5)
	if err != nil {
		panic(err)
	}

	policyLimit5In30, err := NewRequestPolicy(5, 30)
	if err != nil {
		panic(err)
	}

	gw := NewGateway()
	gw.AddPolicy(policyLimit2In5)
	gw.AddPolicy(policyLimit5In30)

	gw.AddStatus(200, "OK")
	gw.AddStatus(429, "Too many requests")

	responseStatus := []string{}

	fromSecond := 0
	toSecond := len(requests) - 1

	for currentSecond := fromSecond; currentSecond <= toSecond; currentSecond++ {
		fmt.Println("when current second is : ", currentSecond) // TEST
		req := requests[currentSecond]
		responseStatus = append(responseStatus, gw.ValidateIncomingRequest(req, currentSecond))
		gw.pringAll() // TEST
	}

	return responseStatus
}

func main() {
	input := []string{
		"www.aebebca.com",
		"www.cccbeae.com",
		"www.acaaaed.com",
		"www.acaaaed.com",
		"www.cccdacb.com",
		"www.aebebca.com",
		"www.cccbeae.com",
		"www.acaaaed.com",
		"www.acaaaed.com",
		"www.cccbeae.com",
		"www.cccdacb.com",
		"www.cccdacb.com",
		"www.aebebca.com",
		"www.aebebca.com",
		"www.aebebca.com",
		"www.acaaaed.com",
		"www.aebebca.com",
		"www.cccbeae.com",
		"www.cccdacb.com",
		"www.aebebca.com",
		"www.acaaaed.com",
		"www.cccbeae.com",
		"www.cccbeae.com",
		"www.aebebca.com",
		"www.cccdacb.com",
		"www.acaaaed.com",
		"www.cccbeae.com",
		"www.acaaaed.com",
		"www.eeebebb.com",
		"www.cccdacb.com",
		"www.aebebca.com",
		"www.eeebebb.com",
		"www.aebebca.com",
		"www.aebebca.com",
		"www.cccdacb.com",
		"www.acaaaed.com",
		"www.cccbeae.com",
		"www.cccbeae.com",
		"www.cccbeae.com",
		"www.eeebebb.com",
		"www.aebebca.com",
		"www.aebebca.com",
		"www.acaaaed.com",
		"www.eeebebb.com",
		"www.cccdacb.com",
		"www.cccdacb.com",
		"www.acaaaed.com",
		"www.eeebebb.com",
		"www.cccbeae.com",
		"www.aebebca.com",
		"www.eeebebb.com",
		"www.acaaaed.com",
		"www.acaaaed.com",
		"www.cccbeae.com",
		"www.acaaaed.com",
		"www.cccdacb.com",
		"www.cccbeae.com",
	}

	output := getRequestStatus(input)

	for i := 0; i < len(output); i++ {
		fmt.Printf("[ time:\t%d ]\t", i)
		policy2In5 := 0
		policy5In30 := 0
		for j := i; j >= 0 && j > i-5; j-- {
			if input[i] == input[j] {
				policy2In5++
			}
		}
		for j := i; j >= 0 && j > i-30; j-- {
			if input[i] == input[j] {
				policy5In30++
			}
		}
		fmt.Printf("{  %s  }", input[i])
		fmt.Print(", ")
		fmt.Printf("policy2-5 (%d / 2)", policy2In5)
		fmt.Print(", ")
		fmt.Printf("policy5-30 (%d / 5)", policy5In30)
		fmt.Print("\t-->\t")
		fmt.Printf("%s\n", output[i])
	}
}
