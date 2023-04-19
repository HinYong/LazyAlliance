package com.lazy.controller;

import com.lazy.service.UserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/userlogin")
public class UserLoginController {
    @Autowired
    @Qualifier("UserLoginService")
    private UserLoginService userLoginService;
    //用户登录
    @RequestMapping("/login")
    public  @ResponseBody boolean userLogin(@RequestParam(value = "userId",required=true)String userId,
                                            @RequestParam(value = "password",required=true)String password){
        int Id =Integer.parseInt(userId);
        return userLoginService.userLogin(Id,password);
    }
}
