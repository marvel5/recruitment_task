<template>
  <div id="app">
    <nav class="w-full h-auto"></nav>
    <div class="main-content flex-21 container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/1 lg:1/1 xl:w-1/2 p-6" v-for="n in 3" :key="n">
          <component-a :key="n"></component-a>
        </div>
      </div>
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
