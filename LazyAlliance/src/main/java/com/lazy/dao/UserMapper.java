package com.lazy.dao;

import com.lazy.pojo.Users;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMapper {
    //新增用户
    int addUser(Users users);
    //删除用户
    int deleteUser(Users users);
    //改变用户信息
    int updateUser(Users users);
    //查询用户
    Users queryUser(@Param("userId") int userId);
    //用户登录查找
    Users checkUser(@Param("userId") int userId,@Param("password") String password);
    //不需要用到,
    List<Users> queryAllUser();
}
