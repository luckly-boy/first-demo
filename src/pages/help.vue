<template>
  <div>
    <div class="box">
    <div class="titzhinan"><div class="greendiv"></div>游客中心</div>
    <el-collapse v-model="activeName" accordion >
      <el-collapse-item title="旅游产品名称解释" name="1">
        <ul>
          <li class="help-tab" v-for="i in help1">
            <h4><img src="../assets/image/help.png"><span>{{i.tit}}</span></h4>
            <p>{{i.text}}</p>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="特色服务" name="2">
        <ul>
          <li class="help-tab" v-for="i in help1">
            <h4><img src="../assets/image/help.png"><span>{{i.tit}}</span></h4>
            <p>{{i.text}}</p>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="常见问题" name="3">
        <ul>
          <li class="help-tab" v-for="i in help1">
            <h4><img src="../assets/image/help.png"><span>{{i.tit}}</span></h4>
            <p>{{i.text}}</p>
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
    </div>
    <div class="box">
      <div class="titzhinan"><div class="greendiv"></div>预定中心</div>
      <el-collapse v-model="activeName" accordion >
        <el-collapse-item title="如何预订旅游产品" name="4">
          <ul>
            <li class="help-tab" v-for="i in help1">
              <h4><img src="../assets/image/help.png"><span>{{i.tit}}</span></h4>
              <p>{{i.text}}</p>
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="支付方式与发票" name="5">
          <ul>
            <li class="help-tab" v-for="i in help1">
              <h4><img src="../assets/image/help.png"><span>{{i.tit}}</span></h4>
              <p>{{i.text}}</p>
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="旅游合同" name="6">
          <ul>
            <li class="help-tab" v-for="i in help1">
              <h4><img src="../assets/image/help.png"><span>{{i.tit}}</span></h4>
              <p>{{i.text}}</p>
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="box" style="border: none;">
      <div class="titzhinan"><div class="greendiv"></div>机票预订</div>
      <el-collapse v-model="activeName" accordion  >
        <el-collapse-item title="机票预订" name="7">
          <ul>
            <li class="help-tab" v-for="i in help1">
              <h4><img src="../assets/image/help.png"><span>{{i.tit}}</span></h4>
              <p>{{i.text}}</p>
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="机票价格" name="8">
          <ul>
            <li class="help-tab" v-for="i in help1">
              <h4><img src="../assets/image/help.png"><span>{{i.tit}}</span></h4>
              <p>{{i.text}}</p>
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="机票搜索" name="9">
          <ul>
            <li class="help-tab" v-for="i in help1">
              <h4><img src="../assets/image/help.png"><span>{{i.tit}}</span></h4>
              <p>{{i.text}}</p>
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="旅行" name="10">
          <ul>
            <li class="help-tab" v-for="i in help1">
              <h4><img src="../assets/image/help.png"><span>{{i.tit}}</span></h4>
              <p>{{i.text}}</p>
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        activeName:'1',
        help1:[
          {tit:'什么是自驾游？',text:'自驾游属于自助旅游的一种类型，是有别于传统的集体参团旅游的一种新的旅游形态。自驾车旅游在选择对象、参与程序和体验自由等方面，给旅游者提供了伸缩自如的空间，其本身具有自由化与个性化、灵活性与舒适性及选择性与季节性等内在特点，与传统的参团方式相比具有本身的特点和魅力。'},
          {tit:'什么是自驾游？',text:'自驾游属于自助旅游的一种类型，是有别于传统的集体参团旅游的一种新的旅游形态。自驾车旅游在选择对象、参与程序和体验自由等方面，给旅游者提供了伸缩自如的空间，其本身具有自由化与个性化、灵活性与舒适性及选择性与季节性等内在特点，与传统的参团方式相比具有本身的特点和魅力。'},
          {tit:'什么是自驾游？',text:'自驾游属于自助旅游的一种类型，是有别于传统的集体参团旅游的一种新的旅游形态。自驾车旅游在选择对象、参与程序和体验自由等方面，给旅游者提供了伸缩自如的空间，其本身具有自由化与个性化、灵活性与舒适性及选择性与季节性等内在特点，与传统的参团方式相比具有本身的特点和魅力。'}
        ]
      }
    }
  }
</script>
<style>
</style>
