<template>
  <div id="app">
    <div class="container mx-auto">
      <component-a v-for="n in 3" :key="n"></component-a>
    </div>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA/ComponentA.vue'

export default {
  name: 'App',
  components: {
    ComponentA
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: rgb(100,113,112);
  background: linear-gradient(180deg, rgba(100,113,112,1) 0%, rgba(9,12,21,1) 100%);

}
</style>
