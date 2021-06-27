<template>
  <div class="home">
    <div v-show="choShow" class="choose">
        <el-button class="button" @click="choose('set')"  type="primary">设置问卷</el-button>
        
        <router-link v-show="!setList1 && chiShow===false" class="link" :to="{name:'content',params:{setList:this.defSetList}}" >
            <el-button  class="button" @click="choose('children')"  type="primary">使用默认</el-button>
        </router-link>
        <router-link v-show="setList1 && chiShow===false" class="link" :to="{name:'content',params:{setList:this.setList1}}" >
            <el-button  class="button" @click="choose('children')"  type="primary">使用设置 </el-button>
        </router-link>
        <el-button v-show="chiShow"  class="button" @click="choose('close')"  type="primary">关闭按钮 </el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        choShow:true,/* 控制按钮显示 */
        setList1:this.$props.setList,/* 题目列表 */
        chiShow:false,/* 显示路由 */
        defSetList:[
            {ansType:1,textarea:'默认测试题，随意选择即可'},
            {ansType:1,textarea:'宇宙是深邃瞳孔装进漫天星河。'},
            {ansType:1,textarea:'对着黄昏许愿，玫瑰永不凋零。'},
            {ansType:1,textarea:'云朵偷喝了我放在屋顶的酒，于是她脸红变成了晚霞。'},
            {ansType:1,textarea:'我熬落霞一壶,饮星月一盅,披风雪一裳,织山川一卷。'},
            {ansType:1,textarea:'你且听这荒唐春秋走来一步步，你且听这风浪永远二十赶朝暮。'},
            {ansType:1,textarea:'择一处清幽，斟一盏芳茗，看天高云淡，听风声涛声。'},
            {ansType:1,textarea:'浮生不在，茶语清香，注一湾水，取一瓢茶，入壶、出汤、浓稠甜蜜。观而赏其妙，闻而悦其香。'},
            {ansType:1,textarea:'你的努力里，藏着你的幸运，你付出多少努力，就会收获多少幸运。'},
            {ansType:1,textarea:'梦想不会逃跑，会逃跑的永远都是自己。'},
            {ansType:1,textarea:'松花酿酒，春水煎茶。'},
            {ansType:1,textarea:'总有人间一两风，填我十万八千梦。'},
            {ansType:2,textarea:'输入框内可以随意输入，然后点击确定'},
        ]/* 默认测试题 */
      };
    },
    props:['setList'],
    methods: {
        choose(val){
            switch (val) {
                case 'set': this.$router.push('/set'); break;   /* 跳转到设置页面 */
                case 'children': this.chiShow=true; break;      /* 控制使用默认/使用设置按钮显示*/ 
                case 'close': this.choShow=false;  break;       /*关闭按钮显示*/ 
            }

/*             if (val===true) {            
                // this.choShow=false 
                console.log(this.setList1)
                
            }else if(val===false){
                this.$router.push('/set')
           } */
        }
    },
  }
</script>

<style scoped>

    .home{
        
        width: 100%;
        height: 100%;
        background-image: linear-gradient(rgb(0, 100, 214),rgb(5, 13, 61));
    }
    .choose{
        width: 100%;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .upload-demo{
        display: flex;
        flex-direction: column;
        
    }
    .button{
        width: 100px;
        height: 50px;
        border-radius: 5px;
        font-size: 10px;
        margin-left: 0;
        margin-bottom: 10px;
    }
    .link{
        color: rgb(255, 255, 255);
        text-decoration: none;
    }
</style>
