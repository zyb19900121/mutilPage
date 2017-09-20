<template>
  <div class="font-16">
    <div class="text-align-center pt-50">
      <p class="font-26">梦想装3.0 品质轻奢</p>
      <div class="display-inline-block pt-10 pb-30">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="卫浴" name="first">
            <div>
              <h1>卫浴</h1>
            </div>
          </el-tab-pane>
          <el-tab-pane label="橱柜" name="1">
            <div>
              <h1>橱柜</h1>
            </div>
          </el-tab-pane>
          <el-tab-pane label="瓷砖" name="2">
            <div>
              <h1>瓷砖</h1>
            </div>
          </el-tab-pane>
          <el-tab-pane label="地板" name="3">
            <div>
              <h1>地板</h1>
            </div>
          </el-tab-pane>
          <el-tab-pane label="木门" name="4">
            <div>
              <h1>木门</h1>
            </div>
          </el-tab-pane>
          <el-tab-pane label="五金" name="5">
            <div>
              <h1>五金</h1>
            </div>
          </el-tab-pane>
          <el-tab-pane label="墙漆" name="6">
            <div>
              <h1>墙漆</h1>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '1'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>

</style>
