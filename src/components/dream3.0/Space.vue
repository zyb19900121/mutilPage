<template>
  <div class="pb-50">
    <p class="font-26 text-align-center">梦想装3.0 六大空间</p>
    <div id="mainContent" class="main-content font-16" style="position: relative">
      <div class="text-align-center">
        <table class="table-nav">
          <tr>
            <td class="navTitle" v-for="(item,index) in navList" @click="navActived(index)">{{item}}</td>
          </tr>
        </table>
      </div>
      <div v-if="activedNumber == 0" class="space-detail"
           style="width: 100%; position: absolute;bottom: 0; background-color: rgba(0,0,0,0.4)">
        <p class="font-color-white text-align-center p-5" style="background-color: rgba(0,0,0,0.6)">客餐厅(含玄关过道)--空间配置</p>
        <div style="width: 70%;height: 300px;margin: 0 auto;">
          <table class="text-align-center font-14" width="100%">
            <tr>
              <th width="10%">项目</th>
              <th width="20%">品牌</th>
              <th width="10%">产地</th>
              <th width="20%">品牌级别/材质</th>
              <th width="40%">详情</th>
            </tr>
          </table>
          <div class="table-detail" style="height: 240px; overflow-y: auto;">
            <table class="text-align-center font-12" width="100%">
              <tr v-for="item in livingRoomDetail">
                <td width="10%">{{item.name}}</td>
                <td width="20%">{{item.brand}}</td>
                <td width="10%">{{item.origin}}</td>
                <td width="20%">{{item.level}}</td>
                <td width="40%">{{item.desc}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>


      <div v-if="activedNumber == 1" class="space-detail"
           style="width: 100%; position: absolute;bottom: 0; background-color: rgba(0,0,0,0.4)">
        <p class="font-color-white text-align-center p-5" style="background-color: rgba(0,0,0,0.6)">厨房--空间配置</p>
        <div style="width: 70%;height: 300px;margin: 0 auto;">
          <table class="text-align-center font-14" width="100%">
            <tr>
              <th width="10%">项目</th>
              <th width="20%">品牌</th>
              <th width="10%">产地</th>
              <th width="20%">品牌级别/材质</th>
              <th width="40%">详情</th>
            </tr>
          </table>
          <div class="table-detail" style="height: 240px; overflow-y: auto;">
            <table class="text-align-center font-12" width="100%">
              <tr v-for="item in kitchenDetail">
                <td width="10%">{{item.name}}</td>
                <td width="20%">{{item.brand}}</td>
                <td width="10%">{{item.origin}}</td>
                <td width="20%">{{item.level}}</td>
                <td width="40%">{{item.desc}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
  import space1 from '../../assets/imgs/dream3.0/六空间-客厅.jpg'
  import space2 from '../../assets/imgs/dream3.0/六空间-厨房.jpg'
  import space3 from '../../assets/imgs/dream3.0/六空间-卫生间.jpg'
  import space4 from '../../assets/imgs/dream3.0/六空间-卧室.jpg'
  import space5 from '../../assets/imgs/dream3.0/六空间-阳台.jpg'

  export default {
    name: 'space',
    data() {
      return {

        activedNumber: 0,
        tdList: [],

        navList: [
          '客餐厅(含玄关过道)',
          '厨房',
          '卫生间(主/次卫)',
          '卧室/次卧/书房/儿童房',
          '封闭阳台',
        ],
        livingRoomDetail: [
          {
            name: '天花:乳胶漆',
            brand: '海摩儿',
            origin: '德国',
            level: '国际一线',
            desc: '原顶批挂墙衬，涂刷乳胶漆。'
          },
          {
            name: '天花：石膏线',
            brand: '泰丽雅',
            origin: '北京',
            level: '国内一线',
            desc: '石膏素线绕顶四周封闭圈边。'
          },
          {
            name: '墙面：乳胶漆',
            brand: '海摩儿',
            origin: '德国',
            level: '国际一线',
            desc: '原顶批挂墙衬，做防裂处理涂刷乳胶漆。'
          },
          {
            name: '地面：地砖',
            brand: '马可波罗,东鹏,L&D,法恩莎,稻草人,盛凡',
            origin: '广东',
            level: '国内一线',
            desc: '不限地面材料铺贴面积，配置标准踢脚线。500*500mm、600*600mm、800*800mm抛光砖、抛釉砖、柔光砖、仿古砖，大地砖共计49款可选。'
          },
          {
            name: '地面：地板',
            brand: '瑞士卢森,德国欧家,圣象地板,东洋铭木,红壳地板',
            origin: '瑞士,德国,上海,江苏,江苏',
            level: '国际一线/强化复合,国际一线/强化复合,国内一线/强化复合,国内一线/强化复合,国内二线/实木复合',
            desc: ' 不限地面材料铺贴面积，配置标准踢脚线，强化复合共计135款可选。'
          },
          {
            name: '电气：插座面板',
            brand: 'TCL罗格朗,ABB',
            origin: '广东,瑞士',
            level: '国内一线,国际一线',
            desc: '标配强电、弱电插座面板,数量同电路改造点位。'
          },
          {
            name: '电气：地脚灯',
            brand: 'TCL罗格朗,瑞士ABB',
            origin: '广东,瑞士',
            level: '国内一线/美驭系列,国际一线/永致、得宁系列',
            desc: '标配1个感应式地脚灯。'
          },
          {
            name: '其他：窗台板',
            brand: '高端定制',
            origin: '埃及',
            level: '天然大理石',
            desc: '标配石材窗台板；规格要求宽度不大于200mm，直线造型结构，超过此范围按20元/cm计算。'
          },
        ],
        kitchenDetail:
          [
            {
              name: '天花：集成吊顶',
              brand: '名族',
              origin: '上海',
              level: '国内一线/铝扣板',
              desc: '铝扣板吊顶安装。'
            },
            {
              name: '天花：厨房专用集成照明灯',
              brand: '名族',
              origin: '上海',
              level: '国内一线/LED平板',
              desc: '标配1个厨房专用LED集成照明模块。'
            },
            {
              name: '墙面：墙砖',
              brand: '马可波罗,东鹏,冠珠,L&D,法恩莎,稻草人,盛凡',
              origin: '广东',
              level: '国内一线',
              desc: '不限墙面材料铺贴面积，吊顶以上空间不贴砖,地砖规格：300mm*300mm，墙砖300*300mm、300*450mm、300mm*600mm等，瓷砖48种花色可选。'
            },
            {
              name: '地面：地砖',
              brand: '马可波罗,东鹏,冠珠,L&D,法恩莎,稻草人,盛凡',
              origin: '广东',
              level: '国内一线',
              desc: '不限地面材料铺贴面积，地砖48种花色可选。'
            },
            {
              name: '地面：过门石',
              brand: '高端定制',
              origin: '印度',
              level: '天然大理石',
              desc: '标配1块大理石过门石。'
            },
            {
              name: '墙面：直贴砂浆',
              brand: '直贴砂浆',
              origin: '北京',
              level: '国内一线/成品砂浆',
              desc: '标配墙地砖成品砂浆铺贴，瓷砖保20年不起鼓、脱落。'
            },
            {
              name: '厨房产品：橱柜台面',
              brand: '欧比特,珍雅石材',
              origin: '郑州,天津',
              level: '国内一线',
              desc: '标配单色石英石台面，10色可选。'
            },
            {
              name: '厨房产品：烟机',
              brand: '德意',
              origin: '浙江',
              level: '国内一线',
              desc: '标配欧式或近吸式油烟机。'
            },
            {
              name: '厨房产品：灶具',
              brand: '德意',
              origin: '浙江',
              level: '国内一线',
              desc: '标配嵌入式双眼燃气灶。'
            },
            {
              name: '厨房产品：水槽',
              brand: '安住',
              origin: '德国',
              level: '国际一线',
              desc: '标配1套手工加厚大单盆或冲压双盆，两款可选。'
            },
            {
              name: '厨房产品：水槽龙头',
              brand: '安住',
              origin: '德国',
              level: '国际一线',
              desc: '标配1套可抽拉龙头含角阀及软管。'
            },
            {
              name: '木作产品：内门（平开门或铝合金移门）',
              brand: '欧派,科尔格兰',
              origin: '浙江,北京',
              level: '国内一线,国内一线',
              desc: '标配1扇平开内门，包含：门扇、门套。'
            },
            {
              name: '木作产品：内门五金',
              brand: '欧派',
              origin: '浙江',
              level: '国内一线',
              desc: '标配1套内门五金，包含：静音门锁、合页、门吸。'
            },
            {
              name: '电气：插座面板',
              brand: 'TCL罗格朗,ABB',
              origin: '广东,瑞士',
              level: '国内一线/美驭系列,国际一线/永致、得宁系列',
              desc: '标配强电、弱电插座面板,数量同电路改造点位。'
            },
            {
              name: '整体橱柜',
              brand: '有卓木作,德意橱柜',
              origin: '北京,北京',
              level: '国内一线',
              desc: '仅提供房屋原始结构内厨房的橱柜产品，不提供因墙体改造后扩充的橱柜产品服务。橱柜门板材质有双饰面、吸塑、亚克力共计234款花色可选。'
            },
            {
              name: '整体橱柜',
              brand: '有卓木作,德意橱柜',
              origin: '北京,北京',
              level: '国内一线',
              desc: ' 橱柜不限延米（U型、双1字型除外），包含灶台拉篮、水池柜、抽屉柜、储物柜、拉篮柜、吊柜等。橱柜为定制产品，须由设计师上门精确测量、出具设计方案，经确认后方能生产。'
            },
          ]
      }
    },

    mounted() {
      this.tdList = document.getElementsByClassName('navTitle');
      this.tdList[0].style.backgroundColor = 'rgba(255, 0, 0, 0.6)'
    },

    watch: {
      activedNumber() {
        for (var i = 0; i < this.tdList.length; i++) {
          this.tdList[i].style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
        }
        this.tdList[this.activedNumber].style.backgroundColor = 'rgba(255, 0, 0, 0.6)'

      }
    },

    methods: {
      navActived(index) {
        this.activedNumber = index;
        switch (index) {
          case 0:
            document.getElementById('mainContent').style.backgroundImage = 'url(' + space1 + ')';
            break;
          case 1:
            document.getElementById('mainContent').style.backgroundImage = 'url(' + space2 + ')';
            break;
          case 2:
            document.getElementById('mainContent').style.backgroundImage = 'url(' + space3 + ')';
            break;
          case 3:
            document.getElementById('mainContent').style.backgroundImage = 'url(' + space4 + ')';
            break;
          case 4:
            document.getElementById('mainContent').style.backgroundImage = 'url(' + space5 + ')';
            break;
        }
      }
    }
  }
</script>

<style scoped>

  .table-nav {
    width: 100%;
  }

  .table-nav td {
    font-size: 14px;
    padding: 8px;
    border: none;
    width: 20%;
    color: white;
    border-right: 2px solid rgba(255, 255, 255, 0.4);
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    transition: all 0.5s ease;
  }

  .table-nav td:hover {
    color: #fff;
    background-color: rgba(255, 0, 0, 0.6);
  }

  .main-content {
    height: 650px;
    margin-top: 30px;
    background-image: url("../../assets/imgs/dream3.0/六空间-客厅.jpg");
    background-repeat: round;
    transition: all 1s ease
  }

  .space-detail table tbody {
    overflow-y: scroll;
  }

  .space-detail table th, td {
    padding: 10px;
    color: white;
  }

  .table-detail table tr {
    transition: all 0.5s ease;
  }

  .table-detail table tr:hover {
    background-color: rgba(0, 0, 0, 0.7)
  }


</style>
