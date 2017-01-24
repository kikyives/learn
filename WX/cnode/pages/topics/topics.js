// pages/topics/topics.js
var Api = require('../../utils/api.js')
Page({
  data:{
    title: '首页列表'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('onlode by topics');
    this.fetchData()
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  fetchData: function(data){
    //处理参数
    if (!data) data = {};
    if (!data) data.page = 1;
    wx.request({
      url: 'Api.getTopics(data)',
      data: {},
     // method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})