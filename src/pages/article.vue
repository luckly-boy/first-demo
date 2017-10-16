<template>
  <div class="new article">
    <div class="header2">
      <span><img src="../assets/image/back.png" @click="back"></span>
      <div class="top2">{{$route.params.kc[$route.params.index].tit}}</div>
    </div>
    <h2>{{$route.params.kc[$route.params.index].tit}}<p>2017-10-10</p></h2>
    <p v-html="$route.params.kc[$route.params.index].text"></p>
    <div class="end">
      <p @click="getup">上一篇:{{title1}}</p>
      <p @click="getdown">下一篇:{{title2}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        content1:'',
        content1:'',
        title1:'',
        title2:'',
        index:''
      }
    },
    methods:{
      back(){
        this.$router.go(-1);
      },
      gettit(){
        if(this.$route.params.index==0){
          this.title1='没有啦'
        }else{
          this.title1=this.$route.params.kc[this.$route.params.index-1].tit
        }
        if(this.$route.params.index==this.$route.params.kc.length-1){
          this.title2='没有啦'
        }else{
          this.title2=this.$route.params.kc[this.$route.params.index+1].tit
        }
      },
      getup(){
        if(this.$route.params.index==0){
          this.$route.params.index=0;
        }else{
          this.$route.params.index=this.$route.params.index-1;
          this.gettit();
        }
      },
      getdown(){
        if(this.$route.params.index==this.$route.params.kc.length-1){
          this.$route.params.index=this.$route.params.kc.length-1;
        }else{
          this.$route.params.index=this.$route.params.index+1;
          this.gettit();
        }
      }
    },
    mounted(){
      this.gettit();
    }

  }
</script>
<style>
</style>
