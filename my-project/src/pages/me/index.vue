<template>
  <div class="container">

    me
  </div>
</template>

<script>


export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      location:''
    }
  },
  mounted(){

    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log(latitude+' '+longitude)

      }
    })
  },

  methods: {


  },

  created () {
    // 调用应用实例的方法获取全局数据
    // 可获得其他页面储存的本地缓存 console.log(wx.getStorageSync('userInfo'))
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
