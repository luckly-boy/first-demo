<template>
  <div class="footer">
    <router-link :to="{path:'/form'}"><span><img src="../assets/image/tab_iocn_62.png">在线报名</span></router-link>
    <span @click="tell"><img src="../assets/image/tab_iocn_64.png">电话咨询</span>
    <router-link :to="{path:'/tousu'}"><span><img src="../assets/image/tab_iocn_66.png">投诉反馈</span> </router-link>
  </div>
</template>
<script>
  import { MessageBox } from 'mint-ui'
  export default{
    data(){
      return{
        num:"0826-12345678"
      }
    },

    methods:{
      tell(){
        MessageBox({
          title: '提示',
          message: '确定执行此操作?',
          showCancelButton: true
        });
        MessageBox.alert(this.num).then(action => {

        });
      }
    }
  }


</script>
<style>
  /*.mint-loadmore-bottom span { display: inline-block; -webkit-transition: .2s linear;  transition: .2s linear;  vertical-align: middle  }*/
  /*.kc_part li{ display: flex; padding: 8px; margin: 10px 0;border-bottom: 1px solid #cccccc}*/
  /*.kc_part li img{ display: inline-block; margin-right: 14px; border: 1px solid #ccc}*/
  /*.kc_part li .text{ text-align: left; font-size: 12px; line-height: 20px}*/
  /*.kc_part li h3{ margin-bottom: 8px; font-size: 16px; margin-top: 6px}*/
  /*.kc_part li p{  display: -webkit-box;  -webkit-line-clamp: 3;  -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;}*/
  /*.new{position: fixed;width: 100%; top:0px; bottom: 50px;overflow-y:auto;z-index: 999;background-color: #fff}*/
  /*.header2{background-color: #00bf49;width: 100%; height: 44px;display: flex;*/
    /*align-items: center; text-align: center;color: #ffffff;font-size: 18px;}*/
  /*.top2{margin: 0 auto;}*/
  /*.header2 img{width: 22px;}*/
  /*.mint-msgbox-confirm{background-color: #42b983;color: #fff;}*/
  /*.footer a{color: #fff}*/
  /*.footer .router-link-active span{color: #fff}*/
</style>
