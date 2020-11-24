// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['/image/discount-banner.jpg', '/image/draw-banner.jpg', '/image/nursing-banner.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    list:[],
    page:1,  //列表 页号
    pagesize:10, //列表  大小
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function (options) {
    let access_token=wx.getStorageSync('key');
    console.log(access_token);
     let _this=this
    _this.getGoodsList();
    wx.request({
        url: 'http://jd.2004.com/api/leibiao',
        success (res) {
          //console.log(res);
          //setData  定义一个变量
          _this.setData({
              list:res.data
          })  
        }
      })
    },
//触底事件
onReachBottom: function()
{
  //console.log(989304580395)
  this.data.page++;
  this.getGoodsList();
},
  

  //页面跳转
  enterdetail:function(e){
   // console.log(e);
     let _this=this
    let id=e.currentTarget.id;
    wx.navigateTo({
      url:'/pages/detail/detail?goods_id='+id,
    })
  },

  
  //获取商品数据
  getGoodsList:function(){
      let _this=this
      wx.request({
        url:'http://jd.2004.com/api/goodslest',
        data:{
            page: _this.data.page, //分页  页号
            size: _this.data.pagesize
        },
        header:{'content-type':'application/json'},
        success(res){
         console.log(res);
          let new_list= _this.data.list.concat(res.data.data.data.data)
          //console.log(new_list);
          _this.setData({
              list:new_list
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})