// pages/help/Detail/Detail.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  acceptOrder: function(param){
    var orderId=param.detail.value.orderId
    var seekerId=param.detail.value.seekerId
    var userId=app.globalData.userId
    if(seekerId==userId){
      wx.showToast({
        title: '不能接取自己的单！',   
        duration: 2000,
        icon: 'none'
      })
    }
    else{
      wx.request({
        url: app.globalData.baseUrl + '/function/taketheorder', 
        method:'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data:{
          orderId:orderId,
          userId:app.globalData.userId
        },
        success: function(res){
          wx.showToast({
            title: '接单成功~',   
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
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.orderId)
    var that=this;
    var orderId=options.orderId
    wx.request({
      url: app.globalData.baseUrl + '/function/queryorder', 
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        orderId:orderId
      },
      success: function (res) {//成功交互后触发
        that.setData({
          orderId:res.data.orderId,
          seekerId:res.data.seekerId,
          helperId:res.data.helperId,
          ordertime:res.data.ordertime,
          departure:res.data.departure,
          destination:res.data.destination,
          price:res.data.price,
          demand:res.data.demand,
          ordertype:res.data.ordertype,
          orderstage:res.data.orderstage
        })
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