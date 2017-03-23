<template>
    <div>
    <dl v-for="item in list" class="list">
        <dt>
            <img :src="item.img" />
        </dt>
        <dd>
            <span class="fl txt">{{item.txt}}</span>
            <span class="fr price">{{item.price | money}}</span>
        </dd>
    </dl>
    </div>
</template>
<script>
    export default{
        data(){
         return{

         }
        },
        props:{
            list:{
                type:Array,
                default:[]
            }
        },
        filters:{
            money(value){
                return '￥'+value+'起'
            }
        }
    }
</script>
<style scoped>
    .list{
        width:100%;
        height:auto;
        overflow:hidden;
    }
    .list dt{
        width:100%;
        height:9rem;
        overflow:hidden;
    }
    .list dt img{
        width:100%;
        height:auto;
        display:block;
    }
    .list dd{
        width:100%;
        height:2rem;
        line-height:2rem;
        box-sizing:border-box;
        padding:0 0.5rem;
    }
    .price{
        color:red;
        font-size:1.1rem;
    }
</style>