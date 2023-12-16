package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class Echo {
    @GetMapping("/echo")
    public Map<String,Integer> echo() {
        Map<String,Integer> map = new HashMap<String,Integer>();
        map.put("hello world", 123); 

        return map;
    }
    
}
