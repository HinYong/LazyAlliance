package com.lazy.service;

import com.lazy.pojo.Users;

public interface UserSignUpService {
    //用户注册
    void signUp(int userId,String userName,String password,String phone);
}
