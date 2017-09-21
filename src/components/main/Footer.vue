<template>
  <div class="bg-color-grey">
    <div class="width-1100 height-180 pt-30 magin0Auto">
      <el-row>
        <el-col :span="18">
          <table>
            <tr>
              <th>关于公司</th>
              <th>装修攻略</th>
              <th>客服中心</th>
              <th>特许加盟</th>
              <th>最新招聘</th>
            </tr>
            <tr>
              <td><a href="#">我家驿站</a></td>
              <td><a href="#">线上课堂</a></td>
            </tr>
            <tr>
              <td><a href="#">企业新闻</a></td>
              <td><a href="#">设计攻略</a></td>
            </tr>
            <tr>
              <td><a href="#">联系我们</a></td>
            </tr>
          </table>
          <div class="font-12 font-color-ligth-grey mt-25">
            我家驿站(北京)科技有限公司 京ICP备16033346号-1
          </div>
        </el-col>
        <el-col :span="6">
          <div class="float-right">
            <div class="font-26 font-color-dark-grey font-bold">
              <p>400-706-8833</p>
            </div>
            <div class="display-inline-block font-14 font-color-ligth-grey">
              <div class="width-90">
                <img src="../../assets/imgs/index/公众号.jpg" alt="公众号">
                <p class="text-align-center">关注公众号</p>
              </div>
            </div>

            <div class="display-inline-block font-14 font-color-ligth-grey ml-025">
              <div class="width-90">
                <img style="" src="../../assets/imgs/index/订阅号.jpg" alt="订阅号">
                <p class="text-align-center">关注订阅号</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

  img {
    width: 90px;
    height: 90px;
  }

  tr {
    height: 25px;
  }

  th {
    text-align: left;
    color: #959595;
    width: 120px;
    font-size: 14px;
  }

  a {
    color: #bebebe;
    transition: all 0.5s ease;
  }

  a:hover {
    color: #fe0000;
  }

  td {
    width: 120px;
    font-size: 12px;
    color: #bebebe;
  }

</style>
