<template>
  <div class="font-16">
    <div class="text-align-center pt-50">
      <p class="font-26">驿站家装头条</p>
      <div class="display-inline-block pt-30 pb-30">
        <div class="width-1100 height-400 magin0Auto">
          <el-row>
            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey bg-color-white magin0Auto">

                <div class="div-news" style="height: 180px;background-color: #bebebe">
                  <p class="font-20 line-height-180"><span>最新新闻</span></p>
                </div>

                <div class="text-align-left p-20">
                  <ul>
                    <li>省钱又扩容的小空间卧室设计</li>
                    <li>82㎡日式风两居 让人总想宅在家</li>
                    <li>水电改造要怎么做 才能省钱又省力呢?</li>
                    <li>家居装修中的9大敏感区 一定不要随便动!</li>
                    <li>家装预算怎么做?</li>
                    <li>地下室装修如何防潮呢?</li>
                  </ul>
                </div>

              </div>
            </el-col>

            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey bg-color-white magin0Auto">

                <div class="div-qa" style="height: 45%;background-color: #bebebe">
                  <p class="font-20 line-height-180"><span>家装问答</span></p>
                </div>

                <div class="text-align-left p-20">
                  <ul>
                    <li>省钱又扩容的小空间卧室设计</li>
                    <li>82㎡日式风两居 让人总想宅在家</li>
                    <li>水电改造要怎么做 才能省钱又省力呢?</li>
                    <li>家居装修中的9大敏感区 一定不要随便动!</li>
                    <li>家装预算怎么做?</li>
                    <li>地下室装修如何防潮呢?</li>
                  </ul>
                </div>

              </div>
            </el-col>

            <el-col :span="8">
              <div class="div-content width-350 height-400 border-grey bg-color-white magin0Auto">

                <div class="div-knowledge" style="height: 45%;background-color: #bebebe">
                  <p class="font-20 line-height-180"><span>装修知识</span></p>
                </div>

                <div class="div-detail text-align-left p-20">
                  <ul>
                    <li>省钱又扩容的小空间卧室设计</li>
                    <li>82㎡日式风两居 让人总想宅在家</li>
                    <li>水电改造要怎么做 才能省钱又省力呢?</li>
                    <li>家居装修中的9大敏感区 一定不要随便动!</li>
                    <li>家装预算怎么做?</li>
                    <li>地下室装修如何防潮呢?</li>
                  </ul>
                </div>

              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .div-news{
    background-image: url("../../assets/imgs/index/最新新闻.jpg");
    background-repeat: round;
  }
  .div-qa{
    background-image: url("../../assets/imgs/index/家装问答.jpg");
    background-repeat: round;
  }
  .div-knowledge{
    background-image: url("../../assets/imgs/index/装修知识.jpg");
    background-repeat: round;
  }

  span {
    padding: 8px;
    padding-left: 25px;
    padding-right: 25px;
    background-color: #fff;
  }

  li{
    color: #959595;
    font-size: 14px;
    line-height: 2em;
    list-style: none;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  li:hover{
    color: #fe0000;
  }
</style>
