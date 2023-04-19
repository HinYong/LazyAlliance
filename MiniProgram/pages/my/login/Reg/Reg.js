// pages/my/login/Reg/Reg.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  formRegsubmit: function(param){
    var userId=param.detail.value.requestId
    var userName=param.detail.value.requestName
    var password=param.detail.value.requestPass
    var phone=param.detail.value.requestPhone
    console.log('form发生了submit事件，携带数据为：',userId,userName,password,phone);
    if(userName==""||password==""||phone==""||userId==""){
      wx.showModal({
        cancelColor: 'cancelColor',
        content: '请完整填写信息',
        title: '提示'
      })
    }
    else{
      wx.request({
        url: app.globalData.baseUrl + '/user/signup', 
        data: {
          userId:userId,
          userName: userName,
          password: password,
          phone: phone
        },
        method:'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function () {
          app.globalData.userId=userId
          app.globalData.userName=userName
          app.globalData.password=password
          app.globalData.phone=phone
          app.globalData.reputation=100
          app.globalData.balance=0
          app.globalData.loginflag=true
          wx.showToast({
            title: '注册成功~',   
            duration: 1000,
            success:function(){
              setTimeout(function(){
                wx.navigateBack({
                  delta: 2,
                })
              },1000)
            }
          })
        }
      })
    }
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