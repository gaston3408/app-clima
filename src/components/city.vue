<template>
  <div id="city">
    <div>
    <div class="card text-center container col-row">
     <div class="card-header ">{{weather.name}} </div>
     <div class=" mb-4 col-sm-3" style="max-width:15rem;">
       <img :src="imgPreUrl + weather.weather[0].icon + '@2x.png'">
     </div>
     <div class=" mb-4 col-sm-4" style="max-width:15rem;">
       <h1>{{weather.main.temp}}°C</h1>
     </div>
   </div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary" >ACTUALIZAR</a>
  </div>
  </div>
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