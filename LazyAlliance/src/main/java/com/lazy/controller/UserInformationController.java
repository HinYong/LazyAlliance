package com.lazy.controller;

import com.lazy.pojo.Users;
import com.lazy.service.UserInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
@Controller
@RequestMapping("/message")
public class UserInformationController {
    @Autowired
    @Qualifier("UserInformationService")
    private UserInformationService userInformationService;
    //返回用户对象列表
    @RequestMapping("/showallusers")
    public  @ResponseBody List<Users> showAllUsers(){
        return userInformationService.showAllUsers();
    }
    @RequestMapping("/showthisuser")
    public  @ResponseBody Users showThisUser(@RequestParam(value = "userId",required = true)String userId){
        int Id =Integer.parseInt(userId);
        return userInformationService.showThisUser(Id);
    }

    //返回当前用户余额
    @RequestMapping("/showbalance")
    public @ResponseBody double showBalance(@RequestParam(value = "userId",required=true)String userId){
        int Id =Integer.parseInt(userId);
        return userInformationService.showBalance(Id);
    }
    //修改用户信息
    @RequestMapping("/updateusermessage")
    public @ResponseBody void updateUserMessage(@RequestParam(value = "userId",required = true)String userId,
                                                @RequestParam(value = "password",required = true)String password,
                                                @RequestParam(value = "userName",required = true)String userName,
                                                @RequestParam(value = "phone",required = true)String phone){
        int Id =Integer.parseInt(userId);
        userInformationService.updateUserMessage(Id,password,userName,phone);
    }
    //增加余额
    @RequestMapping("/addbalance")
    public @ResponseBody void addBalance(@RequestParam(value = "userId",required = true)String userId,
                                         @RequestParam(value = "addition",required = true)String addition){
        int Id = Integer.parseInt(userId);
        double Addition = Double.parseDouble(addition);
        userInformationService.addBalance(Id,Addition);
    }
    //减少余额
    @RequestMapping("/decbalance")
    public @ResponseBody void decBalance(@RequestParam(value = "userId",required = true)String userId,
                                         @RequestParam(value = "decrease",required = true)String decrease){
        int Id = Integer.parseInt(userId);
        double Decrease = Double.parseDouble(decrease);
        userInformationService.decBalance(Id,Decrease);
    }
}
