package com.lazy.controller;

import com.lazy.pojo.Orders;
import com.lazy.service.UserFunctionService;
import com.lazy.service.UserInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/function")
public class UserFunctionController {
    @Autowired
    @Qualifier("UserFunctionService")
    private UserFunctionService userFunctionService;

    @Autowired
    @Qualifier("UserInformationService")
    private UserInformationService userInformationService;
    //发起请求订单
    @RequestMapping("/createseekorder")
    public @ResponseBody void createSeekOrder(@RequestParam(value = "userId",required=true)String userId,
                         @RequestParam(value = "departure",required=true)String departure,
                         @RequestParam(value = "destination",required=true)String destination,
                         @RequestParam(value = "price",required=true)String price,
                         @RequestParam(value = "demand",required=true)String demand,
                         @RequestParam(value = "ordertype",required=true)String ordertype){
        int Id = Integer.parseInt(userId);
        double Price = Double.parseDouble(price);
        int Ordertype = Integer.parseInt(ordertype);
        //创建订单
        userFunctionService.createSeekOrder(Id,departure,destination,Price,demand,Ordertype);
        //减少余额
        userInformationService.decBalance(Id,Price);
    }

    //查看所有未接单订单
    @RequestMapping("/showallseekorders")
    public @ResponseBody List<Orders> showAllSeekOrders(){
        return userFunctionService.showAllSeekOrders();
    }
    //查看我的请求订单
    @RequestMapping("/showmyseekorders")
    public @ResponseBody List<Orders> showMySeekOrders(@RequestParam(value = "userId",required=true) String userId){
        int Id = Integer.parseInt(userId);
        return userFunctionService.showMySeekOrders(Id);
    }
    //查看我的帮助订单
    @RequestMapping("/showmyhelporders")
    public @ResponseBody List<Orders> showMyHelpOrders(@RequestParam(value = "userId",required=true) String userId){
        int Id = Integer.parseInt(userId);
        return userFunctionService.showMyHelpOrders(Id);
    }
    //按照订单号查找订dan
    @RequestMapping("/queryorder")
    public @ResponseBody Orders queryOrder(@RequestParam(value = "orderId",required=true) String orderId){
        int Id = Integer.parseInt(orderId);
        return userFunctionService.queryOrder(Id);
    }
    //我要接单
    @RequestMapping("/taketheorder")
    public @ResponseBody void takeTheOrder(@RequestParam(value = "userId",required=true)String userId,
                                           @RequestParam(value = "orderId",required=true)String orderId){
        int UserId = Integer.parseInt(userId);
        int OrderId = Integer.parseInt(orderId);
        //进入接单状态
        userFunctionService.takeTheOrder(UserId,OrderId);
    }
    @RequestMapping("/canceltheorder")
    public  @ResponseBody void cancelTheOrder(@RequestParam (value = "orderId",required=true)String orderId){
        int OrderId = Integer.parseInt(orderId);
        Orders orders = userFunctionService.queryOrder(OrderId);
        int userId = orders.getSeekerId();
        double price = orders.getPrice();
        userInformationService.addBalance(userId,price);
        userFunctionService.cancelTheOrder(OrderId);

    }
    //我要确定订单完成
    @RequestMapping("/finishtheorder")
    public @ResponseBody void finishTheOrder(@RequestParam(value = "orderId",required=true) String orderId){
        int OrderId = Integer.parseInt(orderId);
        userFunctionService.finishTheOrder(OrderId);
        Orders orders = userFunctionService.queryOrder(OrderId);
        double price = orders.getPrice();
        int helperId = orders.getHelperId();
        userInformationService.addBalance(helperId,price);
    }

}
