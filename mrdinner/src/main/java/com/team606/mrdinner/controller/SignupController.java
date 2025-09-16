package com.team606.mrdinner.controller;

import com.team606.mrdinner.dto.MemberDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class SignupController {

    @GetMapping("/signup")
    public String signup() {
        return "customer/signup";
    }

//    @PostMapping("/signup")
//    public String signup(MemberDto memberDto) {
//
//    }
}
