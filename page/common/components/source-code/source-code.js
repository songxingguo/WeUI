// page/common/components/source-code/source-code.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    code: String,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    copyCode: function () {
      wx.setClipboardData({
        data: this.data.code,
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              console.log(res.data) // data
            }
          })
        }
      })
    },
  }
})
