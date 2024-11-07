package com.jeong.tripcok.grobal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping
    public String main() {
        return "main";
    }

    @GetMapping("/login")
    public String login(){ return "login";}

    @GetMapping("/register/agreement")
    public String agreement() {
        return "agreement";
    }
}
