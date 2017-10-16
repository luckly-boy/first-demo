<template>
    <div>
      <el-collapse v-model="activeNames"  >
        <el-collapse-item title="简介" name="1">
         <div><img src="../assets/image/jianjie.png" width="400px"></div>
          <p style="text-align: left;padding: 10px">{{jianjie}}</p>
        </el-collapse-item>
        <el-collapse-item title="业务" name="2">
          <div><img src="../assets/image/jianjie.png" width="400px"></div>
          <p style="text-align: left;padding: 10px">{{jianjie}}</p>
        </el-collapse-item>
        <el-collapse-item title="团队" name="3">
          <div><img src="../assets/image/jianjie.png" width="400px"></div>
          <p style="text-align: left;padding: 10px">{{jianjie}}</p>
        </el-collapse-item>
        <el-collapse-item title="加入我们" name="4">
          <div><img src="../assets/image/jianjie.png" width="400px"></div>
          <p style="text-align: left;padding: 10px">{{jianjie}}</p>
        </el-collapse-item>
        <el-collapse-item title="公司环境" name="5">
          <div><img src="../assets/image/jianjie.png" width="400px"></div>
          <p style="text-align: left;padding: 10px">{{jianjie}}</p>
        </el-collapse-item>
        <el-collapse-item title="公司荣誉" name="6">
          <div><img src="../assets/image/jianjie.png" width="400px"></div>
          <p style="text-align: left;padding: 10px">{{jianjie}}</p>
        </el-collapse-item>
        <el-collapse-item title="免责声明" name="7">
          <p style="text-align: left;padding: 10px">最终解释权归我们所有</p>
        </el-collapse-item>
      </el-collapse>
    </div>
</template>
<script>
  export default {
    data(){
      return{
        activeNames: ['1'],
        jianjie:'心心旅游是一家以信息技术创新为核心竞争力，以综合性服务凝聚和重塑行业力量，打造行业共生在平台的互联网公司。十年来一直致力于解决单一旅行社无法解决的问题，提供涵盖资源采购、营销管理、内部管控、行业监管、创业孵化等旅游企业的相关服务。'
      }
    }
  }
</script>
<style>
</style>
