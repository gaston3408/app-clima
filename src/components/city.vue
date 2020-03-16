<template>
  <div id="city" class="info">
    <section class="container caja text-white">
      <div class="row">
        <div class="col-md-6 col-11">
          <h2 class="txt text-white">{{weather.name}}</h2>
        </div>
      </div>
      <div class="container">
        <div class="row col-12 shadow-lg">
          <div class="col-md-4">
            <img class :src="imgPreUrl + weather.weather[0].icon + '@2x.png'" />
          </div>
          <div class="col-md-8">
            <div class="row">
              <h2 class="texto col-12 col-sm-6 text-white">{{weather.main.temp}}°C</h2>
              <div class="col-12 col-sm-6 temp">
                <p class="text-p text-danger">Max {{weather.main.temp_max}}°C</p>
                <p class="text-p text-warning">Min {{weather.main.temp_min}}°C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "city",
  props: ["weather"],
  data() {
    return {
      imgPreUrl: "http://openweathermap.org/img/wn/",
      cityName: {
        id: 0,
        name: ""
      }
    };
  },
  methods: {}
};
</script>
<style>
.boton {
  height: 0, 5px;
}

.texto {
  margin-top: 20px;
  text-align: center;
  font-size: 4em;
}
.info {
  margin-left: 40px;
  margin-top: 20px;
}
.temp {
  margin-top: 20px;
}
.text-p {
  font-size: 1, 5em;
}
.txt {
  text-align: center;
}
</style>