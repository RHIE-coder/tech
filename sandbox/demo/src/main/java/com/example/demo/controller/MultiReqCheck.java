package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class MultiReqCheck {
    @GetMapping("/multicheck")
    public String getMethodName(@RequestParam Integer seq) throws InterruptedException {

        double rand = Math.random();
        int timeout = ((int)(rand * 10000));
        System.out.printf("[start] seq: %s, timeout: %d\n", seq.toString(), timeout);
        Thread.sleep(timeout);
        System.out.printf("[done] seq: %s, timeout: %d\n", seq.toString(), timeout);

        return "response req: " + seq;
    }
    
}
