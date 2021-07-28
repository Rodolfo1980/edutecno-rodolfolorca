<template>
  <div id="app">
    <Header titulo="Bienvenidos al Desafío Opcional Jest" color="green"/>
    <HelloWorld msg="Rodolfo Lorca - Desafío Latam 2021"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
