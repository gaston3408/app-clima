<template>
  <div id="navBar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand">
        <img class="imagen" src="http://openweathermap.org/img/wn/04d@2x.png" alt />CLIMA
      </a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <form class="form-inline my-2 my-lg-0">
          <input
            v-model="city"
            class="form-control mr-sm-2"
            type="search"
            placeholder="ciudad"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
            @click.prevent="loadWeather"
            @enter.prevent="loadWeather"
          >Search</button>
        </form>
      </div>
    </nav>
    <span v-if="cityError ==1">
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Error!</strong> Por favor ingresa una ciudad.
        
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      city: "",
      cityWeather: [],
      cityError: 2
    };
  },
  methods: {
    search() {
      this.$emit("search-city", this.cityWeather);
    },
    loadWeather: async function() {
      try {
        // se agrega a la url un id personal q te da la pagina al registrarte &appid=
        // se le agrega la unidad metrica &units=metric si es en celsious
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=18bfed34a43d9b87ec7e34f824ff105b&units=metric`;
        const data = await fetch(url);
        this.cityWeather = await data.json();
        this.cityError = 2;
        if (data.status !== 200) {
          this.cityError = 1;
        } else {
          return this.search();
        }
      } catch (error) {
        throw error;
      }

      //if ( data.status !== 200 ) {
      // throw error('ciudad incorrecta');
      //}
      //else{
      //return this.search();
      //}
    }
  }
};
</script>
<style>
.imagen {
  width: 40%;
  height: 40%;
}
</style>