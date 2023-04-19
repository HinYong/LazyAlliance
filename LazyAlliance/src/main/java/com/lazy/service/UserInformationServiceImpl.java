package com.lazy.service;

import com.lazy.dao.UserMapper;
import com.lazy.pojo.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("UserInformationService")
public class UserInformationServiceImpl implements UserInformationService{
    @Autowired
    private UserMapper userMapper;

    public void setUserMapper(UserMapper userMapper) {
        this.userMapper=userMapper;
    }

    //查看所有用户
    public List<Users> showAllUsers() {
        return this.userMapper.queryAllUser();
    }

    //查看当前用户所有信息
    public Users showThisUser(int userId) {
        return this.userMapper.queryUser(userId);
    }
    //返回当前用户余额
    public double showBalance(int userId){
        Users users = this.userMapper.queryUser(userId);
        return users.getBalance();
    }
    //修改用户信息
    public void updateUserMessage(int userId,String password,String userName,String phone){
        Users users = this.userMapper.queryUser(userId);
        users.setPassword(password);
        users.setUsername(userName);
        users.setPhone(phone);
        userMapper.updateUser(users);
    }
    //增加余额
    public void addBalance(int userId,double addition){
        Users users = this.userMapper.queryUser(userId);
        users.setBalance(users.getBalance()+addition);
        userMapper.updateUser(users);
    }
    //减少余额
    public void decBalance(int userId,double decrease){
        Users users = this.userMapper.queryUser(userId);
        users.setBalance(users.getBalance()-decrease);
        userMapper.updateUser(users);
    }
    //查看信誉值
    public int showReputation(int userId){
        Users users = this.userMapper.queryUser(userId);
        return users.getReputation();
    }
}
