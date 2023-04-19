// pages/my/my.js
const app=getApp()
Page({
  data: {
    name:"未登陆",
    imgUrl:"http://i1.fuimg.com/736358/a300cd58a6405028.png"
  },

  setPhotoInfo:function(){
    if(app.globalData.loginflag==false){
      wx.showModal({
        cancelColor: 'cancelColor',
        content: '请先登录',
        title: '提示'
      })
    }
    else{
      var that = this;
      wx.chooseImage(
        {
          count: 1,
          sizeType: ['original','compressed'],
          sourceType:['album','camera'],
          success: function (res){
            that.setData({imgUrl:res.tempFilePaths})
          }
        }
      )
    }
  },
  goToLoginPage: function(param){
    if(app.globalData.loginflag==false){
      wx.navigateTo({
        url: '/pages/my/login/login',
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/my/Info/Info',
      })
    }
  },
  goToBalPage: function(param){
    if(app.globalData.loginflag==false){
      wx.showModal({
        cancelColor: 'cancelColor',
        content: '请先登录',
        title: '提示'
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/my/Bal/Bal',
      })
    }
  },
  goToHtyPage: function(param){
    if(app.globalData.loginflag==false){
      wx.showModal({
        cancelColor: 'cancelColor',
        content: '请先登录',
        title: '提示'
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/my/Hty/Hty',
      })
    }
  },
  goToRepPage: function(param){
    if(app.globalData.loginflag==false){
      wx.showModal({
        cancelColor: 'cancelColor',
        content: '请先登录',
        title: '提示'
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/my/Rep/Rep',
      })
    }
  },
  goToSetPage: function(param){
    if(app.globalData.loginflag==false){
      wx.showModal({
        cancelColor: 'cancelColor',
        content: '请先登录',
        title: '提示'
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/my/Set/Set',
      })
    }
  },
  goToContactPage: function(param){
    wx.navigateTo({
      url: '/pages/my/Contact/Contact',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.loginflag){
      this.setData({
        name:app.globalData.userName
      })
    }else{
      this.setData({
        name:"未登录"
      })
    }
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
    if(app.globalData.loginflag){
      this.setData({
        name:app.globalData.userName
      })
    }else{
      this.setData({
        name:"未登录"
      })
    }
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