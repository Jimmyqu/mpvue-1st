const utils={
  url:'https://api.douban.com/v2/',
  wxpost:(method,url,data)=>{
    wx.request({
      method:method,
      url:url,
      data:data,
      success:function (res) {
        console.log(res)
      }
    })
  }
}

export default utils
