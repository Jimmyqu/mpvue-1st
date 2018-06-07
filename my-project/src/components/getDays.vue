<template>
  <div class="progress-container">
    <p style="text-align: center">{{percent}}%</p>
    <progress
      class="progress-bar"
      :percent="percent"
      activeColor="#ea5a49"
    ></progress>
    <p>{{year}}已经过了{{days}}天</p>
  </div>
</template>

<script>
    export default {
        name: "get-days",
        computed:{
          year(){
            return new Date().getFullYear()
          },
          days(){
            let start= new Date()
            start.setMonth(0) //月份1
            start.setDate(1) //日子1
            //当前-第一天
            let days = new Date().getTime()-start.getTime()
            return (days/1000/60/60/24+1)
          },
          percent(){

            return (this.days/365*100).toFixed(1)
          }
        },
        methods:{

        }
    }
</script>

<style scoped>
.progress-container{
  width: 100%;
}
</style>
