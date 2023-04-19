// pages/my/Set/Set.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  goToYhmPage: function(param){
    wx.navigateTo({
      url: '/pages/my/Set/Yhm/Yhm',
    })
  },
  goToMimaPage: function(param){
    wx.navigateTo({
      url: '/pages/my/Set/Mima/Mima',
    })
  },
  goToTelePage: function(param){
    wx.navigateTo({
      url: '/pages/my/Set/Tele/Tele',
    })
  },


  quit:function(param){
    app.globalData.loginflag=false
    app.globalData.userId=0
    app.globalData.userName=""
    app.globalData.passsword= ""
    app.globalData.phone= ""
    app.globalData.balance=0
    app.globalData.reputation=0
    wx.navigateBack({
      delta: 0,
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