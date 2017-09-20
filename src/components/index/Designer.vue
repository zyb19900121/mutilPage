<template>
  <div class="font-16">
    <div class="text-align-center pt-50 height-340 bg-color-light-grey">
      <p class="font-26">最受欢迎设计师</p>
      <p class="font-16 font-color-grey">30位业内优秀家装设计师 | 为您提供高品质完美家装方案</p>
      <div class="display-inline-block pt-10 pb-30">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="预约排名推荐" name="1">
            <div>
              <h1>预约排名推荐</h1>
            </div>
          </el-tab-pane>
          <el-tab-pane label="关注排名推荐" name="2">
            <div>
              <h1>关注排名推荐</h1>
            </div>
          </el-tab-pane>
          <el-tab-pane label="查看更多" name="3">
            <div>
              <h1>查看更多</h1>
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
