// pages/game/game.js
Page({
  /**
   * 页面的初始数据
   */   
  data: {
    value: 1,
    msg:'什么都没有',
    one_image:'https://s2.loli.net/2022/11/10/c8IRNvE3BQOmuyD.png',
    two_image:'https://s2.loli.net/2022/11/10/c8IRNvE3BQOmuyD.png',
    three_image:'https://s2.loli.net/2022/11/10/c8IRNvE3BQOmuyD.png',
    four_image:'https://s2.loli.net/2022/11/10/c8IRNvE3BQOmuyD.png',
    five_image:'https://s2.loli.net/2022/11/10/c8IRNvE3BQOmuyD.png',
    six_image:'https://s2.loli.net/2022/11/10/c8IRNvE3BQOmuyD.png',
    flag:true,
    list:[
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    arr:[
      'https://s2.loli.net/2022/11/10/2pX79RZQnd4AHi1.png',
      'https://s2.loli.net/2022/11/10/LOC9qhGngdIsxfy.png',
      'https://s2.loli.net/2022/11/10/ENF64jBcpl5UOxJ.png',
      'https://s2.loli.net/2022/11/10/XjDEdn2kYMogPSa.png',
      'https://s2.loli.net/2022/11/10/jkBY5GEnVwMNLUC.png',
      'https://s2.loli.net/2022/11/10/c8IRNvE3BQOmuyD.png',
    ]
  },
  toBegin1:function (params) {
      wx.navigateTo({
        url: '../home/home',
      })
  },
  go:function (params) {
    let obj=this;
    obj.setData({
      msg:'什么都没有',
    })
    if (obj.data.flag==true){
      let one = Math.floor(Math.random() * 5 + 1);
      obj.data.list[one]=obj.data.list[one]+1;
      let two = Math.floor(Math.random() * 5 + 1);
      obj.data.list[two]=obj.data.list[two]+1;
      let three = Math.floor(Math.random() * 5 + 1);
      obj.data.list[three]=obj.data.list[three]+1;
      let four = Math.floor(Math.random() * 5 + 1);
      obj.data.list[four]=obj.data.list[four]+1;
      let five = Math.floor(Math.random() * 5 + 1);
      obj.data.list[five]=obj.data.list[five]+1;
      let six = Math.floor(Math.random() * 5 + 1);
      obj.data.list[six]=obj.data.list[six]+1;
      console.log(obj.data.list);
      if (obj.data.list[0]==1 && obj.data.list[1]==1 && obj.data.list[2]==1 && obj.data.list[3]==1 && obj.data.list[4]==1 && obj.data.list[5]==1){
        obj.setData({
          msg:'对堂',
        })
      }
      else if (obj.data.list[3]==6){
        obj.setData({
          msg:'状元(六博红)',
        })
      }
      else if (obj.data.list[0]==6 || obj.data.list[1]==6 || obj.data.list[2]==6 || obj.data.list[4]==6 || obj.data.list[5]==6){
        obj.setData({
          msg:'状元(六博黑)',
        })
      }
      else if (obj.data.list[0]==5 ||obj.data.list[1]==5 ||obj.data.list[2]==5 ||obj.data.list[4]==5 ||obj.data.list[5]==5){
        obj.setData({
          msg:'状元(五子登科)',
        })
      }
      else if (obj.data.list[3]==5) {
          obj.setData({
            msg:'状元(五红)',
          })
      }
      else if (obj.data.list[3]==4 && obj.data.list[0]==2){
        obj.setData({
          msg:'状元(状元插金花)',
        })
      }
      else if (obj.data.list[3]==4){
        obj.setData({
          msg:'状元(四红)',
        })
      }
      else if (obj.data.list[3]==3){
        obj.setData({
          msg:'三红',
        })
      }
      else if(obj.data.list[0]==4 ||obj.data.list[1]==4 ||obj.data.list[2]==4 ||obj.data.list[4]==4 ||obj.data.list[5]==4){
        obj.setData({
          msg:'四进',
        })
      }
      else if(obj.data.list[3]==2){
        obj.setData({
          msg:'二举',
        })
      }
      else if(obj.data.list[3]==1){
        obj.setData({
          msg:'一秀',
        })
      }
      obj.data.list[0]=0;
      obj.data.list[1]=0;
      obj.data.list[2]=0;
      obj.data.list[3]=0;
      obj.data.list[4]=0;
      obj.data.list[5]=0;
      obj.setData({
        one_image : obj.data.arr[one],
        two_image : obj.data.arr[two],
        three_image : obj.data.arr[three],
        four_image : obj.data.arr[four],
        five_image : obj.data.arr[five],
        six_image : obj.data.arr[six],
        // flag:false,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key:"number",
      success: function(res) {
        that.setData({
          value: res.data
        })
      },
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