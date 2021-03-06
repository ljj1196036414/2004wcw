//获取应用实例
const app = getApp()
const apihost = app.globalData.apiUrl;  //本地
// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSelectAll:false,
    list:[],
    totalAmount:0,
    selectAll:false,
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this=this
    let token=wx.getStorageSync('key');
   wx.request({
     url: apihost+'/api/cartlist?token='+token,
     method:'POST',
     dataType:'json',
     header:{'content-type':'application/x-www-form-urlencoded'},
     success:function(res){
      //console.log(res);
      let new_list= res.data.data
      //console.log(new_list);
      _this.setData({
        list:new_list
      })
     }
   })
    },
//复选框
selectAll:function(){
  let list= this.data.list;
  let total=0;
  let all= !this.data.selectAll;
  list.forEach((item)=>{
    if(all){
      item.checked=true
      total +=item.goods_num*item.shop_price
    }else{
      item.checked=false
    }
  })
  this.setData({
    list:list,
    selectAll:all,
    totalAmount:total
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