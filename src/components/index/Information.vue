<template>
  <div>
    <div class="div-info text-align-center">
      <p class="font-22 pt-30">信息化工程体系, 交付无忧</p>
      <div style="width: 64.5%; height: 300px;margin: 30px auto;">
        <el-row :gutter="10">
          <el-col :span="4">
            <div class="magin0Auto">
              <p class="font-32">1</p>
              <p class="font-12">工匠能力</p>
              <p class="font-12">一目了然</p>
              <p class="font-12">择优使用</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="magin0Auto">
              <p class="font-32">2</p>
              <p class="font-12">标准工期管理</p>
              <p class="font-12">时间预警机制</p>
              <p class="font-12">工种交接明确</p>
              <p class="font-12">提高整体效率</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="magin0Auto" style="margin-left: -20px">
              <p class="font-32">3</p>
              <p class="font-12">日常细节见管理</p>
              <p class="font-12">防微杜渐保安全</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="magin0Auto ml-10">
              <p class="font-32">4</p>
              <p class="font-12">工程进度以天递进</p>
              <p class="font-12">原始备份有据可询</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="magin0Auto">
              <p class="font-32">5</p>
              <p class="font-12">施工预警系统</p>
              <p class="font-12">保证施工进度</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="magin0Auto">
              <p class="font-32">6</p>
              <p class="font-12">工匠口碑体系</p>
              <p class="font-12">沃克匠心相传</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .div-info {
    font-size: 16px;
    min-width: 1200px;
    height: 600px;
    background-image: url("../../assets/imgs/index/工程体系.jpg");
    background-repeat: round;
  }
</style>
