package com.lazy.dao;

import com.lazy.pojo.Orders;
import com.lazy.pojo.Users;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderMapper {
    //新增订单
    int addOrder(Orders orders);
    //删除订单
    int deleteOrder(Orders orders);
    //改变订单信息
    int updateOrder(Orders orders);
    //查询某一订单
    Orders queryOrder(@Param("orderId") int id);
    //查询用户seek订单
    List<Orders> querySeekOrder(@Param("userId") int id);
    //查询用户help订单
    List<Orders> queryHelpOrder(@Param("userId") int id);
}
