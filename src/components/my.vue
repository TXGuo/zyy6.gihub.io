<template>
    <div>
        <img src="../assets/logo.png">
        <p>my my my my my my my my my my my my my my my</p>
        <Footer></Footer>
    </div>
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
        z-index:2;
        border-top:1px solid #ccc;
    }
    .footer li{
        float:left;
        width:25%;
        text-align:center;
    }
</style>
<script>
    import Footer from './footer.vue'
    export default{
        data(){
         return {}

         },
        components:{
            Footer
        }
    }
</script>