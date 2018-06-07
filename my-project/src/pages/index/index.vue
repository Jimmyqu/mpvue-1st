<template>
  <div class="container">
    <div class="userinfo" >
      <img @click="getUserInfo" class="userinfo-avatar"  :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <p>{{userInfo.nickName}}</p>
        <!--<card :text="userInfo.nickName"></card>-->
      </div>
      <button @click="addbook">add book</button>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <get-days></get-days>
      </div>
    </div>

  </div>
</template>

<script>
  //src下@设置搜索路径
import card from '@/components/card'
import getDays from '@/components/getDays'
import utils from '@/utils/comm'

const url='https://douban.uieee.com/v2/book/'
export default {
  data () {
    return {

      userInfo: {
        avatarUrl:'http://img-cdn-qiniu.dcloud.net.cn/uploads/avatar/000/08/12/58_avatar_mid.jpg',
        nickName:'点击登录'
      },
      location:'',

    }
  },
  mounted(){
    console.log('indexPage')

  },
  components: {
    card,
    getDays
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'  //跳转时是到对应页面main.js
      wx.navigateTo({ url })
      //跳转页面
    },
    getUserInfo () {
      //判断 是否有用户信息缓存
      let user=wx.getStorageSync('userInfo')
      this.userInfo = user
      if(!user){
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
                wx.setStorageSync('userInfo',res.userInfo) //储存到本地缓存
                wx.showToast({  //toast
                  title:'登录成功',
                  icon:'success'
                })
              },
              fail:()=>{
                console.log('登录失败')
              }
            })
          }
        })
      }
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    addbook(){
      console.log(1)
      wx.scanCode({
        success: (res) => {
          console.log(res)
        }
      })
      console.log(2)
    }
  },

  created () {

    // utils.wxpost('get',url+'1234567'
    // ,{})

    // wx.scanCode({
    //   success: (res) => {
    //     console.log(res)
    //   },
    //   fail:(t)=>{
    //     console.log(t)
    //   }
    // })
    let UserInfo=wx.getStorageSync('userInfo')
    //判断是否有数据 有则直接使用
    if(UserInfo){
      this.userInfo=UserInfo
    }
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
