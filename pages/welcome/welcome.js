Page({
  handleTap: function(e) {
    // wx.navigateTo({
    //   url: '../posts/posts',
    // })
    wx.redirectTo({
      url: '../posts/posts'
    })
    console.log(e)
  }
})