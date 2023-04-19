package com.lazy.service;

import com.lazy.dao.UserMapper;
import com.lazy.pojo.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("UserLoginService")
public class UserLoginServiceImpl implements  UserLoginService{
    @Autowired
    private UserMapper userMapper;

    public void setUserMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public boolean userLogin(int userName,String password){
        if(userMapper.checkUser(userName,password)!=null){
            return true;
        }else{
            return false;
        }
    }


}
