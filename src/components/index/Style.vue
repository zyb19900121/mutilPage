<template>
  <div class="font-16">
    <div class="text-align-center pt-50">
      <p class="font-26">驿站家装流行风格</p>
      <div class="display-inline-block pt-30 pb-30">
        <div>
          <el-row :gutter="10">
            <el-col :span="8">
              <div class="style-div-a text-align-center width-400 height-260">
                <p class="font-26" style="line-height: 260px"><span>现代简约</span></p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="style-div-b text-align-center width-400 height-260">
                <p class="font-26" style="line-height: 260px"><span>北欧风情</span></p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="style-div-c text-align-center width-400 height-260">
                <p class="font-26 line-height-260"><span>极简中式</span></p>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="mt-10">
          <el-row :gutter="10">
            <el-col :span="8">
              <div class="style-div-d text-align-center width-400 height-260">
                <p class="font-26 line-height-260"><span>印象北美</span></p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="style-div-e text-align-center width-400 height-260">
                <p class="font-26 line-height-260"><span>意式田园</span></p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="style-div-f text-align-center width-400 height-260">
                <p class="font-26 line-height-260"><span>印象地中海</span></p>
              </div>
            </el-col>
          </el-row>
        </div>

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

  .style-div-a {
    background-image: url("../../assets/imgs/index/风格-简约.jpg");
    background-repeat: round;
    border: 1px solid white;
    transition: all 0.3s ease;
  }

  .style-div-b {
    background-image: url("../../assets/imgs/index/风格-北欧.jpg");
    background-repeat: round;
    border: 1px solid white;
    transition: all 0.3s ease;
  }

  .style-div-c {
    background-image: url("../../assets/imgs/index/风格-中式.jpg");
    background-repeat: round;
    border: 1px solid white;
    transition: all 0.3s ease;
  }

  .style-div-d {
    background-image: url("../../assets/imgs/index/风格-北美.jpg");
    background-repeat: round;
    border: 1px solid white;
    transition: all 0.3s ease;
  }

  .style-div-e {
    background-image: url("../../assets/imgs/index/风格-田园.jpg");
    background-repeat: round;
    border: 1px solid white;
    transition: all 0.3s ease;
  }

  .style-div-f {
    background-image: url("../../assets/imgs/index/风格-地中海.jpg");
    background-repeat: n;
    border: 1px solid white;
    transition: all 0.3s ease;
  }

  .style-div-a:hover, .style-div-b:hover, .style-div-c:hover, .style-div-d:hover, .style-div-e:hover, .style-div-f:hover{
    border: 1px solid #bebebe;
    box-shadow:0 0 20px rgba(0, 0, 1, .5);
  }

  span {
    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: rgba(255, 255, 255, 0.6);
  }

</style>
