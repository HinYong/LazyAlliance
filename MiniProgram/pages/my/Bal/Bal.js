// pages/my/Bal/Bal.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    balance:0,
  },

  goToChongPage: function(param){
    wx.navigateTo({
      url: '/pages/my/Bal/Chong/Chong',
    })
  },
  goToJiaoyiPage: function(param){
    wx.navigateTo({
      url: '/pages/my/Hty/Hty',
    })
  },
  goToTixianPage: function(param){
    wx.navigateTo({
      url: '/pages/my/Bal/Tixian/Tixian',
    })
  },
  goToYhkPage: function(param){
    wx.navigateTo({
      url: '/pages/my/Bal/Yhk/Yhk',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //查看余额
    var that=this;
    wx.request({
      url: app.globalData.baseUrl + '/message/showbalance', 
      data: {
        userId:app.globalData.userId
      },
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {//成功交互后触发   
          that.setData({
            balance:res.data
          })
        console.log(that.data.balance)
      }  
    })
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
    var that=this;
    wx.request({
      url: app.globalData.baseUrl + '/message/showbalance', 
      data: {
        userId:app.globalData.userId
      },
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {//成功交互后触发   
          that.setData({
            balance:res.data
          })
        console.log(that.data.balance)
      }  
    })
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