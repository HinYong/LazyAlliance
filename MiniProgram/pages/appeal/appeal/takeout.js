// pages/appeal/appeal/lunch.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true
  },

  formtakeoutsubmit: function(param){
    var userId=app.globalData.userId
    var departure=param.detail.value.requestDeparture
    var destination=param.detail.value.requestDestination
    var price=param.detail.value.requestPrice
    var ordertype=0
    var takeId=param.detail.value.requestID
    var username=param.detail.value.requestName
    var phone=param.detail.value.requestPhone
    var takedemand=param.detail.value.requestDemand
    var demand='外卖单号为: '+takeId+' 订餐人为: '+username+' 联系方式为: '+phone+' 外卖描述为: '+takedemand
    if(departure==""||destination==""||price==""||username==""||phone==""||takedemand==""||takeId==""){
      this.setData({
        flag:false
      })
      wx.showModal({
        cancelColor: 'cancelColor',
        content: '请完整填写信息',
        title: '提示'
      })
      
    }
    if(price>app.globalData.balance){
      this.setData({
        flag:false
      })
      wx.showModal({
        cancelColor: 'cancelColor',
        content: '余额不足',
        title: '提示'
      })
      
    }
    if(app.globalData.balance==0){
      this.setData({
        flag:false
      })
      wx.showModal({
        cancelColor: 'cancelColor',
        content: '余额为零，请先充值',
        title: '提示'
      })
      
    }
    if(this.data.flag==true){
      wx.request({
        url: app.globalData.baseUrl + '/function/createseekorder', 
        data: {
          userId: userId,
          departure: departure,
          destination:destination,
          price:price,
          demand:demand,
          ordertype:ordertype
        },
        method:'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded' 
        },
        success: function () {
          wx.request({
            url: app.globalData.baseUrl + '/message/showbalance', 
            data: {
              userId:userId
            },
            method:'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function(res){
              console.log(res.data)
              app.globalData.balance=res.data
              wx.showToast({
                title: '发单成功',   
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