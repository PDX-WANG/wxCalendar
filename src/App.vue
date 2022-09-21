<template>
  <PageMain :wxFirstDay="0" :wxWDay="2"/>
</template>

<script>
import PageMain from './components/PageMain/PageMain.vue'

export default {
  name: 'App',
  components: {
    PageMain
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
  width:100%;
  height:500px;
}
</style>
