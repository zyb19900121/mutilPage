<template>
  <div id="app">
    <div class="div-a">
      <div class="pt-30 pb-30">
        <p class="font-30">已有<span class="font-60 font-bold font-color-red">565</span>位业主</p>
        <p class="font-24">获取了装修预算</p>
        <p class="font-14 mt-30">信息输入完整可下载</p>
        <p class="font-14">PDF版各空间(工程量、主材、辅料、人工费)明细表</p>
        <button class="button-a">立即报名</button>
      </div>
    </div>

    <div class="div-b pt-30">
      <p class="text-align-center font-26">房屋信息</p>
      <el-row :gutter="20">
        <el-col :span="7">
          <div class="height-30"></div>
        </el-col>
        <el-col :span="10">
          <div>
            <p class="mt-25 font-18 font-color-grey">
              <span>建筑面积</span>
              <el-input class="ml-25" v-model="area">
                <template slot="append">m²</template>
              </el-input>
            </p>
            <p class="mt-35 font-18 font-color-grey">
              <span>房屋状况</span>
              <el-radio-group class="ml-25" v-model="newOrOld">
                <el-radio-button label="新房(毛坯)"></el-radio-button>
                <el-radio-button label="老房"></el-radio-button>
              </el-radio-group>
              <br>
              <span class="font-12 ml-100 font-color-grey-a">如果是老房装修,报价将涉及到所涵盖的全屋水电改造的费用</span>
            </p>
            <p class="mt-15 font-18 font-color-grey">
              <span>拆除项目</span>
              <el-radio-group class="ml-25" v-model="dismantle">
                <el-radio-button label="无拆除"></el-radio-button>
                <el-radio-button label="拆除包"></el-radio-button>
              </el-radio-group>
            </p>
            <p class="mt-35 font-18 font-color-grey">
              <span>房屋户型</span>
              <el-select class="ml-25 width-60" v-model="bedroom">
                <el-option
                  v-for="item in bedrooms"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span>室</span>

              <el-select class="ml-10 width-60" v-model="livingroom">
                <el-option
                  v-for="item in livingrooms"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span>厅</span>

              <el-select class="ml-10 width-60" v-model="kitchen">
                <el-option
                  v-for="item in kitchens"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span>厨</span>

              <el-select class="ml-10 width-60" v-model="bathroom">
                <el-option
                  v-for="item in bathrooms"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span>卫</span>

            </p>
            <p class="mt-35 font-18 font-color-grey">
              <span>手机号码</span>
              <el-input class="ml-25" style="width: 180px" placeholder="请输入您的联系方式" v-model="phoneNumber">
              </el-input>
              <br>
              <span class="font-12 ml-100 font-color-grey-a">手机号用于接收报价结果,方便您随时查看</span>
              <br>
              <span class="font-12 ml-100 font-color-grey-a">为了您的利益以及我们的口碑,您的隐私将被严格保密!</span>
            </p>
            <p class="mt-10 text-align-center">
              <button class="button-b">估算报价</button>
            </p>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="height-30"></div>
        </el-col>
      </el-row>
    </div>

    <div class="div-c text-align-center mt-30">
      <p class="font-36 font-color-white line-height-300">驿站智能报价能为您做什么?</p>
    </div>

    <div class="text-align-center ptb-30 bg-color-light-grey">
      <el-row :gutter="20">
        <el-col :span="2">
          <div class="height-280"></div>
        </el-col>
        <el-col :span="4">

          <div :class="{'animated pulse':isShowFor1===true}"
               class="div-1 text-align-center height-280 width-180 font-color-grey-a"
               @mouseenter="enter('1',$event)" @mouseleave="leave('1',$event)">
            <p class="font-18 pt-160">精准全包报价</p>
            <p class="font-14 mt-10">提供工程量、主材用量</p>
            <p class="font-14">轻工辅料价格</p>
            <p class="font-14">主材价格明细</p>
          </div>

        </el-col>
        <el-col :span="4">
          <div :class="{'animated pulse':isShowFor2===true}"
               class="div-2 text-align-center height-280 width-180 font-color-grey-a"
               @mouseenter="enter('2',$event)" @mouseleave="leave('2',$event)">
            <p class="font-18 pt-160">多档选择</p>
            <p class="font-14 mt-10">多档次报价</p>
            <p class="font-14">为您提供全面的</p>
            <p class="font-14">预算参考</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div :class="{'animated pulse':isShowFor3===true}"
               class="div-3 text-align-center height-280 width-180 font-color-grey-a"
               @mouseenter="enter('3',$event)" @mouseleave="leave('3',$event)">
            <p class="font-18 pt-160">详细清单</p>
            <p class="font-14 mt-10">详细报价清单</p>
            <p class="font-14">您想要的一应俱全</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div :class="{'animated pulse':isShowFor4===true}"
               class="div-4 text-align-center height-280 width-180 font-color-grey-a"
               @mouseenter="enter('4',$event)" @mouseleave="leave('4',$event)">
            <p class="font-18 pt-160">分享结果</p>
            <p class="font-14 mt-10">报价结果不准</p>
            <p class="font-14">您可分享给好友</p>
            <p class="font-14">家人帮忙参考</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div :class="{'animated pulse':isShowFor5===true}"
               class="div-5 text-align-center height-280 width-180 font-color-grey-a"
               @mouseenter="enter('5',$event)" @mouseleave="leave('5',$event)">
            <p class="font-18 pt-160">专业咨询</p>
            <p class="font-14 mt-10">专属家装顾问</p>
            <p class="font-14">为您讲解驿站装修服务</p>
            <p class="font-14">找验房、找设计、找装修</p>
            <p class="font-14">一站全齐</p>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="height-280"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShowFor1: false,
        isShowFor2: false,
        isShowFor3: false,
        isShowFor4: false,
        isShowFor5: false,
        area: '',
        newOrOld: '',
        dismantle: '',
        bedrooms: [{
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        }],
        bedroom: '2',
        livingrooms: [{
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }],
        livingroom: '1',
        kitchens: [{
          value: '1',
          label: '1'
        }],
        kitchen: '1',
        bathrooms: [{
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }],
        bathroom: '1',
        phoneNumber: ''
      }
    },
    methods: {

      enter: function (index, event) {

        console.log(index);
        switch (index) {
          case '1':
            this.isShowFor1 = true;
            break;
          case '2':
            this.isShowFor2 = true;
            break;
          case '3':
            this.isShowFor3 = true;
            break;
          case '4':
            this.isShowFor4 = true;
            break;
          case '5':
            this.isShowFor5 = true;
            break
        }


      },
      leave: function (index, event) {
        console.log(index);

        switch (index) {
          case '1':
            this.isShowFor1 = false;
            break;
          case '2':
            this.isShowFor2 = false;
            break;
          case '3':
            this.isShowFor3 = false;
            break;
          case '4':
            this.isShowFor4 = false;
            break;
          case '5':
            this.isShowFor5 = false;
            break
        }

      },
    }
  }
</script>

<style scoped>

  #app {
    font-size: 16px;
    overflow-x: hidden;
  }

  .el-input-group {
    line-height: normal;
    display: inline-table;
    /* width: 100%; */
    width: 150px;
    border-collapse: separate;
  }

  .el-radio-button__inner {
    display: inline-block;
    width: 100px;
  }

  .div-a {
    background-image: url("../../assets/imgs/calc/price6.jpg");
    background-repeat: round;
    text-align: center;
    background-color: #959595;
  }

  .div-c {
    height: 300px;
    background-image: url("../../assets/imgs/calc/price0.jpg");
    background-repeat: round;
  }

  .div-1 {
    background-image: url("../../assets/imgs/calc/price1.jpg");
    background-repeat: round;
    border: 1px solid white;
    transition: all 0.3s ease;

  }

  .div-2 {
    background-image: url("../../assets/imgs/calc/price2.jpg");
    background-repeat: round;
    border: 1px solid white;
    transition: all 0.3s ease;
  }

  .div-3 {
    background-image: url("../../assets/imgs/calc/price3.jpg");
    background-repeat: round;
    border: 1px solid white;
    transition: all 0.3s ease;
  }

  .div-4 {
    background-image: url("../../assets/imgs/calc/price4.jpg");
    background-repeat: round;
    border: 1px solid white;
    transition: all 0.3s ease;
  }

  .div-5 {
    background-image: url("../../assets/imgs/calc/price5.jpg");
    background-repeat: round;
    border: 1px solid white;
    transition: all 0.3s ease;
  }

  .div-1:hover, .div-2:hover, .div-3:hover, .div-4:hover, .div-5:hover {
    border: 1px solid #bebebe;
    box-shadow: 0 0 20px rgba(0, 0, 1, .5);
  }

  .button-a {
    border: 1px solid #fe0000;
    border-radius: 4px;
    margin-top: 30px;
    background-color: #fe0000;
    color: white;
    padding: 5px;
    font-size: 18px;
    width: 238px;
    transition: all 0.5s ease;
    cursor: pointer;
  }

  .button-b {
    border: 1px solid #fe0000;
    border-radius: 4px;
    margin-top: 30px;
    background-color: white;
    color: #fe0000;
    padding: 5px;
    font-size: 18px;
    width: 238px;
    transition: all 0.5s ease;
    cursor: pointer;
  }

  .button-a:hover {
    background-color: white;
    color: #fe0000;
  }

  .button-b:hover {
    background-color: #fe0000;
    color: white;
  }


</style>
