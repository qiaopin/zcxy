<template>
  <el-container>
  <el-aside width="200px">
    <!-- 侧边栏 -->
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#409EFF">
      <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span>公司产品</span>
        </el-menu-item >
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">公司新闻</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">行业新闻</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

    <!-- 侧边栏完 -->
  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
  export default {
      name:'Home',
}
</script>

<style lang="less" scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    // height:200px;
  }
  
  .el-aside {
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: center;
    height: 730px;
    .el-col-12{
      width: 100%;
      overflow: hidden;
    }
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
 
</style>
