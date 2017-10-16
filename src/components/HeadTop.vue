<template>
  <div class="header">
    <div class="top">心心旅游</div>
    <div class="nav">
      <span ><router-link :to="{path:'/'}"><div class="image"></div></router-link></span>
      <span><router-link :to="{path:'/recommend'}">推荐</router-link></span>
      <span><router-link :to="{path:'/attractions'}">景点</router-link></span>
      <span><router-link :to="{path:'/guide'}">导游</router-link></span>
      <span><router-link :to="{path:'/help'}">帮助</router-link></span>
      <span><router-link :to="{path:'/about'}">关于</router-link></span>
    </div>
  </div>
</template>
<script>
</script>
<style>
  /*a{color: #333333;text-decoration: none;}*/
  /*.header{position: fixed;width: 100%;}*/
  /*.top{background-color: #00bf49;width: 100%; height: 44px;display: flex;*/
    /*align-items: center; justify-content:center;text-align: center;color: #ffffff;font-size: 18px;}*/
  /*.nav{display: flex;justify-content: space-around;height: 44px; background-color: #fff;*/
    /*border-bottom: 1px solid #ccc;align-items: center;color: #333333;font-size: 16px;}*/
  /*.nav .image{background-image: url("../assets/image/home2.png");background-size:23px 22px;*/
    /*width: 23px; height: 22px;}*/
</style>
