<template>
    <div class="top-bar">
            <div class="left">
                <span class="iconfont icon-live"></span>
            </div>

            <div  class="middle">
                <div class="item"><span>同城</span></div>
                <div class="item"><span>关注</span></div>
                <div class="item"><span>推荐</span></div>
            </div>

            <div class="right">
                <span class="iconfont icon-sousuo"></span>
            </div>
    </div>
</template>

<script>
    export default {
        name: "TopBar",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .top-bar{
        position: fixed;
        top: 0;
        left: 0;
        background: black;
        width: 100%;
        height: 50px;
        font-size: 18px;
        color: #cccccc;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        display: flex;
        box-sizing: border-box;
    }
    .left, .right{
        width: 20%;
    }
    .iconfont{
        font-size: 24px;
    }
    .middle{
        width: 60%;
        display: flex;
        justify-items: center;
    }
    .middle .item{
        flex:1;
        text-align:center;
    }
    .right{
        text-align: right;
    }
</style>
