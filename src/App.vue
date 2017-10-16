<template>
  <div id="app">
    <head-top></head-top>

      <transition name="animate"><router-view class="content" ></router-view></transition>

    <foot-end></foot-end>
  </div>
</template>

<script>
  import HeadTop from './components/HeadTop'
  import FootEnd from './components/Footer'
  import '../static/style.css'
export default {
  components:{HeadTop,FootEnd}
}
</script>

<style>
  /**{padding: 0;margin: 0;}*/
  /*ul{list-style: none;}*/
/*.content{transition: 0.3s; position: fixed;width: 100%; top:89px; bottom: 50px;overflow-y:auto;}*/
/*.animate-enter{transform: translate(100%,0);opacity: 0;}*/
/*.animate-leave-active{transform: translate(-100%,0);opacity: 0;}*/
  /*.router-link-exact-active.router-link-active{color: #42b983;}*/
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
/*}*/
</style>
