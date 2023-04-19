// pages/my/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  formloginsubmit: function(param){
    var that = this
    var userId=param.detail.value.requestID
    var password=param.detail.value.requestPass
    console.log('form发生了submit事件，携带数据为：', userId,password);
    wx.request({
      url: app.globalData.baseUrl + '/userlogin/login', 
      data: {
       userId: userId,
       password: password
      },
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        if(res.data==true){
          wx.request({
            url: app.globalData.baseUrl+'/message/showthisuser',
            data: {
              userId: userId
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function(res){
              app.globalData.userId=res.data.userid
              app.globalData.password=res.data.password
              app.globalData.userName=res.data.username
              app.globalData.phone=res.data.phone
              app.globalData.balance=res.data.balance
              app.globalData.reputation=res.data.reputation
              app.globalData.loginflag=true
              wx.showToast({
                title: '登录成功~',   
                duration: 1000,
                success:function(){
                  setTimeout(function(){
                    wx.navigateBack({
                      delta: 1,
                    })
                  },1000)
                }
              })
            }
          })
        }else{
          wx.showToast({
            title: '登录失败！',   
            duration: 2000,
            icon: 'none'
          })
        }
      }
    })
  },

  goToRegPage: function(param){
    wx.navigateTo({
      url: '/pages/my/login/Reg/Reg',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})