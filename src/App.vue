<template>
  <div id="free">
    <PageMain :wxFirstDay="0" :wxWDay="2"/>
  </div>
</template>

<script>
import PageMain from './components/PageMain/PageMain.vue'
import FreeArea from './components/PageMain/wxFreeArea'
export default {
  name: 'App',
  components: {
    PageMain
  },
  mounted(){
    console.log(document.querySelectorAll("#free"));
    FreeArea("#free");
  }
}
</script>

<style type="scss">
div{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
