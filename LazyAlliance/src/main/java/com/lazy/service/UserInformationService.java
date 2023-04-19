package com.lazy.service;

import com.lazy.pojo.Users;

import java.util.List;

public interface UserInformationService {
      //获取本用户信息
      public Users showThisUser(int userId);
      //获取所有用户信息
      public List<Users> showAllUsers();
      //查看我的余额
      public double showBalance(int userId);
      //余额增加
      public void addBalance(int userId,double addition);
      //余额减少
      public void decBalance(int userId,double decrease);
      //查看信誉值
      public int showReputation(int userId);
      //修改用户信息
      public void updateUserMessage(int userId,String password,String userName,String phone);

}
