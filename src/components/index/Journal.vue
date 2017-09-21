<!--模板-->
<!--<div class="width-1100 height-400 magin0Auto" v-if="activeName == '1'">-->
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
<!--<div></div>-->


<template>
  <div class="font-16">
    <div class="text-align-center pt-50 overflow-hidden">
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


      <transition enter-active-class="slideInLeft" leave-active-class="bounceOut">
        <div class="animated width-1100 height-400 magin0Auto" v-if="activeName == '1'">
          <el-row>
            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey magin0Auto">
                <div class="bg-color-grey">
                  <div class="pl-20 pr-20 pt-20 display-flex space-between">
                    <p class="font-18">香格里拉3期3号楼301</p>
                    <p class="font-18 width-40">17</p>
                  </div>
                  <div class="pl-20 pr-20 pb-20 display-flex space-between">
                    <p class="font-14 font-color-grey-a">
                      <span>北京石景山区</span>
                      <span class="ml-10">2017-08-20开工</span>
                    </p>
                    <p class="font-14 font-color-grey-a width-40">动态</p>
                  </div>
                </div>

                <div class="p-20 text-align-left">
                  <div class="div-journal-logo width-45 height-45 float-left"></div>
                  <div class="ml-10 float-left">
                    <span>张某某</span>
                    <br>
                    <span class="font-color-white pl-5 pr-5 border-radius-4 bg-color-green">工长</span>
                  </div>
                  <div class="ml-10 float-right">
                    <span class="font-color-white pl-5 pr-5 line-height-45 bg-color-orange">竣工验收</span>
                  </div>
                </div>

                <div class="p-20 mt-25 text-align-left clear-both">
                  <p class="font-18">开始施工</p>
                  <p class="mt-5 font-14 font-color-grey-a">再看一眼装修之前的样子吧再看一眼装修之前的样子吧再看一眼装修之前的样子吧</p>
                </div>

                <div class="pl-20 pr-20">
                  <img width="100%" src="../../assets/imgs/index/diaryDefault.jpg" alt="">
                </div>

              </div>
            </el-col>
            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey magin0Auto">
                <div class="bg-color-grey">
                  <div class="pl-20 pr-20 pt-20 display-flex space-between">
                    <p class="font-18">香格里拉3期3号楼301</p>
                    <p class="font-18 width-40">17</p>
                  </div>
                  <div class="pl-20 pr-20 pb-20 display-flex space-between">
                    <p class="font-14 font-color-grey-a">
                      <span>北京石景山区</span>
                      <span class="ml-10">2017-08-20开工</span>
                    </p>
                    <p class="font-14 font-color-grey-a width-40">动态</p>
                  </div>
                </div>

                <div class="p-20 text-align-left">
                  <div class="div-journal-logo width-45 height-45 float-left"></div>
                  <div class="ml-10 float-left">
                    <span>张某某</span>
                    <br>
                    <span class="font-color-white pl-5 pr-5 border-radius-4 bg-color-green">工长</span>
                  </div>
                  <div class="ml-10 float-right">
                    <span class="font-color-white pl-5 pr-5 line-height-45 bg-color-orange">竣工验收</span>
                  </div>
                </div>

                <div class="p-20 mt-25 text-align-left clear-both">
                  <p class="font-18">开始施工</p>
                  <p class="mt-5 font-14 font-color-grey-a">再看一眼装修之前的样子吧再看一眼装修之前的样子吧再看一眼装修之前的样子吧</p>
                </div>

                <div class="pl-20 pr-20">
                  <img width="100%" src="../../assets/imgs/index/diaryDefault.jpg" alt="">
                </div>

              </div>
            </el-col>
            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey magin0Auto">
                <div class="bg-color-grey">
                  <div class="pl-20 pr-20 pt-20 display-flex space-between">
                    <p class="font-18">香格里拉3期3号楼301</p>
                    <p class="font-18 width-40">17</p>
                  </div>
                  <div class="pl-20 pr-20 pb-20 display-flex space-between">
                    <p class="font-14 font-color-grey-a">
                      <span>北京石景山区</span>
                      <span class="ml-10">2017-08-20开工</span>
                    </p>
                    <p class="font-14 font-color-grey-a width-40">动态</p>
                  </div>
                </div>

                <div class="p-20 text-align-left">
                  <div class="div-journal-logo width-45 height-45 float-left"></div>
                  <div class="ml-10 float-left">
                    <span>张某某</span>
                    <br>
                    <span class="font-color-white pl-5 pr-5 border-radius-4 bg-color-green">工长</span>
                  </div>
                  <div class="ml-10 float-right">
                    <span class="font-color-white pl-5 pr-5 line-height-45 bg-color-orange">竣工验收</span>
                  </div>
                </div>

                <div class="p-20 mt-25 text-align-left clear-both">
                  <p class="font-18">开始施工</p>
                  <p class="mt-5 font-14 font-color-grey-a">再看一眼装修之前的样子吧再看一眼装修之前的样子吧再看一眼装修之前的样子吧</p>
                </div>

                <div class="pl-20 pr-20">
                  <img width="100%" src="../../assets/imgs/index/diaryDefault.jpg" alt="">
                </div>

              </div>
            </el-col>
          </el-row>
        </div>
      </transition>

      <transition enter-active-class="slideInRight" leave-active-class="bounceOut">
        <div class="animated width-1100 height-400 magin0Auto" v-if="activeName == '2'">
          <el-row>
            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey magin0Auto">
                <div class="bg-color-grey">
                  <div class="pl-20 pr-20 pt-20 display-flex space-between">
                    <p class="font-18">北京海淀区和鸿四季</p>
                    <p class="font-18 width-40">8</p>
                  </div>
                  <div class="pl-20 pr-20 pb-20 display-flex space-between">
                    <p class="font-14 font-color-grey-a">
                      <span>北京石景山区</span>
                      <span class="ml-10">2017-08-20开工</span>
                    </p>
                    <p class="font-14 font-color-grey-a width-40">动态</p>
                  </div>
                </div>

                <div class="p-20 text-align-left">
                  <div class="div-journal-logo width-45 height-45 float-left"></div>
                  <div class="ml-10 float-left">
                    <span>张某某</span>
                    <br>
                    <span class="font-color-white pl-5 pr-5 border-radius-4 bg-color-green">工长</span>
                  </div>
                  <div class="ml-10 float-right">
                    <span class="font-color-white pl-5 pr-5 line-height-45 bg-color-orange">竣工验收</span>
                  </div>
                </div>

                <div class="p-20 mt-25 text-align-left clear-both">
                  <p class="font-18">开始施工</p>
                  <p class="mt-5 font-14 font-color-grey-a">再看一眼装修之前的样子吧再看一眼装修之前的样子吧再看一眼装修之前的样子吧</p>
                </div>

                <div class="pl-20 pr-20">
                  <img width="100%" src="../../assets/imgs/index/diaryDefault.jpg" alt="">
                </div>

              </div>
            </el-col>
            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey magin0Auto">
                <div class="bg-color-grey">
                  <div class="pl-20 pr-20 pt-20 display-flex space-between">
                    <p class="font-18">北京海淀区和鸿四季</p>
                    <p class="font-18 width-40">8</p>
                  </div>
                  <div class="pl-20 pr-20 pb-20 display-flex space-between">
                    <p class="font-14 font-color-grey-a">
                      <span>北京石景山区</span>
                      <span class="ml-10">2017-08-20开工</span>
                    </p>
                    <p class="font-14 font-color-grey-a width-40">动态</p>
                  </div>
                </div>

                <div class="p-20 text-align-left">
                  <div class="div-journal-logo width-45 height-45 float-left"></div>
                  <div class="ml-10 float-left">
                    <span>张某某</span>
                    <br>
                    <span class="font-color-white pl-5 pr-5 border-radius-4 bg-color-green">工长</span>
                  </div>
                  <div class="ml-10 float-right">
                    <span class="font-color-white pl-5 pr-5 line-height-45 bg-color-orange">竣工验收</span>
                  </div>
                </div>

                <div class="p-20 mt-25 text-align-left clear-both">
                  <p class="font-18">开始施工</p>
                  <p class="mt-5 font-14 font-color-grey-a">再看一眼装修之前的样子吧再看一眼装修之前的样子吧再看一眼装修之前的样子吧</p>
                </div>

                <div class="pl-20 pr-20">
                  <img width="100%" src="../../assets/imgs/index/diaryDefault.jpg" alt="">
                </div>

              </div>
            </el-col>
            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey magin0Auto">
                <div class="bg-color-grey">
                  <div class="pl-20 pr-20 pt-20 display-flex space-between">
                    <p class="font-18">北京海淀区和鸿四季</p>
                    <p class="font-18 width-40">8</p>
                  </div>
                  <div class="pl-20 pr-20 pb-20 display-flex space-between">
                    <p class="font-14 font-color-grey-a">
                      <span>北京石景山区</span>
                      <span class="ml-10">2017-08-20开工</span>
                    </p>
                    <p class="font-14 font-color-grey-a width-40">动态</p>
                  </div>
                </div>

                <div class="p-20 text-align-left">
                  <div class="div-journal-logo width-45 height-45 float-left"></div>
                  <div class="ml-10 float-left">
                    <span>张某某</span>
                    <br>
                    <span class="font-color-white pl-5 pr-5 border-radius-4 bg-color-green">工长</span>
                  </div>
                  <div class="ml-10 float-right">
                    <span class="font-color-white pl-5 pr-5 line-height-45 bg-color-orange">竣工验收</span>
                  </div>
                </div>

                <div class="p-20 mt-25 text-align-left clear-both">
                  <p class="font-18">开始施工</p>
                  <p class="mt-5 font-14 font-color-grey-a">再看一眼装修之前的样子吧再看一眼装修之前的样子吧再看一眼装修之前的样子吧</p>
                </div>

                <div class="pl-20 pr-20">
                  <img width="100%" src="../../assets/imgs/index/diaryDefault.jpg" alt="">
                </div>

              </div>
            </el-col>
          </el-row>
        </div>
      </transition>

      <transition name="fade" mode="out-in">
        <div style="width: 1080px; height: 400px; margin: 0 auto" v-if="activeName == '3'">
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

  .animated.bounceOut {
    -webkit-animation-duration: 0s;
    animation-duration: 0s;
  }

</style>
