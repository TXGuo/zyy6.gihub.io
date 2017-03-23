<template>
  <div>
  <div id="banner">
    <div class="headerSlider" v-if="bannerList.length">
      <swiper :options="swiperOption" ref="mySwiperA" class="swiper-wrapper">
        <!-- 幻灯内容 -->
        <swiper-slide class="banner" v-for="item in bannerList">
          <img :src="item.image" />
        </swiper-slide>
        <!-- ... -->
        <!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>

  </div>
</template>
<script>
  import Vue from 'vue'
  import VueAwesomeSwiper from 'vue-awesome-swiper';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  Vue.use(VueAwesomeSwiper);
////  Vue.use(VueRouter);
//  const router = new VueRouter({
//    routes: [
//      { path: '/my', component: My },
//      { path: '/download', component:Download },
//      { path: '/mall', component:Mall }
//    ]
//  });
//
//  new Vue({ router:router }).$mount('#footer');
  export default{
    data() {
    return {
      bannerList:[],
      swiperOption: {
        // 所有配置均为可选（同Swiper配置）
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象（假如你需要使用获取swiper对象来做什么事，那么这个属性一定要是true）
        notNextTick: true,
        autoplay:3000,
        direction : 'horizontal',
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        mousewheelControl : true,
        observeParents:true,
        // if you need use plugins in the swiper, you can config in here like this
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
    // more Swiper config ...
    // ...
  }
    }
    },
   created(){
    this.getBanner();
   },
  mounted(){
  },
    methods:{
      getBanner()
      {
        this.$http.get('../../../static/data.json').then(
          function (data) {
            this.bannerList = data.body.banner
          },
          function () {

          }
        )
       }
      },
    components: {
            swiper,
            swiperSlide
       }
  }
</script>
<style scoped>
  .headerSlider {
    width: 100%;
    height: 9rem;
  }
  .headerSlider .swiper-wrapper {
  width:100%;
  height:100%;
}
  .swiper-slide img {
    display: block;
    width: 100%;
  }
</style>
