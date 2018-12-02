var postsData = require('../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleTap: function (e) {
    var postId = e.currentTarget.dataset.postid;
    console.log(postId)
    wx.navigateTo({
      url: 'post-detail/post-detail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      postList: postsData.postList
    })
  },

})