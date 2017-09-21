<template>
  <div class="font-16 bg-color-light-grey" >
    <div class="text-align-center pt-50 pb-50 overflow-hidden">
      <p class="font-26">最受欢迎设计师</p>
      <p class="font-16 font-color-grey">30位业内优秀家装设计师 | 为您提供高品质完美家装方案</p>
      <div class="display-inline-block pt-10 pb-30">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="预约排名推荐" name="1">
          </el-tab-pane>
          <el-tab-pane label="关注排名推荐" name="2">
          </el-tab-pane>
          <el-tab-pane label="查看更多" name="3">
          </el-tab-pane>
        </el-tabs>
      </div>

      <transition enter-active-class="slideInLeft" leave-active-class="bounceOut">
        <div class="animated width-1100 height-400 magin0Auto" v-show="activeName == '1'">
          <el-row>
            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey bg-color-white magin0Auto">

                <img class="width-350 height-50p" src="../../assets/imgs/index/designer-bg.jpg" alt="">
                <img class="border-grey mt-040 border-radius-50p width-80 height-80" src="../../assets/imgs/index/designer.png" alt="">
                <div class="text-align-center">
                  <p class="mt-10 font-20">杨某某</p>
                  <p class="font-14 font-color-grey-a">首席设计师</p>
                  <p class="mt-10 font-14 font-color-grey-a">
                    <span>从业经验:8年</span>
                    <span>&nbsp|&nbsp</span>
                    <span>代表作品:10套</span>
                  </p>
                  <button class="button">马上预约</button>
                </div>

              </div>
            </el-col>

            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey bg-color-white magin0Auto">

                <img class="width-350 height-50p" src="../../assets/imgs/index/designer-bg.jpg" alt="">
                <img class="border-grey mt-040 border-radius-50p width-80 height-80" src="../../assets/imgs/index/designer.png" alt="">
                <div class="text-align-center">
                  <p class="mt-10 font-20">杨某某</p>
                  <p class="font-14 font-color-grey-a">首席设计师</p>
                  <p class="mt-10 font-14 font-color-grey-a">
                    <span>从业经验:8年</span>
                    <span>&nbsp|&nbsp</span>
                    <span>代表作品:10套</span>
                  </p>
                  <button class="button">马上预约</button>
                </div>

              </div>
            </el-col>

            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey bg-color-white magin0Auto">

                <img class="width-350 height-50p" src="../../assets/imgs/index/designer-bg.jpg" alt="">
                <img class="border-grey mt-040 border-radius-50p width-80 height-80" src="../../assets/imgs/index/designer.png" alt="">
                <div class="text-align-center">
                  <p class="mt-10 font-20">杨某某</p>
                  <p class="font-14 font-color-grey-a">首席设计师</p>
                  <p class="mt-10 font-14 font-color-grey-a">
                    <span>从业经验:8年</span>
                    <span>&nbsp|&nbsp</span>
                    <span>代表作品:10套</span>
                  </p>
                  <button class="button">马上预约</button>
                </div>

              </div>
            </el-col>
          </el-row>
        </div>
      </transition>

      <transition enter-active-class="slideInRight" leave-active-class="bounceOut">
        <div class="animated width-1100 height-400 magin0Auto" v-show="activeName == '2'">
          <el-row>
            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey bg-color-white magin0Auto">

                <img class="width-350 height-50p" src="../../assets/imgs/index/designer-bg2.jpg" alt="">
                <img class="border-grey mt-040 border-radius-50p width-80 height-80" src="../../assets/imgs/index/designer2.png" alt="">
                <div class="text-align-center">
                  <p class="mt-10 font-20">杨某某</p>
                  <p class="font-14 font-color-grey-a">首席设计师</p>
                  <p class="mt-10 font-14 font-color-grey-a">
                    <span>从业经验:8年</span>
                    <span>&nbsp|&nbsp</span>
                    <span>代表作品:10套</span>
                  </p>
                  <button class="button">马上预约</button>
                </div>

              </div>
            </el-col>

            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey bg-color-white magin0Auto">

                <img class="width-350 height-50p" src="../../assets/imgs/index/designer-bg2.jpg" alt="">
                <img class="border-grey mt-040 border-radius-50p width-80 height-80" src="../../assets/imgs/index/designer2.png" alt="">
                <div class="text-align-center">
                  <p class="mt-10 font-20">杨某某</p>
                  <p class="font-14 font-color-grey-a">首席设计师</p>
                  <p class="mt-10 font-14 font-color-grey-a">
                    <span>从业经验:8年</span>
                    <span>&nbsp|&nbsp</span>
                    <span>代表作品:10套</span>
                  </p>
                  <button class="button">马上预约</button>
                </div>

              </div>
            </el-col>

            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey bg-color-white magin0Auto">

                <img class="width-350 height-50p" src="../../assets/imgs/index/designer-bg2.jpg" alt="">
                <img class="border-grey mt-040 border-radius-50p width-80 height-80" src="../../assets/imgs/index/designer2.png" alt="">
                <div class="text-align-center">
                  <p class="mt-10 font-20">杨某某</p>
                  <p class="font-14 font-color-grey-a">首席设计师</p>
                  <p class="mt-10 font-14 font-color-grey-a">
                    <span>从业经验:8年</span>
                    <span>&nbsp|&nbsp</span>
                    <span>代表作品:10套</span>
                  </p>
                  <button class="button">马上预约</button>
                </div>

              </div>
            </el-col>

          </el-row>
        </div>
      </transition>

      <!--<transition name="fade" mode="out-in">-->
      <div style="width: 1080px; height: 400px; margin: 0 auto" v-if="activeName == '3'">
        <h1>查看更多</h1>
      </div>
      <!--</transition>-->

      <!--</transition>-->

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
  .div-journal-logo {
    background-image: url("../../assets/imgs/index/white-horse.png");
    background-color: #e5e5e5;
    border-radius: 50%;
  }

  .div-content {
    transition: all 0.5s ease;
  }

  .div-content > :nth-child(1) {
    transition: all 0.5s ease;
  }

  /*.div-content > :nth-child(1) p {*/
  /*transition: all 0.5s ease;*/
  /*}*/

  .div-content:hover {
    border: 1px solid #fe0000;
    cursor: pointer;
  }

  .div-content:hover > :nth-child(1) {
    background: #fe0000;
  }

  .div-content:hover > :nth-child(1) p {
    color: #fff;
  }

  /*.animated {*/
  /*animation-duration: 0s;*/
  /*animation-fill-mode: both;*/
  /*}*/

  .animated.bounceOut {
    -webkit-animation-duration: 0s;
    animation-duration: 0s;
  }

  .button {
    border: 1px solid #fe0000;
    margin-top: 15px;
    background-color: #fe0000;
    color: white;
    padding: 5px;
    font-size: 18px;
    width: 200px;
    transition: all 0.5s ease;
    cursor: pointer;
  }

  .button:hover {
    background-color: white;
    color: #fe0000;
  }

</style>
