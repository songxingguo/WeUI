Page({
  data: {
    list: [
      {
        id: 'swiper',
        name: '轮播',
        open: false,
        pages: [
          {
            zh: '图片轮播',
            url: 'scroll-img/scroll-img'
          }, {
            zh: '功能轮播',
            url: 'scroll-op/scroll-op'
          }
        ]
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        if (list[i].url) {
          wx.navigateTo({
            url: 'pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})
