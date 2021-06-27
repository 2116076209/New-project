<template>
    <div class="res">
        <div class="title">
            完成<br />
            <span>{{allSetCount}}/{{allSetCount}}</SPan>
        </div>
        <ul class="infinite-list" infinite-scroll-distance=1 v-infinite-scroll="load" >
            <li v-for="(i,coun) in comSetList1" :key="coun" class="infinite-list-item">
                <div class="setListShow">
                        <el-tooltip   class="item" effect="dark" :content=i.textarea placement="top">
                            <el-button>
                                <span>
                                    题目：{{i.textarea}}
                                </span>
                            </el-button>
                        </el-tooltip>
                    <div v-if="i.answer===true">回答：是</div>
                    <div v-if="i.answer===false">回答：否</div>
                    <div v-if="i.answer!==true && i.answer!==false">
                        <el-tooltip  class="item" effect="dark" :content=i.answer placement="top">
                            <el-button>
                                <span>
                                    回答：{{i.answer}}
                                </span>
                            </el-button>
                        </el-tooltip>
                    </div>
                </div>
            </li>
        </ul>
         手机端点击文字即可查看全部
    </div>
</template>

<script>
export default {
    data(){
        return{
            allSetCount: 0,
            comSetList1:'this.$props.comSetList'
        }
    },
    props:['comSetList'],
    methods:{
        load () {
            
        }
    },
    mounted(){
        this.comSetList1=this.$props.comSetList
        this.allSetCount=this.$props.comSetList.length
        console.log(this.$props.comSetList.length)
    },

}
</script>

<style scoped>
    .res{
        width: 100%;
        height:100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: rgb(60, 72, 231);
    }
    .title{
        display: flex;
        flex-direction: column;
        align-items: center;
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
    .infinite-list{
        padding: 0 0 0 0;
        height:50%;
        width: 80%;
        overflow:auto;
        
    }
    .infinite-list,li{
        list-style:none;
        
    }
    .setListShow{
        margin-top: 5px;
        width: 100%;
        background-color: cyan;
        border-radius: 5px;
    }
    .item{
        width: 100%;
    }
    .el-button span{
        overflow: hidden; 
        text-overflow:ellipsis;
        -o-text-overflow: ellipsis;
        white-space:nowrap;
        width: 100%;
        display:flex;
        background-color: cyan;
    }
    .el-button{
        margin: 0;
        padding: 0;
        border: none;
    }
    
    .el-button:after {
        border: none;
    }
</style>