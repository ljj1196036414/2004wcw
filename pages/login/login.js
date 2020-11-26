//获取应用实例
const app = getApp()
const apihost = app.globalData.apiUrl;  //本地
// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  //处理登录
  login:function(e){
    //获取用户的信息
    let userInfo=e.detail.userInfo;
    console.log(userInfo);
    wx.login({
      success(res){
        //获取code
        if(res.code){
          wx.request({
            url: apihost+'/api/wxlogin?code='+res.code,
            method:'post',
            header:{'content-type':'application/json'},
            data:{
                u:userInfo
            },
            success: function(res){
              wx.setStorageSync('key', res.data.data.token);
              wx.setStorageSync('openid', res.data.data.openid);
              let token=wx.getStorageSync('key');
              let openid=wx.getStorageSync('openid');
              console.log(token);
              console.log(openid);
             // console.log(res);
              // "获取token" + res.data.data.token
            }
          })
        }else{
          console.log('登录失败'+res.errMsg);
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