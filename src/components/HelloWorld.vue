<template>
  <div class="hello">
    <el-button @click="jump()" class="start">开始</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return{

    }
  },
  methods: {
    jump () {
      this.$router.push({name:'ques',params:{setList:''}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .start{
    text-align: center;
    background-color: aqua;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    font-size: 30px;
    color: #000;
  }
  .start:hover{
    width: 220px;
    height: 220px;
  }
</style>
