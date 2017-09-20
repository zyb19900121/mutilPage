<template>
  <div id="app">
    <Header></Header>
    <HeaderNav indexName='gallery'></HeaderNav>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {

      }
    }
  }

</script>

<style>

  #app {
    min-width: 1200px;
  }

  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
</style>
