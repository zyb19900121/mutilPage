<template>
  <div class="font-16 height-60">

    <img class="width-220 float-left" src="../../assets/imgs/index/logo.png" alt="">

    <span>北京[切换]</span>

    <el-menu :default-active="activeIndex" class="el-menu-demo float-right pr-100" mode="horizontal"
             @select="handleSelect">
      <a href="index.html">
        <el-menu-item index="1">首页</el-menu-item>
      </a>
      <el-submenu index="2">
        <template slot="title">驿站产品</template>
        <a href="dream3.0.html">
          <el-menu-item index="2-1">梦想装3.0</el-menu-item>
        </a>
        <el-menu-item index="2-2">定制施工包</el-menu-item>
        <el-menu-item index="2-3">个性主材包</el-menu-item>
        <el-menu-item index="2-4">家具软装包</el-menu-item>
        <el-menu-item index="2-5">老房换新包</el-menu-item>
        <el-menu-item index="2-6">智能机电包</el-menu-item>
      </el-submenu>
      <a href="calc.html">
        <el-menu-item index="3">智能报价</el-menu-item>
      </a>
      <a href="journal.html">
        <el-menu-item index="4">装修日志</el-menu-item>
      </a>
      <a href="material.html">
        <el-menu-item index="5">环保材料</el-menu-item>
      </a>
      <a href="designer.html">
        <el-menu-item index="6">大牌设计</el-menu-item>
      </a>
      <a href="gallery.html">
        <el-menu-item index="7">效果图库</el-menu-item>
      </a>
    </el-menu>

  </div>
</template>

<script>

  //  import store from '../../vuex/store'
  //  import {mapState, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    props: ['indexName'],
    created() {
      switch (this.indexName) {
        case 'index':
          this.activeIndex = '1';
          break;
        case 'calc':
          this.activeIndex = '3';
          break;
        case 'journal':
          this.activeIndex = '4';
          break;
        case 'material':
          this.activeIndex = '5';
          break;
        case 'designer':
          this.activeIndex = '6';
          break;
        case 'gallery':
          this.activeIndex = '7';
          break;
        case 'dream3.0':
          this.activeIndex = '2-1';
          break;
      }
    },

    methods: {

      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
//    store
  }
</script>

<style scoped>
  img {
    padding-left: 100px;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  span {
    float: left;
    margin-left: 10px;
    font-size: 14px;
    color: #bebebe;
    line-height: 60px;

  }

  .el-menu {
    background-color: white;
  }

  .el-menu li {
    text-align: center;
  }

  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active {
    color: #fe0000;
  }

  .el-menu--horizontal .el-menu-item:hover, .el-menu--horizontal .el-submenu__title:hover {
    background-color: #fe0000;
    color: white;
  }

  .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
    background-color: #fe0000;
    color: white;
  }

  .el-menu--horizontal > .el-menu-item:hover, .el-menu--horizontal > .el-submenu.is-active .el-submenu__title, .el-menu--horizontal > .el-submenu:hover .el-submenu__title {
    border: none;
  }

  .el-submenu .el-menu-item {
    min-width: 0px;
  }

  .el-menu--horizontal .el-menu-item {
    border: none;
  }


</style>
