// pages/demo/demo.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  goToTakeoutPage: function(param){
    if(app.globalData.loginflag==false){
      wx.showModal({
        cancelColor: 'cancelColor',
        content: '请先登录',
        title: '提示'
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/appeal/appeal/takeout',
      })
    }
  },
  goToExpressPage: function(param){
    if(app.globalData.loginflag==false){
      wx.showModal({
        cancelColor: 'cancelColor',
        content: '请先登录',
        title: '提示'
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/appeal/appeal/express',
      })
    }
  },
  goToLunchPage: function(param){
    if(app.globalData.loginflag==false){
      wx.showModal({
        cancelColor: 'cancelColor',
        content: '请先登录',
        title: '提示'
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/appeal/appeal/lunch',
      })
    }
  },
  goToRunservicePage: function(param){
    if(app.globalData.loginflag==false){
      wx.showModal({
        cancelColor: 'cancelColor',
        content: '请先登录',
        title: '提示'
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/appeal/appeal/runservice',
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