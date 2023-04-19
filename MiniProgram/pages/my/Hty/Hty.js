// pages/my/Hty/Hty.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seekorderlist:[],
    helporderlist:[],
    navbar: ['求助订单', '帮忙订单'],
    currentTab: 0
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  goToDetailPage: function (param) {
    var orderId=param.detail.value.orderId
    console.log(orderId)
    wx.navigateTo({
      url: '/pages/my/Hty/HtyDetail/HtyDetail?orderId='+orderId
    })
  } ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: app.globalData.baseUrl + '/function/showmyseekorders', 
      data:{
        userId:app.globalData.userId
      },
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {//成功交互后触发
        var counter=0
        that.setData({
          seekorderlist:[]
        })
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].orderstage=="已完成"){
            var string='seekorderlist['+counter+']'
            that.setData({
              [string]:{
                orderId:res.data[i].orderId,
                seekerId:res.data[i].seekerId,
                helperId:res.data[i].helperId,
                ordertime:res.data[i].ordertime,
                departure:res.data[i].departure,
                destination:res.data[i].destination,
                price:res.data[i].price,
                demand:res.data[i].demand,
                ordertype:res.data[i].ordertype,
                orderstage:res.data[i].orderstage,
              }
            })
            counter++
          }
        }
      }  
    })
    var that=this;
    wx.request({
      url: app.globalData.baseUrl + '/function/showmyhelporders', 
      data:{
        userId:app.globalData.userId
      },
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {//成功交互后触发
        var counter=0
        that.setData({
          helporderlist:[]
        })
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].orderstage=="已完成"){
            var string='helporderlist['+counter+']'
            that.setData({
              [string]:{
                orderId:res.data[i].orderId,
                seekerId:res.data[i].seekerId,
                helperId:res.data[i].helperId,
                ordertime:res.data[i].ordertime,
                departure:res.data[i].departure,
                destination:res.data[i].destination,
                price:res.data[i].price,
                demand:res.data[i].demand,
                ordertype:res.data[i].ordertype,
                orderstage:res.data[i].orderstage,
              }
            })
            counter++
          }
        }
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
      url: app.globalData.baseUrl + '/function/showmyseekorders', 
      data:{
        userId:app.globalData.userId
      },
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {//成功交互后触发
        var counter=0
        that.setData({
          seekorderlist:[]
        })
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].orderstage=="已完成"){
            var string='seekorderlist['+counter+']'
            that.setData({
              [string]:{
                orderId:res.data[i].orderId,
                seekerId:res.data[i].seekerId,
                helperId:res.data[i].helperId,
                ordertime:res.data[i].ordertime,
                departure:res.data[i].departure,
                destination:res.data[i].destination,
                price:res.data[i].price,
                demand:res.data[i].demand,
                ordertype:res.data[i].ordertype,
                orderstage:res.data[i].orderstage,
              }
            })
            counter++
          }
        }
      }  
    })
    var that=this;
    wx.request({
      url: app.globalData.baseUrl + '/function/showmyhelporders', 
      data:{
        userId:app.globalData.userId
      },
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {//成功交互后触发
        var counter=0
        that.setData({
          helporderlist:[]
        })
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].orderstage=="已完成"){
            var string='helporderlist['+counter+']'
            that.setData({
              [string]:{
                orderId:res.data[i].orderId,
                seekerId:res.data[i].seekerId,
                helperId:res.data[i].helperId,
                ordertime:res.data[i].ordertime,
                departure:res.data[i].departure,
                destination:res.data[i].destination,
                price:res.data[i].price,
                demand:res.data[i].demand,
                ordertype:res.data[i].ordertype,
                orderstage:res.data[i].orderstage,
              }
            })
            counter++
          }
        }
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
    var that=this;
    wx.request({
      url: app.globalData.baseUrl + '/function/showmyseekorders', 
      data:{
        userId:app.globalData.userId
      },
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {//成功交互后触发
        var counter=0
        that.setData({
          seekorderlist:[]
        })
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].orderstage=="已完成"){
            var string='seekorderlist['+counter+']'
            that.setData({
              [string]:{
                orderId:res.data[i].orderId,
                seekerId:res.data[i].seekerId,
                helperId:res.data[i].helperId,
                ordertime:res.data[i].ordertime,
                departure:res.data[i].departure,
                destination:res.data[i].destination,
                price:res.data[i].price,
                demand:res.data[i].demand,
                ordertype:res.data[i].ordertype,
                orderstage:res.data[i].orderstage,
              }
            })
            counter++
          }
        }
      }  
    })
    var that=this;
    wx.request({
      url: app.globalData.baseUrl + '/function/showmyhelporders', 
      data:{
        userId:app.globalData.userId
      },
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {//成功交互后触发
        var counter=0
        that.setData({
          helporderlist:[]
        })
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].orderstage=="已完成"){
            var string='helporderlist['+counter+']'
            that.setData({
              [string]:{
                orderId:res.data[i].orderId,
                seekerId:res.data[i].seekerId,
                helperId:res.data[i].helperId,
                ordertime:res.data[i].ordertime,
                departure:res.data[i].departure,
                destination:res.data[i].destination,
                price:res.data[i].price,
                demand:res.data[i].demand,
                ordertype:res.data[i].ordertype,
                orderstage:res.data[i].orderstage,
              }
            })
            counter++
          }
        }
      }  
    })
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