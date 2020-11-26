//获取应用实例
const app = getApp()
const apihost = app.globalData.apiUrl;  //本地
// pages/page/page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getUserInfo:"微信账号登录",
  },
  denlu:function(e){
   //console.log(123456);
    let _this=this
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: apihost+'/api/wxlogin',
            data: {
              code: res.code
            },
          
          success(res){
           // console.log(res);
            // console.log(res);
            wx.setStorageSync('key', res.data.data.token);
             let value=wx.getStorageSync('key')
             console.log(value);
            let li=wx.setStorage({
              key: 'token',
              success(res){
                console.log(res);
              }
            })  
          }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
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