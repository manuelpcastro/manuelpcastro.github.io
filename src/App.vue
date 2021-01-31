<template>
   <div class="app">
      <HelloWorld />
   </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Projects
  }
}
</script>

<style>
.app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
