package com.lazy.service;

import com.lazy.dao.OrderMapper;
import com.lazy.dao.UserMapper;
import com.lazy.pojo.Orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service("UserFunctionService")
public class UserFunctionServiceImpl implements UserFunctionService{
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private OrderMapper orderMapper;

    public void setUserMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public void setOrderMapper(OrderMapper orderMapper) {
        this.orderMapper = orderMapper;
    }

    //发起订单
    public void createSeekOrder(int userId,String departure,String destination,double price,String demand,int ordertype){
        SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
        Date date = new Date(System.currentTimeMillis());
        String ordertime = formatter.format(date);
        Orders orders = new Orders(0,userId,0,ordertime,departure,destination,price,demand,ordertype,"待接单");
        orderMapper.addOrder(orders);
    }

    //查看所有未接单订单
    public List<Orders> showAllSeekOrders(){
        return orderMapper.queryHelpOrder(0);
    }

    //查看我的请求订单
    public  List<Orders> showMySeekOrders(int userId){
        return orderMapper.querySeekOrder(userId);
    }

    //查看我的帮助订单
    public List<Orders> showMyHelpOrders(int userId){
        return orderMapper.queryHelpOrder(userId);
    }

    //按照订单号查找订dan
    public Orders queryOrder(int orderId){
        return orderMapper.queryOrder(orderId);
    }
    //我要接单
    public void takeTheOrder(int userId,int orderId){
        Orders orders = orderMapper.queryOrder(orderId);
        orders.setHelperId(userId);
        orders.setOrderstage("已接单");
        orderMapper.updateOrder(orders);
    }
    //取消订单
    public void cancelTheOrder(int orderId){
        Orders orders = orderMapper.queryOrder(orderId);
        orderMapper.deleteOrder(orders);
    }

    //我要确定订单完成
    public void finishTheOrder(int orderId){
        Orders orders = orderMapper.queryOrder(orderId);
        orders.setOrderstage("已完成");
        orderMapper.updateOrder(orders);
    }
}
