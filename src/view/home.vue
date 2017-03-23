<template>
  <div class="first" v-show="flag">
    <img src="../assets/logo.png">
    <banner></banner>
    <ul class="type">
      <li v-for="item in typeList">
        <img :src="item.img" />
        <span>{{item.type}}</span>
      </li>
    </ul>
    <Type :bigList="bigList"></Type>
    <Type :bigList="smallList"></Type>
    <div class="tuijian">
      <div class="title">
        <span class="fl icon"></span>
        <span class="fl">精彩推荐</span>
      </div>
      <List :list="filerNum"></List>
    </div>
    <div class="more" @click="more">点击加载更多</div>
  </div>
</template>

<script>
  import banner from '../components/banner/banner.vue';
  import Type from '../components/type.vue';
  import List from '../components/list.vue';
export default {
  name: 'app',
  data(){
    return{
      flag:false,
      typeList:[],
      bigList:[],
      smallList:[],
      list:[],
      num:2
    }
  },
  components:{
    banner,
    Type,
    List
  },
  created(){
    this.getType();
    this.getBig();
    this.getSmall();
    this.getList();
  },
  methods:{
    hide(){
      alert('1')
    },
    getType(){
    this.$http.get('../../../static/data.json').then(
      function(data){
        this.typeList=data.body.type;
        this.flag=true;
      },
      function(){

      }
    )
  },
  getBig(){
    this.$http.get('../../../static/data.json').then(
      function(data){
        this.bigList=data.body.big;
      },
      function(){

      }
    )
  },
  getSmall(){
    this.$http.get('../../../static/data.json').then(
      function(data){
        this.smallList=data.body.small;
      },
      function(){

      }
    )
  },
  more(){
    this.num=this.list.length;
  },
  getList(){
    this.$http.get('../../../static/data.json').then(
      function(data){
        this.list=data.body.list;
      },
      function(){

      }
    )
  }
  },
  computed:{
    filerNum(){
      return this.list.slice(0,this.num)
    }
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
  background:url(../../static/icon1.png) no-repeat;
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
    background:red;
    width:100%;
    z-index:3;
    height:200px;
  }
</style>
