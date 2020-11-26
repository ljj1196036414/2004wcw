//获取应用实例
const app = getApp()
const apihost = app.globalData.apiUrl;  //本地
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['/image/0c930ccc45462cfd.jpg', '/image/1c233f664015b793.jpg', '/image/7c6b2e7a3f12c9bf.jpg','/image/45c9db9bf6cb206d.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
  },
  swipperChange:function(e){
    let _this=this
    let current=e.detail.current;
    _this.setData({
      current:e.detail.current
    })
  },
  //加入购物车
  buynow1:function(data){
    //获取表单页面传过来的id
    let goods_id=data.currentTarget.dataset.goodsid;
    console.log(goods_id);
    let token=wx.getStorageSync('key');
   wx.request({
     url: apihost+'/api/cart?token='+token,
     method:'POST',
     dataType:'json',
     header:{'content-type':'application/x-www-form-urlencoded'},
     data:{
       goods_id:goods_id,
           },
     success:function(res){
      console.log(res);
     }
   })
  },
  //购物车
  cart:function(){
    let token=wx.getStorageSync('key');
   wx.request({
     url: apihost+'/api/cartlist?token='+token,
     method:'POST',
     dataType:'json',
     header:{'content-type':'application/x-www-form-urlencoded'},
     success:function(res){
      console.log(res);
     }
   })
  },
  //收藏
  Collection:function(data){
   let token=wx.getStorageSync('key');
   //console.log(token);
    let goods_id=data.currentTarget.dataset.goodid;
    wx.request({
      url: apihost+'/api/collection?token='+token,
      method:'POST',
      dataType:"json",
      header:{'content-type':'application/x-www-form-urlencoded'},
      data:{
        goods_id:goods_id
      },
      success:function(res){
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
     let _this = (this);
     let id = options.goods_id;
     let access_token=wx.getStorageSync('key');
     //console.log(access_token);
     wx.request({
      url: apihost+'/api/lest',
      data:{
        goods_id:id,
        access_token:access_token
      },
      success:function(goods) {
        //console.log(goods);
        _this.setData({
          good:goods.data
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