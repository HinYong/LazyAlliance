package com.lazy.service;

import com.lazy.dao.UserMapper;
import com.lazy.pojo.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("UserSignUpService")
public class UserSignUpServiceImpl implements UserSignUpService{
    @Autowired
    private UserMapper userMapper;

    public void setUserMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public void signUp(int userId,String userName,String password,String phone){
        Users users=new Users(userId,password,userName,phone,0.0,100);
        this.userMapper.addUser(users);
    }
}
