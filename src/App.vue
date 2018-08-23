<template>
  <div id="app">
    <GeoCoderForm />
  </div>
</template>

<script>
import GeoCoderForm from './components/GeoCoderForm'

export default {
  name: 'App',
  components: {
    GeoCoderForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
