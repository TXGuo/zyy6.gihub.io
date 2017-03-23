<template>
  <div id="app">
    <router-view class="two"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './components/footer.vue';
export default {
  name: 'app',
  data(){
    return{
    }
  },
  components:{
    Footer
  },
  created(){
  },
  methods:{
  },
  computed:{
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  #app img{ width:100%; height:auto; display:block;}

.type{
  width:100%;
  height:auto;
  overflow:hidden;
  background:#fff;
  margin-bottom:0.4rem;
}
.type li {
  height: 5.25rem;
  float: left;
  width:25%;
}
.tuijian{
  width:100%;
  margin-top:0.6rem;
  box-sizing:border-box;
  background: #fff;
}
.tuijian .title{
  width:100%;
  padding:0 0.5rem;
  box-sizing:border-box;
  height:2rem;
  line-height:2rem;
}
.icon{
  width:0.3rem;
  height:0.6rem;
  background:url(../static/icon1.png) no-repeat;
  background-size:100% 100%;
  padding-right:0.3rem;
  margin-top:0.7rem;
}
.more{
  padding-bottom:2rem;
}
.first{
  width:100%;
  height:auto;
  position:absolute;
  left:0;
  top:0;
}
  .two{
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background:#fff;
    width:100%;
    z-index:3;
    height:200px;
  }
</style>
