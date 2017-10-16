<template>
  <div class="new">
    <div class="header2">
      <span><img src="../assets/image/back.png" @click="back"></span>
      <div class="top2">旅游攻略</div>
    </div>
    <div class="tit">旅游攻略（1000条）</div>
    <div class="page-loadmore">
      <mt-loadmore  :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="kc_part">
          <router-link v-for="(aa,index) in kc" :to="{name:'Article',params:{kc,index}}">
            <li v-if="index<num"><p class="gongluep">{{aa.tit}}</p></li>
          </router-link>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>

<style>
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        kc:[
          {tit:' 大家好，给大家介绍一下，这是“指南村银杏”',text:'&nbsp&nbsp&nbsp&nbsp除却银杏树，指南村已经名声在外。它被青山环绕，一垅垅梯田在村子里形成一道又一道美丽的风景，而这里的银杏，更是其中最美的一条风景线。<br/>&nbsp&nbsp&nbsp&nbsp它距离杭州仅80公里，整座村子古朴而原始，粉墙黛瓦的古民居，高高的马头墙、以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。<br/>&nbsp&nbsp&nbsp&nbsp它距离杭州仅80公里，整座村子古朴而原始，粉墙黛瓦的古民居，高高的马头墙、以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。<br/>&nbsp&nbsp&nbsp&nbsp最佳观赏时间：10月底-11月<br/>&nbsp&nbsp&nbsp&nbsp自驾攻略：在杭州西站坐k598到临安新车站下车，转乘2、3路到西墅街站下车，再开往太湖源白沙的公交车，在溪口的“和润世家酒店”下车，步行走过一座桥往右转上山可达。<br/>&nbsp&nbsp&nbsp&nbsp地址：杭州市临安东天目山麓'},
          {tit:'大家好，给大家介绍一下，这是富阳杨家古村银杏 ',text:'&nbsp&nbsp&nbsp&nbsp富阳杨家古村银杏<br/>&nbsp&nbsp&nbsp&nbsp富阳杨家村地处富阳、临安、桐庐的交界处，每年到11月中旬，方圆数公里数千株银杏叶满山遍野泛黄，形成了一道银杏长廊，田园间都是丰收的颜色。<br/>&nbsp&nbsp&nbsp&nbsp这片地方知道的人不多，但它融合了江南水乡的温柔，连金色那么张扬的颜色在这里也变得楚楚动人，宛若待字闺中的小姐，等待着发现它美的人。<br/>&nbsp&nbsp&nbsp&nbsp最佳观赏时间：11月<br/>&nbsp&nbsp&nbsp&nbsp自驾攻略：自驾可从富阳城区沿S305往西开，至胥口镇再沿胥高线往北开，至万市镇再沿万牧线往西开半个小时左右即到。<br/>&nbsp&nbsp&nbsp&nbsp地址：杭州市富阳区万市乡杨家村 '},
          {tit:' 大家好，给大家介绍一下，这是“指南村银杏”',text:'&nbsp&nbsp&nbsp&nbsp除却银杏树，指南村已经名声在外。它被青山环绕，一垅垅梯田在村子里形成一道又一道美丽的风景，而这里的银杏，更是其中最美的一条风景线。<br/>&nbsp&nbsp&nbsp&nbsp它距离杭州仅80公里，整座村子古朴而原始，粉墙黛瓦的古民居，高高的马头墙、以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。<br/>&nbsp&nbsp&nbsp&nbsp它距离杭州仅80公里，整座村子古朴而原始，粉墙黛瓦的古民居，高高的马头墙、以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。<br/>&nbsp&nbsp&nbsp&nbsp最佳观赏时间：10月底-11月<br/>&nbsp&nbsp&nbsp&nbsp自驾攻略：在杭州西站坐k598到临安新车站下车，转乘2、3路到西墅街站下车，再开往太湖源白沙的公交车，在溪口的“和润世家酒店”下车，步行走过一座桥往右转上山可达。<br/>&nbsp&nbsp&nbsp&nbsp地址：杭州市临安东天目山麓'},
          {tit:'大家好，给大家介绍一下，这是富阳杨家古村银杏 ',text:'&nbsp&nbsp&nbsp&nbsp富阳杨家古村银杏<br/>&nbsp&nbsp&nbsp&nbsp富阳杨家村地处富阳、临安、桐庐的交界处，每年到11月中旬，方圆数公里数千株银杏叶满山遍野泛黄，形成了一道银杏长廊，田园间都是丰收的颜色。<br/>&nbsp&nbsp&nbsp&nbsp这片地方知道的人不多，但它融合了江南水乡的温柔，连金色那么张扬的颜色在这里也变得楚楚动人，宛若待字闺中的小姐，等待着发现它美的人。<br/>&nbsp&nbsp&nbsp&nbsp最佳观赏时间：11月<br/>&nbsp&nbsp&nbsp&nbsp自驾攻略：自驾可从富阳城区沿S305往西开，至胥口镇再沿胥高线往北开，至万市镇再沿万牧线往西开半个小时左右即到。<br/>&nbsp&nbsp&nbsp&nbsp地址：杭州市富阳区万市乡杨家村 '},
          {tit:' 大家好，给大家介绍一下，这是“指南村银杏”',text:'&nbsp&nbsp&nbsp&nbsp除却银杏树，指南村已经名声在外。它被青山环绕，一垅垅梯田在村子里形成一道又一道美丽的风景，而这里的银杏，更是其中最美的一条风景线。<br/>&nbsp&nbsp&nbsp&nbsp它距离杭州仅80公里，整座村子古朴而原始，粉墙黛瓦的古民居，高高的马头墙、以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。<br/>&nbsp&nbsp&nbsp&nbsp它距离杭州仅80公里，整座村子古朴而原始，粉墙黛瓦的古民居，高高的马头墙、以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。<br/>&nbsp&nbsp&nbsp&nbsp最佳观赏时间：10月底-11月<br/>&nbsp&nbsp&nbsp&nbsp自驾攻略：在杭州西站坐k598到临安新车站下车，转乘2、3路到西墅街站下车，再开往太湖源白沙的公交车，在溪口的“和润世家酒店”下车，步行走过一座桥往右转上山可达。<br/>&nbsp&nbsp&nbsp&nbsp地址：杭州市临安东天目山麓'},
          {tit:'大家好，给大家介绍一下，这是富阳杨家古村银杏 ',text:'&nbsp&nbsp&nbsp&nbsp富阳杨家古村银杏<br/>&nbsp&nbsp&nbsp&nbsp富阳杨家村地处富阳、临安、桐庐的交界处，每年到11月中旬，方圆数公里数千株银杏叶满山遍野泛黄，形成了一道银杏长廊，田园间都是丰收的颜色。<br/>&nbsp&nbsp&nbsp&nbsp这片地方知道的人不多，但它融合了江南水乡的温柔，连金色那么张扬的颜色在这里也变得楚楚动人，宛若待字闺中的小姐，等待着发现它美的人。<br/>&nbsp&nbsp&nbsp&nbsp最佳观赏时间：11月<br/>&nbsp&nbsp&nbsp&nbsp自驾攻略：自驾可从富阳城区沿S305往西开，至胥口镇再沿胥高线往北开，至万市镇再沿万牧线往西开半个小时左右即到。<br/>&nbsp&nbsp&nbsp&nbsp地址：杭州市富阳区万市乡杨家村 '},
          {tit:' 大家好，给大家介绍一下，这是“指南村银杏”',text:'&nbsp&nbsp&nbsp&nbsp除却银杏树，指南村已经名声在外。它被青山环绕，一垅垅梯田在村子里形成一道又一道美丽的风景，而这里的银杏，更是其中最美的一条风景线。<br/>&nbsp&nbsp&nbsp&nbsp它距离杭州仅80公里，整座村子古朴而原始，粉墙黛瓦的古民居，高高的马头墙、以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。<br/>&nbsp&nbsp&nbsp&nbsp它距离杭州仅80公里，整座村子古朴而原始，粉墙黛瓦的古民居，高高的马头墙、以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。<br/>&nbsp&nbsp&nbsp&nbsp最佳观赏时间：10月底-11月<br/>&nbsp&nbsp&nbsp&nbsp自驾攻略：在杭州西站坐k598到临安新车站下车，转乘2、3路到西墅街站下车，再开往太湖源白沙的公交车，在溪口的“和润世家酒店”下车，步行走过一座桥往右转上山可达。<br/>&nbsp&nbsp&nbsp&nbsp地址：杭州市临安东天目山麓'},
          {tit:'大家好，给大家介绍一下，这是富阳杨家古村银杏 ',text:'&nbsp&nbsp&nbsp&nbsp富阳杨家古村银杏<br/>&nbsp&nbsp&nbsp&nbsp富阳杨家村地处富阳、临安、桐庐的交界处，每年到11月中旬，方圆数公里数千株银杏叶满山遍野泛黄，形成了一道银杏长廊，田园间都是丰收的颜色。<br/>&nbsp&nbsp&nbsp&nbsp这片地方知道的人不多，但它融合了江南水乡的温柔，连金色那么张扬的颜色在这里也变得楚楚动人，宛若待字闺中的小姐，等待着发现它美的人。<br/>&nbsp&nbsp&nbsp&nbsp最佳观赏时间：11月<br/>&nbsp&nbsp&nbsp&nbsp自驾攻略：自驾可从富阳城区沿S305往西开，至胥口镇再沿胥高线往北开，至万市镇再沿万牧线往西开半个小时左右即到。<br/>&nbsp&nbsp&nbsp&nbsp地址：杭州市富阳区万市乡杨家村 '},
          {tit:' 大家好，给大家介绍一下，这是“指南村银杏”',text:'&nbsp&nbsp&nbsp&nbsp除却银杏树，指南村已经名声在外。它被青山环绕，一垅垅梯田在村子里形成一道又一道美丽的风景，而这里的银杏，更是其中最美的一条风景线。<br/>&nbsp&nbsp&nbsp&nbsp它距离杭州仅80公里，整座村子古朴而原始，粉墙黛瓦的古民居，高高的马头墙、以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。<br/>&nbsp&nbsp&nbsp&nbsp它距离杭州仅80公里，整座村子古朴而原始，粉墙黛瓦的古民居，高高的马头墙、以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。<br/>&nbsp&nbsp&nbsp&nbsp最佳观赏时间：10月底-11月<br/>&nbsp&nbsp&nbsp&nbsp自驾攻略：在杭州西站坐k598到临安新车站下车，转乘2、3路到西墅街站下车，再开往太湖源白沙的公交车，在溪口的“和润世家酒店”下车，步行走过一座桥往右转上山可达。<br/>&nbsp&nbsp&nbsp&nbsp地址：杭州市临安东天目山麓'},
          {tit:'大家好，给大家介绍一下，这是富阳杨家古村银杏 ',text:'&nbsp&nbsp&nbsp&nbsp富阳杨家古村银杏<br/>&nbsp&nbsp&nbsp&nbsp富阳杨家村地处富阳、临安、桐庐的交界处，每年到11月中旬，方圆数公里数千株银杏叶满山遍野泛黄，形成了一道银杏长廊，田园间都是丰收的颜色。<br/>&nbsp&nbsp&nbsp&nbsp这片地方知道的人不多，但它融合了江南水乡的温柔，连金色那么张扬的颜色在这里也变得楚楚动人，宛若待字闺中的小姐，等待着发现它美的人。<br/>&nbsp&nbsp&nbsp&nbsp最佳观赏时间：11月<br/>&nbsp&nbsp&nbsp&nbsp自驾攻略：自驾可从富阳城区沿S305往西开，至胥口镇再沿胥高线往北开，至万市镇再沿万牧线往西开半个小时左右即到。<br/>&nbsp&nbsp&nbsp&nbsp地址：杭州市富阳区万市乡杨家村 '},
          {tit:' 大家好，给大家介绍一下，这是“指南村银杏”',text:'&nbsp&nbsp&nbsp&nbsp除却银杏树，指南村已经名声在外。它被青山环绕，一垅垅梯田在村子里形成一道又一道美丽的风景，而这里的银杏，更是其中最美的一条风景线。<br/>&nbsp&nbsp&nbsp&nbsp它距离杭州仅80公里，整座村子古朴而原始，粉墙黛瓦的古民居，高高的马头墙、以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。<br/>&nbsp&nbsp&nbsp&nbsp它距离杭州仅80公里，整座村子古朴而原始，粉墙黛瓦的古民居，高高的马头墙、以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。<br/>&nbsp&nbsp&nbsp&nbsp最佳观赏时间：10月底-11月<br/>&nbsp&nbsp&nbsp&nbsp自驾攻略：在杭州西站坐k598到临安新车站下车，转乘2、3路到西墅街站下车，再开往太湖源白沙的公交车，在溪口的“和润世家酒店”下车，步行走过一座桥往右转上山可达。<br/>&nbsp&nbsp&nbsp&nbsp地址：杭州市临安东天目山麓'},
          {tit:'大家好，给大家介绍一下，这是富阳杨家古村银杏 ',text:'&nbsp&nbsp&nbsp&nbsp富阳杨家古村银杏<br/>&nbsp&nbsp&nbsp&nbsp富阳杨家村地处富阳、临安、桐庐的交界处，每年到11月中旬，方圆数公里数千株银杏叶满山遍野泛黄，形成了一道银杏长廊，田园间都是丰收的颜色。<br/>&nbsp&nbsp&nbsp&nbsp这片地方知道的人不多，但它融合了江南水乡的温柔，连金色那么张扬的颜色在这里也变得楚楚动人，宛若待字闺中的小姐，等待着发现它美的人。<br/>&nbsp&nbsp&nbsp&nbsp最佳观赏时间：11月<br/>&nbsp&nbsp&nbsp&nbsp自驾攻略：自驾可从富阳城区沿S305往西开，至胥口镇再沿胥高线往北开，至万市镇再沿万牧线往西开半个小时左右即到。<br/>&nbsp&nbsp&nbsp&nbsp地址：杭州市富阳区万市乡杨家村 '},
          {tit:' 大家好，给大家介绍一下，这是“指南村银杏”',text:'&nbsp&nbsp&nbsp&nbsp除却银杏树，指南村已经名声在外。它被青山环绕，一垅垅梯田在村子里形成一道又一道美丽的风景，而这里的银杏，更是其中最美的一条风景线。<br/>&nbsp&nbsp&nbsp&nbsp它距离杭州仅80公里，整座村子古朴而原始，粉墙黛瓦的古民居，高高的马头墙、以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。<br/>&nbsp&nbsp&nbsp&nbsp它距离杭州仅80公里，整座村子古朴而原始，粉墙黛瓦的古民居，高高的马头墙、以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。<br/>&nbsp&nbsp&nbsp&nbsp最佳观赏时间：10月底-11月<br/>&nbsp&nbsp&nbsp&nbsp自驾攻略：在杭州西站坐k598到临安新车站下车，转乘2、3路到西墅街站下车，再开往太湖源白沙的公交车，在溪口的“和润世家酒店”下车，步行走过一座桥往右转上山可达。<br/>&nbsp&nbsp&nbsp&nbsp地址：杭州市临安东天目山麓'},
          {tit:'大家好，给大家介绍一下，这是富阳杨家古村银杏 ',text:'&nbsp&nbsp&nbsp&nbsp富阳杨家古村银杏<br/>&nbsp&nbsp&nbsp&nbsp富阳杨家村地处富阳、临安、桐庐的交界处，每年到11月中旬，方圆数公里数千株银杏叶满山遍野泛黄，形成了一道银杏长廊，田园间都是丰收的颜色。<br/>&nbsp&nbsp&nbsp&nbsp这片地方知道的人不多，但它融合了江南水乡的温柔，连金色那么张扬的颜色在这里也变得楚楚动人，宛若待字闺中的小姐，等待着发现它美的人。<br/>&nbsp&nbsp&nbsp&nbsp最佳观赏时间：11月<br/>&nbsp&nbsp&nbsp&nbsp自驾攻略：自驾可从富阳城区沿S305往西开，至胥口镇再沿胥高线往北开，至万市镇再沿万牧线往西开半个小时左右即到。<br/>&nbsp&nbsp&nbsp&nbsp地址：杭州市富阳区万市乡杨家村 '}
        ],
        num:14,
        allLoaded: false,
        bottomStatus: '',
        time:''
      };
    },
    methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        clearTimeout(this.time)
        this.time=setTimeout(() => {
          if (this.num < 1000) {
            this.num=this.num+14;
            for (let i = 0; i <14; i++) {
              this.kc.push(this.kc[i]);
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 200);
      },
      back(){
        this.$router.go(-1)
      }
    }
  };
  </script>
