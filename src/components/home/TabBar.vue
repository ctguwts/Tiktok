<template>
    <div class="tab_bar">
        <div class="item" @click="changeTab(0)">
            <router-link to="/index" tag="span" :class="tabIndex==0?'active':''">首页</router-link>
        </div>
        <div class="item" @click="changeTab(1)">
            <router-link to="/follow" tag="span" :class="tabIndex==1?'active':''">熟人</router-link>
        </div>
        <div class="item" @click="changeTab(2)">
            <span :class="tabIndex==2?'active':''">
            <img class="add_button" src="../../static/img/add_button.png">
            </span>
        </div>
        <div class="item" @click="changeTab(3)">
            <span :class="tabIndex==3?'active':''">消息</span>
        </div>
        <div class="item" @click="changeTab(4)">
            <span :class="tabIndex==4?'active':''">我</span>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                tabIndex:0
            }
        },
        methods:{
            changeTab(index){
                this.tabIndex = index
                console.log(this.tabIndex)
            }
        }
    }
</script>

<style scoped>
    .tab_bar{
        height: 50px;
        line-height: 50px;
        width: 100%;
        background: #000;
        position: fixed;
        bottom: 0;
        left: 0;
        color: #cccccc;
        font-size: 16px;
        display: flex;
        justify-items: center;
    }
    .tab_bar .item{
        flex:1;
        text-align: center;
    }
    .tab_bar .item .active{
        color: #ffffff;
    }
    .tab_bar .item span{
        padding: 10px;
    }
    .tab_bar .item .add_button{
        width: 50px;
        height: 34px;
        padding: 8px;
    }
</style>
