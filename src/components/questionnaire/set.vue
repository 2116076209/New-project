<template>
    <div class="set">
        <span>问卷设置</span>
        <span>已设置{{setCount}}题</span>
        <el-input
            class="el-input"
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 20}"
            placeholder="请设置问题"
            v-model="textarea">
        </el-input>
        <div class="answer">
            <span>选择回答类型:</span>
            <el-radio class="answer-radio" v-model="ansType" label="1"><span>是/否</span></el-radio>
            <el-radio class="answer-radio" v-model="ansType" label="2"><span>输入框</span></el-radio>
        </div>
        <div class="button">
            <el-button @click="front()"  type="primary" round>上一题</el-button>
            <el-button @click="complete()"  type="primary" round>结束设置</el-button>
            <el-button @click="next()"  type="primary" round>下一题</el-button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: '',    /* 问题 */
      setCount:0,
      setList:[],       /* 问题列表 */
      ansType:0         /* 回答类型 */
    }
  },
  methods:{
      el_message(val) {
        this.$message({
          showClose: true,
          message: val,
          type: 'error'
        });
      },
      front(){
          if(this.setCount==0){
              this.el_message('前面没有了')
              return
          }
          let set=this.setList.pop()
          this.setCount--
          this.textarea=set.textarea
          this.ansType=set.ansType
          console.log(set)
          console.log(this.setList)

      },
      next(){
          let this_=this
          if(this.textarea==''){
              this.el_message('未设置问题')
              return
          }
          if(this.ansType==0){
              this.el_message('未设置回答类型')
              return
          }
          let a={}
          this.setList.push({textarea:this.textarea,ansType:this.ansType})
          this.textarea=''
          this.setCount++
          this.ansType=0
          console.log(this.setList)
      },
      complete(){
          if(this.setList.length==0){
              this.el_message('还未设置问题')
              return
          }
          alert("设置完成，已设置"+this.setList.length+"题")
          this.$router.push({name:'ques',params:{setList:this.setList}})
      },

  }
}
</script>

<style scoped>
    .set>span{
        margin-top: 20px;
        font-size: 50px;

    }
    .set{
        width: 100%;
        height: 100%;
        background-image: linear-gradient(rgb(185, 7, 221),rgb(102, 4, 58));
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .el-input{
        margin-top: 50px;
        width: 80%;
    }
    .answer{
        margin-top: 30px;
    }
    .answer>span{
        float: left;
        font-size: 20px;
        padding-right: 50px;
        
    }
    .answer-radio{
        height: 25px;
        margin-top: 7px;
        color: #000;
    }
    .button{
        width: 80%;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
    }
</style>