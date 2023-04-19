package com.lazy.service;

import com.lazy.pojo.Orders;
import org.springframework.stereotype.Service;

import java.util.List;


public interface UserFunctionService {
    //发起请求订单
    public void createSeekOrder(int userId,String departure,String destination,double price,String demand,int ordertype);
    //查看所有未接单订单
    public List<Orders> showAllSeekOrders();
    //查看我的请求订单
    public  List<Orders> showMySeekOrders(int userId);
    //查看我的帮助订单
    public List<Orders> showMyHelpOrders(int userId);
    //按照订单号查找订dan
    public Orders queryOrder(int orderId);
    //我要接单
    public void takeTheOrder(int userId,int orderId);
    //取消订单
    public void cancelTheOrder(int orderId);
    //我要确定订单完成
    public void finishTheOrder(int orderId);
}
