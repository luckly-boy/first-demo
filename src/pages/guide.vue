<template>
  <div>
    <div class="titzhinan"><div class="greendiv"></div>热门旅行社</div>
    <el-collapse v-model="activeNames" >
      <el-collapse-item title="内蒙古中奥旅行社" name="1">
        <ul class="kc_part">
          <li v-for="i in guide" class="guide">
            <div class="left"><img :src="i.img"></div>
            <div class="right">
              <div class="name">
                <b>{{i.name}}</b>
                <span class="bg">{{i.dengji}}</span>
                <span class="addres"><img src="../assets/image/icon_addres.png">{{i.ad}}</span>
              </div>
              <div class="server">
                <span>服务人数：<b class="green">{{i.num1}}</b></span>
                <span>行程设计：<b class="green">{{i.num2}}</b></span>
              </div>
              <p>精通业务：{{i.yewu}}</p>
            </div>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="内蒙古华联旅行社" name="2">
        <ul class="kc_part">
          <li v-for="i in guide" class="guide">
            <div class="left"><img :src="i.img"></div>
            <div class="right">
              <div class="name">
                <b>{{i.name}}</b>
                <span class="bg">{{i.dengji}}</span>
                <span class="addres"><img src="../assets/image/icon_addres.png">{{i.ad}}</span>
              </div>
              <div class="server">
                <span>服务人数：<b class="green">{{i.num1}}</b></span>
                <span>行程设计：<b class="green">{{i.num2}}</b></span>
              </div>
              <p>精通业务：{{i.yewu}}</p>
            </div>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="北京市中国旅行社有限公司" name="3">
        <ul class="kc_part">
          <li v-for="i in guide" class="guide">
            <div class="left"><img :src="i.img"></div>
            <div class="right">
              <div class="name">
                <b>{{i.name}}</b>
                <span class="bg">{{i.dengji}}</span>
                <span class="addres"><img src="../assets/image/icon_addres.png">{{i.ad}}</span>
              </div>
              <div class="server">
                <span>服务人数：<b class="green">{{i.num1}}</b></span>
                <span>行程设计：<b class="green">{{i.num2}}</b></span>
              </div>
              <p>精通业务：{{i.yewu}}</p>
            </div>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="新疆中国旅行社有限公司" name="4">
        <ul class="kc_part">
          <li v-for="i in guide" class="guide">
            <div class="left"><img :src="i.img"></div>
            <div class="right">
              <div class="name">
                <b>{{i.name}}</b>
                <span class="bg">{{i.dengji}}</span>
                <span class="addres"><img src="../assets/image/icon_addres.png">{{i.ad}}</span>
              </div>
              <div class="server">
                <span>服务人数：<b class="green">{{i.num1}}</b></span>
                <span>行程设计：<b class="green">{{i.num2}}</b></span>
              </div>
              <p>精通业务：{{i.yewu}}</p>
            </div>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="中国国旅山东国际旅行社" name="5">
        <ul class="kc_part">
          <li v-for="i in guide" class="guide">
            <div class="left"><img :src="i.img"></div>
            <div class="right">
              <div class="name">
                <b>{{i.name}}</b>
                <span class="bg">{{i.dengji}}</span>
                <span class="addres"><img src="../assets/image/icon_addres.png">{{i.ad}}</span>
              </div>
              <div class="server">
                <span>服务人数：<b class="green">{{i.num1}}</b></span>
                <span>行程设计：<b class="green">{{i.num2}}</b></span>
              </div>
              <p>精通业务：{{i.yewu}}</p>
            </div>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="中国妇女旅行社北京紫竹桥营业部" name="6">
        <ul class="kc_part">
          <li v-for="i in guide" class="guide">
            <div class="left"><img :src="i.img"></div>
            <div class="right">
              <div class="name">
                <b>{{i.name}}</b>
                <span class="bg">{{i.dengji}}</span>
                <span class="addres"><img src="../assets/image/icon_addres.png">{{i.ad}}</span>
              </div>
              <div class="server">
                <span>服务人数：<b class="green">{{i.num1}}</b></span>
                <span>行程设计：<b class="green">{{i.num2}}</b></span>
              </div>
              <p>精通业务：{{i.yewu}}</p>
            </div>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="桂林康辉国际旅行社有限公司" name="7">
        <ul class="kc_part">
          <li v-for="i in guide" class="guide">
            <div class="left"><img :src="i.img"></div>
            <div class="right">
              <div class="name">
                <b>{{i.name}}</b>
                <span class="bg">{{i.dengji}}</span>
                <span class="addres"><img src="../assets/image/icon_addres.png">{{i.ad}}</span>
              </div>
              <div class="server">
                <span>服务人数：<b class="green">{{i.num1}}</b></span>
                <span>行程设计：<b class="green">{{i.num2}}</b></span>
              </div>
              <p>精通业务：{{i.yewu}}</p>
            </div>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="山西友谊国际旅行社有限公司" name="8">
        <ul class="kc_part">
          <li v-for="i in guide" class="guide">
            <div class="left"><img :src="i.img"></div>
            <div class="right">
              <div class="name">
                <b>{{i.name}}</b>
                <span class="bg">{{i.dengji}}</span>
                <span class="addres"><img src="../assets/image/icon_addres.png">{{i.ad}}</span>
              </div>
              <div class="server">
                <span>服务人数：<b class="green">{{i.num1}}</b></span>
                <span>行程设计：<b class="green">{{i.num2}}</b></span>
              </div>
              <p>精通业务：{{i.yewu}}</p>
            </div>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="青岛亚太国际旅行社有限公司" name="9">
        <ul class="kc_part">
          <li v-for="i in guide" class="guide">
            <div class="left"><img :src="i.img"></div>
            <div class="right">
              <div class="name">
                <b>{{i.name}}</b>
                <span class="bg">{{i.dengji}}</span>
                <span class="addres"><img src="../assets/image/icon_addres.png">{{i.ad}}</span>
              </div>
              <div class="server">
                <span>服务人数：<b class="green">{{i.num1}}</b></span>
                <span>行程设计：<b class="green">{{i.num2}}</b></span>
              </div>
              <p>精通业务：{{i.yewu}}</p>
            </div>
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        guide:[
          {img:require('../assets/image/g1.png'),name:'吕典典',dengji:'中级导游',ad:'杭州',num1:'3034',num2:'202',yewu:'杭州周边旅游、公司出游、小团队旅游'},
          {img:require('../assets/image/g2.png'),name:'路齐',dengji:'新晋导游',ad:'宁波',num1:'4214',num2:'321',yewu:'在旅行社从事组团计调多年，精通华东线路及其他热门目的地'},
          {img:require('../assets/image/g3.png'),name:'谢昌淑',dengji:'新晋导游',ad:'杭州',num1:'5223',num2:'323',yewu:'以高效率周到的服务为宗旨热情接待团体散客旅游等旅游相关业务。'},
          {img:require('../assets/image/g4.png'),name:'廖方平',dengji:'新晋导游',ad:'杭州',num1:'4123',num2:'122',yewu:'专做杭州周边及本地旅游，乡村旅游！'},
          {img:require('../assets/image/g5.png'),name:'钱建波',dengji:'中级导游',ad:'杭州',num1:'2233',num2:'321',yewu:'擅长为个人、公司、家庭定制个性化旅游服务'}
          ]
      };
    },
    methods:{
      back(){
        this.$router.go(-1);
      }
    }
  }
</script>
<style>
</style>
