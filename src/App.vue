<template>
  <div id="app">
    <nav-bar @search-city='searchCity1' />
    <city :weather='citySearched'/>
    <listCity />
  </div>
</template>

<script>
import city from './components/city.vue'
import navBar from './components/navBar.vue'
import listCity from './components/listCity.vue'
export default {
  name: 'app',
  components: {
    city,
    navBar,
    listCity

  },
  data (){
    return {
      citySearched:[],
    }
  },
  methods:{
    searchCity1: function(search){
      this.citySearched = search
    }
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
  font-size: 14px;

}

</style>
