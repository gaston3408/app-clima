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
      <button @click='saveFavorite' class="boton btn btn-primary">Agregar a favoritos</button>
    </section>
    <pre>{{this.cityFavorite}}</pre>     
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
    cityFavorite: {
      city_id:0,
      min_temp:0,
      max_temp:0,
      temperature:0,
      icon:'',
    }, 
  }
},
methods: {
    saveFavorite: async function() {
      this.cityName.id ++,
      this.cityName.name = this.weather.name
     
     const url1 = 'http://localhost:8000/api/cities'
         const settings1 = {
             method: 'post',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json',
             },
             body: JSON.stringify(this.cityName)
         }
      try {
        const response = await fetch(url1,settings1);
        this.json = await response.json();
      } catch (error) {
        throw error;
      }
      this.cityFavorite.city_id = this.cityName.id,
      this.cityFavorite.temperature = this.weather.main.temp,
      this.cityFavorite.icon = this.weather.weather[0].icon,
      this.cityFavorite.min_temp = this.weather.main.temp_min,
      this.cityFavorite.max_temp = this.weather.main.temp_max
      
      const url = 'http://localhost:8000/api/temperatures'
         const settings = {
             method: 'post',
             headers:{
                 'Accept':'application/json',
                 'Content-Type':'application/json',
             },
             body: JSON.stringify(this.cityFavorite)
         }
      try {
        const response = await fetch(url,settings);
        this.json = await response.json();
      } catch (error) {
        throw error;
      }
     
    }
  },

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
  background: rgb(208, 220, 236);
  border-radius: 10px;
}
.txt{
  text-align: center;
  color: rgb(122, 94, 94);
}
</style>