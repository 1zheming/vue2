<template>
<el-container>
  <el-header></el-header>
  <el-container>
    <el-aside width="200px" <el-menu  router
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1"><router-link to='/HelloWorld'   @click="gotTo('/HelloWorld')">选项1</router-link></el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/table">
        <i class="el-icon-menu"></i>
        <span slot="title"><router-link to = '/HelloWorld'  @click="gotTo('/HelloWorld')">导航二</router-link></span>
      </el-menu-item>
      <el-menu-item index="/grid">
        <i class="el-icon-document"></i>
        <span slot="title"><router-link to = '/grid'  @click="gotTo('/grid')">九宫格</router-link></span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title"><router-link to = '/card' @click="gotTo('/card')">card页面</router-link></span>
      </el-menu-item>
    </el-menu></el-aside>
    <el-main> <router-link>Main</router-link></el-main>
  </el-container>
</el-container>
</template>

<script>

</script>

<style>
  .el-header .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
	background-color: #B3C0D1;
    color: #333;
	height: 500px;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
