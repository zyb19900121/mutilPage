<template>
  <div class="pb-50 pt-50">
    <div class="div-hr width-1100 magin0Auto font-16" style="height: 30px;">
      <span class="display-inline-block font-color-white line-height-30 height-30 plr-10 bg-color-dark-grey">友情链接</span>
    </div>
    <div class="mt-20 font-14 width-1100 magin0Auto font-color-dark-grey text-align-center">
      <ul class="display-inline-block">
        <li v-for="item in linkOne">{{item}}</li>
      </ul>

      <ul class="display-inline-block">
        <li v-for="item in linkTwo">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        linkOne:[
          '上海二手房',
          '南京装修网',
          '装修存家居',
          '新房装修',
          '老房装修',
          '北京装修',
          '北京装修报价',
          '装修报价',
          '北京商铺网',
          '昆明装饰公司',
          '安康装修网'
        ],
        linkTwo:[
          '合肥商铺网',
          '铝包木门窗',
          '装修常见问题',
          '侃家网',
          '朝阳房产网',
          '兰州装饰招标网',
          '上海二手房',
          '洛阳装修',
          '阜阳房产网'
        ]
      }

    }
  }
</script>

<style scoped>

  .div-hr {
    background-color: #d2d2d2;
  }

  li {
    padding-left: 6px;
    padding-right: 6px;
    float: left;
    list-style: none;
    transition: all 0.5s ease;
  }

  li:hover{
    cursor: pointer;
    color: #fe0000;
  }

</style>
