<template>
    <ul class="type" :class="{'bigList':bigList.length==2,'smallList':bigList.length==3}">
        <li v-for="item in bigList">
            <img :src="item.img" />
        </li>
    </ul>
</template>
<script>
    export default{
        data(){
         return {

         }
        },
       props:{
           bigList:{
               type:Array,
               default: []
           }
       }
    }
</script>
<style scoped>
    .type{
        width:100%;
        height:auto;
        overflow:hidden;
        display: flex;
    }
    .type li{
        float:left;
        border-right:1px solid #ccc;
        overflow:hidden;
    }
    .type li:last-child{
        border-right:0;
    }
    .bigList li{
        width:50%;
    }
    .smallList li{
        flex:1
    }
</style>