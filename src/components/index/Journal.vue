<!--模板-->

<!--<div v-if="activeName == '1'" style="width: 1100px;height: 300px; margin: 0 auto;">-->
<!--<el-row>-->
<!--<el-col :span="8">-->
<!--<div class="width-350 height-300 border-grey" style="margin: 0 auto">-->
<!---->
<!--</div>-->
<!--</el-col>-->
<!--<el-col :span="8">-->
<!--<div class="width-350 height-300 border-grey" style="margin: 0 auto">-->

<!--</div>-->
<!--</el-col>-->
<!--<el-col :span="8">-->
<!--<div class="width-350 height-300 border-grey" style="margin: 0 auto">-->

<!--</div>-->
<!--</el-col>-->
<!--</el-row>-->
<!--</div>-->


<template>
  <div class="font-16">
    <div class="text-align-center pt-50">
      <p class="font-26">会说话的工地</p>
      <div class="display-inline-block pt-10 pb-30">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="正在装修" name="1">
          </el-tab-pane>
          <el-tab-pane label="装修完工" name="2">
          </el-tab-pane>
          <el-tab-pane label="查看更多" name="3">
          </el-tab-pane>
        </el-tabs>
      </div>


      <transition name="fade" mode="out-in">
        <div v-if="activeName == '1'" style="width: 1100px;height: 300px; margin: 0 auto;">
          <el-row>
            <el-col :span="8">
              <div class="width-350 height-300 border-grey" style="margin: 0 auto">
                <div class="bg-color-grey">
                  <div class="pl-20 pr-20 pt-20" style="display: flex; justify-content: space-between">
                    <p class="font-18">香格里拉3期3号楼301</p>
                    <p class="font-18 width-40">17</p>
                  </div>
                  <div class="pl-20 pr-20 pb-20" style="display: flex; justify-content: space-between">
                    <p class="font-14 font-color-grey-a">
                      <span>北京石景山区</span>
                      <span class="ml-10">2017-08-20开工</span>
                    </p>
                    <p class="font-14 font-color-grey-a width-40">动态</p>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="width-350 height-300 border-grey" style="margin: 0 auto">
                <div class="bg-color-grey">
                  <div class="pl-20 pr-20 pt-20" style="display: flex; justify-content: space-between">
                    <p class="font-18">香格里拉3期3号楼301</p>
                    <p class="font-18 width-40">17</p>
                  </div>
                  <div class="pl-20 pr-20 pb-20" style="display: flex; justify-content: space-between">
                    <p class="font-14 font-color-grey-a">
                      <span>北京石景山区</span>
                      <span class="ml-10">2017-08-20开工</span>
                    </p>
                    <p class="width-40 font-14 font-color-grey-a">动态</p>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="width-350 height-300 border-grey" style="margin: 0 auto">
                <div class="bg-color-grey">
                  <div class="pl-20 pr-20 pt-20" style="display: flex; justify-content: space-between">
                    <p class="font-18">香格里拉3期3号楼301</p>
                    <p class="font-18 width-40">17</p>
                  </div>
                  <div class="pl-20 pr-20 pb-20" style="display: flex; justify-content: space-between">
                    <p class="font-14 font-color-grey-a">
                      <span>北京石景山区</span>
                      <span class="ml-10">2017-08-20开工</span>
                    </p>
                    <p class="width-40 font-14 font-color-grey-a">动态</p>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </transition>

      <transition name="fade" mode="out-in">
        <div style="width: 1080px; height: 300px; background-color: #ff4d51; margin: 0 auto" v-if="activeName == '2'">
          <h1>装修完工</h1>
        </div>
      </transition>

      <transition name="fade" mode="out-in">
        <div style="width: 1080px; height: 300px; background-color: #73ccff; margin: 0 auto" v-if="activeName == '3'">
          <h1>查看更多</h1>
        </div>
      </transition>

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

  .fade-enter {
    opacity: 0;

  }

  .fade-enter-active {
    transition: opacity 0.5s;

  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    opacity: 0;
    /*transition: opacity 0.5s;*/
  }

</style>
