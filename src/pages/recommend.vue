<template>
  <div>
    <div class="box">
    <div class="titzhinan"><div class="greendiv"></div>当季景点推荐</div>
      <swiper :options="swiperOption">
        <swiper-slide><p>南京夫子庙</p><img src="../assets/image/nj1.jpg"></swiper-slide>
        <swiper-slide><p>瓦特纳冰川国家公园</p><img src="../assets/image/bd1.jpg"></swiper-slide>
        <swiper-slide><p>杭州千岛湖</p><img src="../assets/image/hz2.jpg"></swiper-slide>
        <swiper-slide><p>东芭乐园</p><img src="../assets/image/tg1.jpg"></swiper-slide>
        <swiper-slide><p>阿波罗神殿中心广场</p><img src="../assets/image/ydl1.jpg"></swiper-slide>
        <swiper-slide><p>南京钟山</p><img src="../assets/image/nj3.jpg"></swiper-slide>
        <swiper-slide><p>玉龙雪山</p><img src="../assets/image/lj3.jpg"></swiper-slide>
        <swiper-slide><p>第六感拉姆度假村</p><img src="../assets/image/medf1.jpg"></swiper-slide>
      </swiper>
    </div>
    <div class="box">
      <div class="titzhinan"><div class="greendiv"></div>国内热门景点</div>
      <swiper :options="swiperOption">
        <swiper-slide><p>北京八达岭长城</p><img src="../assets/image/bj3.jpg"></swiper-slide>
        <swiper-slide><p>杭州宋城</p><img src="../assets/image/hz3.jpg"></swiper-slide>
        <swiper-slide><p>中山陵园风景区</p><img src="../assets/image/nj2.jpg"></swiper-slide>
        <swiper-slide><p>秦始皇兵马俑</p><img src="../assets/image/xa1.jpg"></swiper-slide>
        <swiper-slide><p>西安华清池</p><img src="../assets/image/xa2.jpg"></swiper-slide>
        <swiper-slide><p>云南丽江古城</p><img src="../assets/image/lj1.jpg"></swiper-slide>
        <swiper-slide><p>丽江泸沽湖</p><img src="../assets/image/lj2.jpg"></swiper-slide>
        <swiper-slide><p>上海外滩</p><img src="../assets/image/sh3.jpg"></swiper-slide>
      </swiper>
    </div>
    <div class="box" style="border: none;">
      <div class="titzhinan"><div class="greendiv"></div>境外热门景点</div>
      <swiper :options="swiperOption">
        <swiper-slide><p>歌舞伎町</p><img src="../assets/image/rb1.jpg"></swiper-slide>
        <swiper-slide><p>新加坡环球影城</p><img src="../assets/image/xjp1.jpg"></swiper-slide>
        <swiper-slide><p>瓦特纳冰川国家公园</p><img src="../assets/image/bd1.jpg"></swiper-slide>
        <swiper-slide><p>第六感拉姆度假村</p><img src="../assets/image/medf1.jpg"></swiper-slide>
        <swiper-slide><p>东芭乐园</p><img src="../assets/image/tg1.jpg"></swiper-slide>
        <swiper-slide><p>阿波罗神殿中心广场</p><img src="../assets/image/ydl1.jpg"></swiper-slide>
        <swiper-slide><p>歌舞伎町</p><img src="../assets/image/rb1.jpg"></swiper-slide>
        <swiper-slide><p>新加坡环球影城</p><img src="../assets/image/xjp1.jpg"></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  require('swiper/dist/css/swiper.css')
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 3,
          paginationClickable: true,
          spaceBetween: 30
        }
      }
    }
  }
</script>
<style>
</style>
