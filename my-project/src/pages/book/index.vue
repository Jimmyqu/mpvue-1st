<template>
  <div class="container">
    111
    <div :key="item" v-for="item in list">{{item.name}}</div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      list:[]
    }
  },
  created(){
    this.getBook()

  },

  methods: {
    getBook(){
      wx.request({
        url:'https://www.easy-mock.com/mock/5a769ac93c4ca20b4f1dd692/example_copy/card',
        success:(data)=>{
          this.list=data.data.data
        }
      })
    }

  },
}
</script>

<style scoped>

</style>
