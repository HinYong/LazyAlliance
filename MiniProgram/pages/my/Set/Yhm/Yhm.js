// pages/my/Set/Yhm/Yhm.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formnamesubmit: function(param){
    var userName=param.detail.value.requestname
    console.log(userName)
    if(userName==''){
      wx.showToast({
        title: '用户名不能为空！',   
        duration: 2000,
        icon: 'none'
      })
    }
    else{
      wx.request({
        url: app.globalData.baseUrl + '/message/updateusermessage', 
        method:'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data:{
          userId:app.globalData.userId,
          password:app.globalData.password,
          userName:userName,
          phone:app.globalData.phone
        },
        success: function(res){
          app.globalData.userName=userName
          wx.showToast({
            title: '修改成功~',   
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