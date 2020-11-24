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
      url: 'http://jd.2004.com/api/lest',
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