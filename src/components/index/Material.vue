<template>
  <div class="font-16">
    <div class="text-align-center pt-50">
      <p class="font-26">梦想装3.0 品质轻奢</p>
      <div class="pt-10 pb-30">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="卫浴" name="1">
            <div>
              <el-tabs v-model="activeName1_1" type="card" @tab-click="handleClick">
                <el-tab-pane label="科勒" name="1">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="TOTO" name="2">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="惠达" name="3">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>

              </el-tabs>
            </div>
          </el-tab-pane>
          <el-tab-pane label="橱柜" name="2">
            <div>
              <el-tabs v-model="activeName1_2" type="card" @tab-click="handleClick">

                <el-tab-pane label="科勒" name="1">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="TOTO" name="2">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="惠达" name="3">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>


              </el-tabs>
            </div>
          </el-tab-pane>
          <el-tab-pane label="瓷砖" name="3">
            <div>
              <el-tabs v-model="activeName1_3" type="card" @tab-click="handleClick">
                <el-tab-pane label="科勒" name="1">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="TOTO" name="2">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="惠达" name="3">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-tab-pane>
          <el-tab-pane label="地板" name="4">
            <div>
              <el-tabs v-model="activeName1_4" type="card" @tab-click="handleClick">
                <el-tab-pane label="科勒" name="1">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="TOTO" name="2">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="惠达" name="3">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-tab-pane>
          <el-tab-pane label="木门" name="5">
            <div>
              <el-tabs v-model="activeName1_5" type="card" @tab-click="handleClick">
                <el-tab-pane label="科勒" name="1">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="TOTO" name="2">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="惠达" name="3">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-tab-pane>
          <el-tab-pane label="五金" name="6">
            <div>
              <el-tabs v-model="activeName1_6" type="card" @tab-click="handleClick">
                <el-tab-pane label="科勒" name="1">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="TOTO" name="2">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="惠达" name="3">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-tab-pane>
          <el-tab-pane label="墙漆" name="7">
            <div>
              <el-tabs v-model="activeName1_7" type="card" @tab-click="handleClick">
                <el-tab-pane label="科勒" name="1">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="TOTO" name="2">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="惠达" name="3">
                  <div>
                    <el-carousel type="card" height="320px">
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                      <el-carousel-item>
                        <img src="../../assets/imgs/index/梦想装3.0/卫浴/产品内容-科勒-1.jpg" width="100%"/>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-tab-pane>
              </el-tabs>
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
        activeName: '1',
        activeName1_1: '1',
        activeName1_2: '1',
        activeName1_3: '1',
        activeName1_4: '1',
        activeName1_5: '1',
        activeName1_6: '1',
        activeName1_7: '1',
        activeName1_8: '1',
        keleImg: [
          ''
        ]
      };
    },

    mounted() {
//
      var card = document.querySelector('.el-carousel__item-card.is-in-stage');

      console.log(card);


      var tabNav = document.getElementsByClassName('el-tabs__nav');
      var tabHeader = document.getElementsByClassName('el-tabs__header');
//      document.querySelector('.el-tabs__nav').style.backgroundColor = 'black';

      for (var i = 2; i < 9; i++) {
        tabNav[i].style.float = 'none';
      }

      tabHeader[1].style.display = 'inline-block';
    },

    methods: {
      handleClick(tab, event) {
//        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>

  .el-tabs__nav {
    float: none;
  }

</style>
