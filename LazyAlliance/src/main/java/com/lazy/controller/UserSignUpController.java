package com.lazy.controller;

import com.lazy.pojo.Users;
import com.lazy.service.UserInformationService;
import com.lazy.service.UserSignUpService;
import com.lazy.service.UserSignUpServiceImpl;
import org.apache.ibatis.annotations.ResultMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserSignUpController {

    @Autowired
    @Qualifier("UserSignUpServiceImpl")
    private UserSignUpService userSignUpService;

    @RequestMapping("/signup")
    public @ResponseBody void signUp(@RequestParam(value = "userId",required = true)String userId,
                                     @RequestParam(value = "password",required = true)String password,
                                     @RequestParam(value = "userName",required = true)String userName,
                                     @RequestParam(value = "phone",required = true)String phone){
        int Id =Integer.parseInt(userId);
        userSignUpService.signUp(Id,userName,password,phone);
    }

}




