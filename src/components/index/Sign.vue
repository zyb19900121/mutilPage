<template>
  <div class="font-16 position-relative">
    <img width="100%" height="400" src="../../assets/imgs/index/ad.jpg" alt="">

    <div class="position-absolute bg-color-white top-30 left-100 height-340 text-align-center display-inline-block">

      <div class="sign-bg text-align-center bg-color-grey width-280 height-150">
        <p class="font-color-white font-60 font-bold">23</p>
        <p class="font-color-white font-14 mt-015">今日还剩</p>
        <p class="font-color-white font-12 mt-20">每日限30名免费获得</p>
        <p class="font-color-white font-12">工程报价明细、户型规划设计、量房</p>
      </div>

      <p><input type="text" placeholder="您的姓名"></p>
      <p><input type="text" placeholder="联系方式"></p>

      <button>立即报名</button>

    </div>

  </div>

</template>

<script>
  export default {}
</script>

<style scoped>

  input {
    width: 220px;
    margin-top: 20px;
    padding: 8px;
    font-size: 16px
  }

  button {
    border: none;
    background-color: #fe0000;
    color: white;
    margin-top: 20px;
    padding: 5px;
    font-size: 18px;
    width: 238px;
    transition: all 0.5s ease;
    cursor: pointer;
  }

  button:hover {
    background-color: crimson;
  }

  .sign-bg {
    background-image: url("../../assets/imgs/index/报名-bg.jpg");
    background-repeat: no-repeat;
  }

</style>
