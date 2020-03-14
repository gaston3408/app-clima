<template>
  <div id="city" class="container info">
    <section class="caja text-white bg-secondary">
      <div class="row">
      <h1 class="txt col-md-12 text-white">{{weather.name}}</h1>
      </div>
      <hr>
      <div class=" row">
      <div class="col-md-4 col-sm-6 "><img :src="imgPreUrl + weather.weather[0].icon + '@2x.png'"></div>
      <div class="col-md-4 col-sm-6 "><h2 class=" texto text-white">{{weather.main.temp}}°C</h2></div>
      <div class="col-md-4"><h3></h3></div>
      </div>
      <!--<button @click='saveFavorite' class="boton btn btn-primary">Agregar a favoritos</button>-->
    </section>
    <!--<pre>{{this.cityFavorite}}</pre>-->     
  </div>
</template>

<script>
export default {
  name: "city",
  props: ['weather'],
data(){
  return{
    imgPreUrl: "http://openweathermap.org/img/wn/",
    cityName:{
      id:0,
      name:'',
    }, 
  }
},
methods: {   },

}
</script>
<style>

.boton{
  height:0,5px,
}

.texto{
  margin-top: 20px;
text-align: center;
font-size: 4em;
}
.info{
  margin-top: 20px;
}
.caja{
  opacity: 0,3;
}
.txt{
  text-align: center;
}
template{
  background: black;
}
</style>