<template><div style="padding: 10px;">
  <div class="titzhinan"><div class="greendiv"></div>请输入报名信息</div>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="游客姓名" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="tel">
      <el-input v-model="ruleForm.tel"></el-input>
    </el-form-item>
    <el-form-item label="跟团游" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择产品">
        <el-option label="西湖一日游" value="shanghai"></el-option>
        <el-option label="日本七日游" value="beijing"></el-option>
        <el-option label="意大利六日游" value="beijing"></el-option>
        <el-option label="西安四日游" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="出游时间" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="购买出游险" prop="delivery" style="display: flex;align-items: center;justify-content: flex-start;">
      <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="可选活动" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="体验当地特色美食" name="type"></el-checkbox>
        <el-checkbox label="旅游纪念品购物" name="type"></el-checkbox>
        <el-checkbox label="随团摄影记录" name="type"></el-checkbox>
        <el-checkbox label="不参与" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即报名</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div></template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          tel:'',
          region: '',
          date1: '',
          delivery: false,
          type: []
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          tel: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            MessageBox.alert('报名成功！').then(action => {
              this.$router.push('/')
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
</style>
