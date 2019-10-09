<template>
  <div id="navBar">
    <nav class="navbar navbar-light bg-primary">
      <a class="navbar-brand"><img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""></a>
      <form class="form-inline"   >
        <input v-model='city' class="form-control mr-sm-3" type="search" placeholder="ELIJA CIUDAD" aria-label="Search" />
        <button class="btn btn-dark my-2 my-sm-0" type="submit" @click.prevent='loadWeather' @enter.prevent='loadWeather' >BUSCAR</button>
      </form>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data(){
    return {
     city:'',
     cityWeather:[],

    }
  },
  methods: {
     search(){
          this.$emit('search-city',this.cityWeather)
      },
      loadWeather: async function() {
      try{
        // se agrega a la url un id personal q te da la pagina al registrarte &appid=
        // se le agrega la unidad metrica &units=metric si es en celsious
         const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=18bfed34a43d9b87ec7e34f824ff105b&units=metric`
         const data = await fetch(url);
         this.cityWeather = await data.json();
         return this.search();
        } catch ( error ) {
        throw error
      }
    }
  },
};
</script>