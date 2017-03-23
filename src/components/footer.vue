<template>
    <ul class="footer" id="footer">
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/my">我的</router-link></li>
        <li><router-link to="/download">下载</router-link></li>
        <li><router-link to="/mall">九休商城</router-link></li>
    </ul>
</template>
<style scoped>
    .footer{
        height:2rem;
        width:100%;
        background:#fff;
        color:#3e3e3e;
        line-height:2rem;
        position:fixed;
        bottom:0;
        left:0;
        z-index:99999;
        border-top:1px solid #ccc;
    }
    .footer li{
        float:left;
        width:25%;
        text-align:center;
    }
  .router-link-active{
    color:red;
  }
</style>
