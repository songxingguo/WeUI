// page/about/about.js
Page({
  data: {
    aboutWeUI: {
      title: '关于 WeUI 库',
      content: 'WeUI库是用于收藏平时生活中遇到的比较有意思的UI,通过微信小程序的形式展示出来，提供给自己和大家需要的时候使用。'
    },
    aboutAuthor: {
      title: '关于作者',
      content: '热爱技术，也热爱生活。'
    },
    aboutSourceCode: {
      title: '关于源码',
      content: 'https://github.com/songxingguo/MyWeUI'
    }
  },
  copyUrl: function () {
    wx.setClipboardData({
      data: this.data.aboutSourceCode.content,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  }
})