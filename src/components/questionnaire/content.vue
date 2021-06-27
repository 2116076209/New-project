<template>
    <div class="content">
        <span>{{comSetCount}}/{{allSetCount}}</span>
        <el-input
            class="el-input"
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 20}"
            :readonly='true'
            v-model="textarea">
        </el-input>
        <div class="ansbutton" v-if="ansType==1">
            <el-button @click="ansbutton(true)" class="el-button" type="primary" round>是</el-button>
            <el-button @click="ansbutton(false)" class="el-button" type="primary" round>否</el-button>
        </div>
        <div v-if="ansType==2" class="ansinput">
            <span>
                请输入回答↓
            </span>
            <el-input
                class="el-input"
                type="textarea"
                :autosize="{ minRows: 5, maxRows: 20}"
                v-model="answer">
            </el-input>
            <el-button @click="ansbutton(answer)" class="el-button" type="primary" round>确定</el-button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: '',/* 问题 */
      ansType:0,/* 回答类型 */
      setList1:this.$props.setList,/* 题目列表 */
      allSetCount:0,/* 全部问题个数 */
      comSetCount:0,/* 已答问题个数 */
      comSetList:[],/* 已答问题列表 */
      answer:''/* 回答 */
    }
  },
  props:['setList'],
  methods:{
      el_message(val) {     /* 提示 */
          this.$message({
              showClose: true,
              message: val,
              type: 'error'
          });
      },
      ansbutton(val){       /* 点击按钮 */
          if(val===''){
              this.el_message('还未输入内容')
              return
          }
          this.answer=val
          this.comSetList.push({textarea:this.textarea,ansType:this.ansType,answer:this.answer})
          if(this.comSetCount==this.allSetCount){               /* 是否全部答完 */
              this.$router.push({name:'result',params:{comSetList:this.comSetList}})
              console.log("跳转")
              console.log(this.comSetList)
          }else{
                this.comSetCount++
                this.ansType=this.setList1[this.comSetCount-1].ansType
                this.textarea=this.setList1[this.comSetCount-1].textarea
                this.answer=''
          }
          console.log(this.comSetList)
          
      }
  },
  mounted(){            //题目列表进行第一次赋值
      console.log(1,this.setList1)
      this.allSetCount=this.setList1.length
      this.ansType=this.setList1[0].ansType
      this.textarea=this.setList1[0].textarea
      this.comSetCount++
      console.log(this.textarea)
  }
}
</script>

<style scoped>
    .content{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .content>span{
        font-size: 50px;
        background-image: linear-gradient( red, orange, yellow);    
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    .el-input{
        margin-top: 2%;
        width: 80%;
    }
    .ansbutton{
        margin-top: 2%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .el-button{
        width: 50%;
        margin-top: 2%;
        margin-left: 0px;
    }
    .ansinput{
        width:100% ;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        justify-content: center;
    }
    .ansinput>span{
        margin-top: 2%;
        font-size: 50px;
        
           background-image: linear-gradient(to right, red, orange, yellow, green, azure,green, yellow, orange, red, orange, yellow, green, cornsilk,green, yellow, orange, red);    
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-background-size: 200% 100%;
            animation: bgp 5s infinite linear;
    }

        @-webkit-keyframes bgp{
            0%{
                background-position: 0 0;
            }
            100%{
                background-position: -100% 0;
            }
        }
        
</style>