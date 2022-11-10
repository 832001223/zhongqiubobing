// pages/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      modalHidden:true,//是否隐藏对话框
  },
  showWindows1: function() {
      wx.showModal({
        title: '提示',
        content: '玩家设置完信息后选择基础模式或者联机模式。\n若选择基础模式，可以选择游戏人数、设置奖品、创建房间、开始游戏。玩家可以设置每个奖项所对应的奖品和数量。\n游戏中，每位玩家在自己的轮次中投出六个骰子🎲，按照博饼规则所对应的结果进行奖品的分配或其他娱乐操作。\n联机模式可以线上加入他人房间，联网进行游戏。',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      },
  showWindows2: function() {
          this.setData({
            modalHidden: false
          })
        },
      
        /**
         * 点击取消
         */
        modalCandel: function() {
          // do something
          this.setData({
            modalHidden: true
          })
        },
      
        /**
         *  点击确认
         */
        modalConfirm: function() {
          // do something
          this.setData({
            modalHidden: true
          })
        }
      
})