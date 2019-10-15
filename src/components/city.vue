<template>
  <div id="city" class="container info">
    <section class="caja">
      <div class="row">
      <h1 class="txt col-md-12 ">{{weather.name}}</h1>
      </div>
      <hr>
      <div class=" row">
      <div class="col-md-4 col-sm-6 "><img :src="imgPreUrl + weather.weather[0].icon + '@2x.png'"></div>
      <div class="col-md-4 col-sm-6 "><h2 class=" texto">{{weather.main.temp}}°C</h2></div>
      <div class="col-md-4"><h3></h3></div>
      </div>
    </section>     
  </div>
</template>

<script>
export default {
  name: "city",
  props: ['weather'],
data(){
  return{
    imgPreUrl: "http://openweathermap.org/img/wn/",
  }
},
  methods: {
    
  },

}


</script>
<style>

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
  background: rgb(208, 220, 236);
  border-radius: 20px;
}
.txt{
  text-align: center;
  color: rgb(122, 94, 94);
}
</style>