<script>
  import utils from './utils/comm'
export default {
  created () {

    wx.request({
      url:'https://www.easy-mock.com/mock/5a769ac93c4ca20b4f1dd692/example_copy/card',
      success:function (data) {

      }
    })

  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
