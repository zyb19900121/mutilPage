<template>
  <div class="pb-50">
    <p class="font-26 text-align-center">梦想装3.0 六大空间</p>
    <div id="mainContent" class="main-content font-16">
      <div class="text-align-center">
        <table class="table-nav">
          <tr>
            <td class="navTitle" v-for="(item,index) in navList" @click="navActived(index)">{{item}}</td>
          </tr>
        </table>
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

</style>
