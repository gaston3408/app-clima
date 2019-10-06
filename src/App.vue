<template>
  <div id="app">
    <city :weather='cityWeather'/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import city from './components/city.vue'
export default {
  name: 'app',
  components: {
    city
  },
  data (){
  return{
    cityWeather:[],
    nameCity:'buenos aires',


  }
  },
  methods: {
    loadWeather: async function() {
      try{
      const data = await fetch
      // se agrega a la url un id personal q te da la pagina al registrarte &appid=
      // se le agrega la unidad metrica &units=metric si es en celsious
      (`https://api.openweathermap.org/data/2.5/weather?q=${this.nameCity}&appid=18bfed34a43d9b87ec7e34f824ff105b&units=metric`);
      this.cityWeather = await data.json();
      }catch ( error ) {
        throw error
        }
    }
  },
  mounted(){
    this.loadWeather()
  },
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
font-size: 14px;

}
</style>
