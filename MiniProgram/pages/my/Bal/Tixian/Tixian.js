// pages/my/Bal/Chong/Chong.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0, //默认选中第一个
    numArray: [20, 30, 50, 80, 100,150],
    price:20
  },
   
  activethis: function (event) { //点击选中事件
    var numArray=[20, 30, 50, 80, 100, 150];
    var thisindex = event.currentTarget.dataset.thisindex; //当前index
    var price=numArray[thisindex];
    this.setData({
      activeIndex: thisindex,
      price:price
    })
  },

  withdraw: function(param){
    var decrease=param.detail.value.decrease
    console.log(decrease)
    
    if(decrease<=0){
      wx.showToast({
        title: '请输入正确的提现金额！',   
        duration: 2000,
        icon: 'none'
      })
    }
    else if(decrease>app.globalData.balance){
      wx.showToast({
        title: '提现失败！提现金额大于当前余额！',   
        duration: 2000,
        icon: 'none'
      })
    }
    else{
      wx.request({
        url: app.globalData.baseUrl + '/message/decbalance', 
        method:'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data:{
          decrease:decrease,
          userId:app.globalData.userId
        },
        success: function(res){
          wx.showToast({
            title: '提现成功~',   
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