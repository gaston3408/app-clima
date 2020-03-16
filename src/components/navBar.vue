<template>
  <div class=" bg-success">
    <div class="row">
      <a class="col-3 col-sm-4">
        <img class="imagen" src="http://openweathermap.org/img/wn/04d@2x.png" alt />
      </a>

      <div class="col-8 col-sm-6">
        <form class=" form row">
          <input
            v-model="city"
            class="rounded form-group form-control-md col-8 col-sm-8"
            type="search"
            placeholder="ciudad"
            aria-label="Search"
          />
          <button
            class="btn form-group form-control-md btn-outline-secondary col-4 col-sm-4"
            type="submit"
            @click.prevent="loadWeather"
            @enter.prevent="loadWeather"
          >Search</button>
        </form>
      </div>
    </div>
    <span v-if="cityError ==1">
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Error!</strong>
        Por favor ingresa una ciudad.
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
  height: 90%;
}
.form{
  margin-top:30px;
  margin-left:20px;
  margin-right: 50px;
}
</style>